import React, { Component } from 'react'
import Chart from './Chart'
import QuantilesPlot from './QuantilesPlot'
import PointGraph from './PointGraph'

class Exams extends Component {
    constructor({props, match}) {
        super(props)
        this.state = {
            semester: {
                data: new Array(10).fill(0).map(() => [Math.random() * 100, Math.random() * 25, Math.random() * 25 + 25, Math.random() * 25 + 50, Math.random() * 25 + 75 ]),
                show: match.params.graphs === 'semester',
                color: 120,
            },
            ptm: {
                data: new Array(10).fill(0).map(() => [Math.random() * 100, Math.random() * 25, Math.random() * 25 + 25, Math.random() * 25 + 50, Math.random() * 25 + 75 ]),
                show: match.params.graphs === 'ptm',
                color: 240
            },
            stations: {
                data: new Array(3).fill(0).map((d,i) => [i*3+1, Math.random() * 100]),
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
                            <h5 className="card-title">Deine Prüfungsergebnisse</h5>
                            <div className="m-3" style={{height: '12rem'}}>
                                <Chart xDomain={[0,9]} yDomain={[0,100]}>
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
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Exams