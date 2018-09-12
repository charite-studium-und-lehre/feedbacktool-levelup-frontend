import React, { Component } from 'react'
import Chart from '../Charting/Chart'
import QuantilesPlot from '../Charting/QuantilesPlot'
import PointGraph from '../Charting/PointGraph'
import data from '../data'

class Exams extends Component {
    constructor({props, match}) {
        super(props)
        this.state = {
            semester: {
                data: data.semester,
                show: (match.params.graphs || 'semester') === 'semester',
                color: 120,
            },
            ptm: {
                data: data.ptm,
                show: match.params.graphs === 'ptm',
                color: 240
            },
            stations: {
                data: data.stations,
                show: match.params.graphs === 'stations',
                color: 0
            }
        }
    }

    toggleVisibility(graph) {
        let o = {...this.state[graph]}
        o.show = !o.show
        const s = {}
        s[graph] = o
        this.setState(s)
    }

    shownGraphs() {
        return this.state.semester.show + this.state.ptm.show + this.state.stations.show
    }

    render() {
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
                                        <Chart xDomain={[1,data.n]} yDomain={[0,100]} ticks={{x: data.n}}>
                                            <QuantilesPlot 
                                                color={this.state.semester.color}
                                                data={this.state.semester.data}
                                                className={this.state.semester.show ? 'show' : 'hidden'}
                                                showAreas={this.state.semester.show && this.shownGraphs() < 2}>
                                            </QuantilesPlot>
                                            <QuantilesPlot 
                                                color={this.state.ptm.color}
                                                data={this.state.ptm.data}
                                                className={this.state.ptm.show ? 'show' : 'hidden'}
                                                showAreas={this.state.ptm.show && this.shownGraphs() < 2}>
                                            </QuantilesPlot>
                                            <PointGraph
                                                data={this.state.stations.data}
                                                color={`hsla(${this.state.stations.color}, 100%, 30%, .4)`}
                                                className={this.state.stations.show ? 'show' : 'hidden'}>
                                            </PointGraph>
                                        </Chart>
                                    </div>
                                    <div className="row p-3 mt-4">
                                        <div className="input-group col-sm-4">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text" style={{backgroundColor: `hsla(${this.state.semester.color}, 100%, 60%, .4)`}}>
                                                    <input type="checkbox" checked={this.state.semester.show} onChange={() => this.toggleVisibility('semester')} aria-label="Semesterprüfungen zeigen" />
                                                </div>
                                                <span className="input-group-text">Semesterprüfungen</span>
                                            </div>
                                        </div>
                                        <div className="input-group col-sm-4">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text" style={{backgroundColor: `hsla(${this.state.ptm.color}, 100%, 60%, .4)`}}>
                                                    <input type="checkbox" checked={this.state.ptm.show} onChange={() => this.toggleVisibility('ptm')} aria-label="Semesterprüfungen zeigen" />
                                                </div>
                                                <span className="input-group-text">PTM</span>
                                            </div>
                                        </div>
                                        <div className="input-group col-sm-4">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text" style={{backgroundColor: `hsla(${this.state.stations.color}, 100%, 60%, .4)`}}>
                                                    <input type="checkbox" checked={this.state.stations.show} onChange={() => this.toggleVisibility('stations')} aria-label="Semesterprüfungen zeigen" />
                                                </div>
                                                <span className="input-group-text">Stationsprüfungen</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <h3>Foo Bar</h3>
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