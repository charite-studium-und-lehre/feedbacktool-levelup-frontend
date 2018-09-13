import React, { Component } from 'react'
import Chart from '../Charting/Chart'
import { QuantilesPlotWithGraphData, PointGraphWithGraphData } from './WithGraphData'
import graphs from './Graphs'
import Checkbox from './Checkbox'
import _ from 'lodash'

class Exams extends Component {
    constructor({props, match}) {
        super(props)
        this.graphs = graphs.data
        this.state = {
            shownGraphs: [ match.params.graphs || 'semester' ],
            selectedPoint: {}
        }
    }

    toggleVisibility( graph ) {
        let s = [ ...this.state.shownGraphs ]
        this.setState({
            shownGraphs: _.xor(s, [ graph ])
        })
    }

    isGraphShown( graph ) {
        return this.state.shownGraphs.indexOf(graph) >= 0
    }

    shownGraphs() {
        return this.state.shownGraphs.length
    }

    selectPoint( graph, point ) {
        console.log(point + ' selected in ' + graph)
        this.setState({ selectedPoint: { graph, point }})
    }
    
    render() {
        const checkboxes = this.graphs.map(( graph ) => (<Checkbox 
            key={graph.name}
            color={graph.color}
            checked={this.isGraphShown(graph.name)}
            onChange={() => this.toggleVisibility(graph.name)} 
            label={graph.label}>
        </Checkbox>))

        return (
            <div className="container-fluid">
            <div className="row mb-2 mt-2">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-9">
                                    <h5 className="card-title">Deine Prüfungsergebnisse</h5>
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
                                        {checkboxes}
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <h3>Zahlen zu angeklickter Prüfung</h3>
                                    <h3>Link zu Details zu angeklickter Prüfung</h3>
                                    <h3>Link zu Fragen in angeklickter Prüfung</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Exams