import React, { Component } from 'react';
import AreaGraph from './AreaGraph';
import Chart from './Chart';
import LineGraph from './LineGraph';

class Exams extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shownGraphs: []
        }
        this.data = new Array(10).fill(0).map(() => [Math.random() * 100, Math.random() * 25, Math.random() * 25 + 25, Math.random() * 25 + 50, Math.random() * 25 + 75 ])
    }
    toggleVisibility(element) {
        this.setState({
            shownGraphs: [element]
        })
    }

    render() {
        return (
            <div className="container-fluid">
            <div className="row mb-2 mt-2">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Deine Prüfungen</h5>
                            <div className="m-3">
                                <Chart xDomain={[0,this.data.length - 1]} yDomain={[0,100]}>
                                    <AreaGraph className={this.state.shownGraphs.some(g => g === 'semester') ? 'show' : 'hidden'} 
                                        data={this.data.map(d => d.slice(1,3))} 
                                        color="hsla(120, 100%, 40%, .4)">
                                    </AreaGraph>
                                    <AreaGraph data={this.data.map(d => d.slice(2,4))} color="hsla(120, 100%, 60%, .4)"></AreaGraph>
                                    <AreaGraph data={this.data.map(d => d.slice(3))} color="hsla(120, 100%, 80%, .4)"></AreaGraph>
                                    <LineGraph data={this.data.map(d => d[0])} color="hsla(240, 100%, 50%, .4)"></LineGraph>
                                </Chart>
                            </div>
                            <div className="d-flex p-3 mt-4">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text" style={{backgroundColor: 'hsla(120, 100%, 60%, .4)'}}>
                                            <input type="checkbox" checked={true} onChange={() => this.toggleVisibility('semester')} aria-label="Semesterprüfungen zeigen" />
                                        </div>
                                        <span className="input-group-text">Semesterprüfungen</span>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input type="checkbox" aria-label="PTM zeigen" />
                                        </div>
                                        <span className="input-group-text">PTM</span>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <input type="checkbox" aria-label="PTM zeigen" />
                                        </div>
                                        <span className="input-group-text">PTM</span>
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