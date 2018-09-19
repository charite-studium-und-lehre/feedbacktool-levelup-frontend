import React, { Component } from 'react'
import Chart from '../Charting/Chart'
import { QuantilesPlotWithGraphData, PointGraphWithGraphData } from './WithGraphData'
import graphs from './Graphs'
import Checkbox from './Checkbox'
import _ from 'lodash'
import SemesterInfo from './SemesterInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class Exams extends Component {
    constructor({props, match}) {
        super(props)
        this.legend = React.createRef()
        this.graphs = graphs.data
        this.state = {
            shownGraphs: [ match.params.graphs || 'semester' ],
            selectedPoint: {},
            showHelp: true,
        }
    }

    toggleVisibility( graph ) {
        let selectedPoint = { ...this.state.selectedPoint }
        if( graph === this.state.selectedPoint.graph )
            selectedPoint = {}

        let s = [ ...this.state.shownGraphs ]
        this.setState({
            shownGraphs: _.xor(s, [ graph ]),
            selectedPoint
        })
    }

    toggleHelp() {
        this.originalHeight = this.originalHeight || this.legend.current.offsetHeight
        this.legend.current.style.height = !this.state.showHelp ? `${this.originalHeight}px` : 0
        this.setState({ ...this.state, showHelp: !this.state.showHelp })
    }
    isGraphShown( graph ) {
        return this.state.shownGraphs.indexOf(graph) >= 0
    }

    shownGraphs() {
        return this.state.shownGraphs.length
    }

    selectPoint( graph, point ) {
        let selectedPoint = 
            this.state.selectedPoint.graph === graph && this.state.selectedPoint.point === point ? {} : { graph, point }
        this.setState({ selectedPoint })
    }

    selectedPointData() {
        const graph = this.graphs.find(g => g.name === this.state.selectedPoint.graph)
        if(!graph) return {}
        const data = graph.data.find(d => d.x === this.state.selectedPoint.point)
        return data
    }
    
    render() {
        return (
            <div className="container-fluid">
            <div className="row my-2">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex ">
                                <div className="flex-grow-1">
                                    <div className="d-flex">
                                        <h5 className="mr-auto">Deine Prüfungsergebnisse</h5>
                                        <div className="pr-3"><FontAwesomeIcon onClick={() => this.toggleHelp()} className={this.state.showHelp ? 'text-primary' : 'text-muted'} style={{fontSize: '1.3rem'}} icon={faInfoCircle} /></div>
                                    </div>
                                    <div ref={this.legend} className="animated row m-2" style={{overflow: 'hidden'}}>
                                        Legend
                                    </div>
                                    <div className="m-3" style={{height: '12rem'}}>
                                        <Chart xDomain={[1,graphs.pointCount]} yDomain={[0,100]} ticks={{x: graphs.pointCount}}>
                                            <QuantilesPlotWithGraphData
                                                context={this}
                                                graph={this.graphs[0]}
                                                showAreas={this.isGraphShown('semester') && this.shownGraphs() < 2} />
                                            <QuantilesPlotWithGraphData
                                                context={this}
                                                graph={this.graphs[1]}
                                                showAreas={this.isGraphShown('ptm') && this.shownGraphs() < 2} />
                                            <PointGraphWithGraphData graph={this.graphs[2]} context={this} />
                                        </Chart>
                                    </div>
                                    <div className="row p-3 mt-4">
                                    {this.graphs.map( graph => (
                                        <Checkbox 
                                            key={graph.name}
                                            color={graph.color}
                                            checked={this.isGraphShown(graph.name)}
                                            onChange={() => this.toggleVisibility(graph.name)} 
                                            label={graph.label}>
                                        </Checkbox>))}
                                    </div>
                                </div>
                                <SemesterInfo
                                    graph={(this.graphs.find(g => g.name === this.state.selectedPoint.graph) || {}).label}
                                    data={this.selectedPointData()} 
                                    visible={!!this.state.selectedPoint.graph} 
                                    onClose={() => this.selectPoint(null, null)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {this.state.shownGraphs.map( ( graph, i ) => (
                <div className="row my-2" key={i}>
                    <div className="col">
                        <div className="card p-2">
                            <h3>{graph}</h3>
                        </div>
                    </div>
                </div>))}
            </div>
        );
    }
}

export default Exams