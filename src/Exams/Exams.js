import React, { Component } from 'react'
import Chart from '../Charting/Chart'
import QuantilesPlot from '../Charting/QuantilesPlot'
import PointGraph from '../Charting/PointGraph'
import graphs from './Graphs'
import Checkbox from './Checkbox'
import _ from 'lodash'

class Exams extends Component {
    constructor({props, match}) {
        super(props)
        this.graphs = graphs.data
        this.state = {
            shownGraphs: [ match.params.graphs || 'semester' ]
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
                                            <QuantilesPlot 
                                                color={this.graphs[0].color}
                                                data={this.graphs[0].data}
                                                className={this.isGraphShown('semester') ? 'show' : 'hidden'}
                                                showAreas={this.isGraphShown('semester') && this.shownGraphs() < 2}>
                                            </QuantilesPlot>
                                            <QuantilesPlot 
                                                color={this.graphs[1].color}
                                                data={this.graphs[1].data}
                                                className={this.isGraphShown('ptm') ? 'show' : 'hidden'}
                                                showAreas={this.isGraphShown('ptm') && this.shownGraphs() < 2}>
                                            </QuantilesPlot>
                                            <PointGraph
                                                data={this.graphs[2].data}
                                                color={`hsla(${this.graphs[2].color}, 100%, 30%, .4)`}
                                                className={this.isGraphShown('stations') ? 'show' : 'hidden'}>
                                            </PointGraph>
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