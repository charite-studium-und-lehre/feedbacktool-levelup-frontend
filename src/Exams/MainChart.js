import React, { Component } from 'react'
import _ from 'lodash'
import { TimeChart } from '../Charting/Chart'
import { QuantilesPlotWithGraphData, PointGraphWithGraphData } from './WithGraphData'
import Checkbox from './Checkbox'
import InfoOverlay from './InfoOverlay'
import Legend from '../Charting/Legend'
import { XAxis, YAxis } from '../Charting/Axis'
import Legends from '../Core/LegendTexts'
const LegendText = Legends.Exams.MainChart

class MainChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPoint: {},
        }
    }

    selectPoint( graph, point ) {
        const selectedPoint = 
            this.state.selectedPoint.graph === graph && this.state.selectedPoint.point === point ? {} : { graph, point }
        this.setState({ selectedPoint })
    }

    selectedPointData() {
        const graph = this.props.graphs.find(g => g.name === this.state.selectedPoint.graph)
        if(!graph) return {}
        return graph.data.find(d => d.x === this.state.selectedPoint.point)
    }

    toggleVisibility( graph ) {
        if( graph === this.state.selectedPoint.graph ) {
            this.setState({ selectedPoint: {} })
        }
        this.props.toggleVisibility( graph )
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <div className="d-flex ">
                        <div className="flex-grow-1">
                            <Legend title={LegendText.title}>{LegendText.text}</Legend>
                            <div className="m-3" style={{height: '12rem'}}>
                                <TimeChart xDomain={[new Date(2011, 6, 15),new Date(2018, 6, 15)]} yDomain={[0,100]}>
                                    <XAxis ticks={{count: this.props.pointCount}} label="Semester"/>
                                    <YAxis label="% richtig" />
                                    <QuantilesPlotWithGraphData
                                        className={_.includes(this.props.shownGraphs, 'semester') ? 'show' : 'hidden'}
                                        graph={this.props.graphs[0]}
                                        selectPoint={this.selectPoint.bind(this)}
                                        showAreas={this.props.shownGraphs.length < 2 && _.includes(this.props.shownGraphs, 'semester')}
                                        selectedPoint={this.state.selectedPoint.graph === 'semester' ? this.state.selectedPoint.point : null} />
                                    <QuantilesPlotWithGraphData
                                        className={_.includes(this.props.shownGraphs, 'ptm') ? 'show' : 'hidden'}
                                        graph={this.props.graphs[1]}
                                        selectPoint={this.selectPoint.bind(this)}
                                        showAreas={this.props.shownGraphs.length < 2 && _.includes(this.props.shownGraphs, 'ptm')} 
                                        selectedPoint={this.state.selectedPoint.graph === 'ptm' ? this.state.selectedPoint.point : null}/>
                                    <PointGraphWithGraphData 
                                        graph={this.props.graphs[2]} 
                                        className={_.includes(this.props.shownGraphs, 'stations') ? 'show' : 'hidden'} 
                                        selectPoint={(graph, point) => this.selectPoint(graph, point.x)} 
                                        selectedPoint={this.state.selectedPoint.graph === 'stations' ? this.state.selectedPoint.point : null} />
                                </TimeChart>
                            </div>
                            <div className="row p-3 mt-4">
                            {this.props.graphs.map( graph => (
                                <Checkbox 
                                    key={graph.name}
                                    color={graph.color}
                                    checked={_.includes(this.props.shownGraphs, graph.name)}
                                    onChange={() => this.toggleVisibility(graph.name)} 
                                    label={graph.label}>
                                </Checkbox>))}
                            </div>
                        </div>
                        <InfoOverlay 
                            visible={!!this.state.selectedPoint.graph}
                            graph={(this.props.graphs.find(g => g.name === this.state.selectedPoint.graph) || {label: ''})}
                            onClose={() => this.selectPoint(null, null)}
                            selectedPoint={this.selectedPointData()}>
                        </InfoOverlay>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainChart