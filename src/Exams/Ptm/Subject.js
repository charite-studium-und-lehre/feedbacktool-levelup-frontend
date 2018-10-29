import React, { Component } from 'react'
import _ from 'lodash'
import { LinearChart } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis'
import LineGraph from '../../Charting/LineGraph'
import HorizontalBarGraph from '../../Charting/HorizontalBarGraph'
import Legend from '../../Charting/Legend'

const labels = ['richtig', 'falsch', 'weiß nicht']
class Subject extends Component {
    constructor(props) {
        super(props)
        this.state = { mode: "current" }
    }

    setMode(mode) {
        this.setState({ mode })
    }

    render() {
        return (
            <div className="card m-2 flex-grow-1" style={{minWidth: '20rem'}}>
                <div className="card-body">
                    <h4>{this.props.title}</h4>
                    <div style={{textAlign: 'right'}}>
                        <label className="m-0 mr-2"><input type="radio" name={`subject-${this.props.id}-mode`} checked={this.state.mode === 'current'} onChange={() => this.setMode('current')} className="mx-2" />aktuell</label>
                        <label><input type="radio" name="totals.mode" checked={this.state.mode === 'timeline'} onChange={() => this.setMode('timeline')} className="mx-2" />zeitl. Verlauf</label>
                    </div>
                    {this.state.mode === "current" ? (
                        <div className="p-2 pl-5" style={{height: '6rem'}} onClick={() => this.setMode()}>
                            <LinearChart xDomain={[0,100]} yDomain={[0,4]}>
                                <XAxis horizontal ticks={{count: 6}} />
                                <YAxis horizontal ticks={{count: 6, format: d => labels[d-1] }} />
                                <HorizontalBarGraph labels data={new Array(3).fill(0).map((d,i) => ({x: i+1, y: Math.floor(Math.random() * 100)}))} />
                            </LinearChart>
                        </div>
                    ) : (
                        <div className="p-2" onClick={() => this.setMode()}>
                            <Legend>Legende</Legend>
                            <LinearChart xDomain={[1,5]} yDomain={[0,30]}>
                                <YAxis label="richtige Antworten" ticks={{count: 4}} />
                                <XAxis label="Semester" ticks={{count: 5}} />
                                <LineGraph data={new Array(4).fill(0).map((d,i) => ({ x:i+1, y: _.random(0,20) })).concat([{x: 5, y: this.props.correct}]) } color="hsla(250, 100%, 50%, .6)" />
                            </LinearChart>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Subject