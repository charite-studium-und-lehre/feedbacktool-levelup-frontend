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
        this.state = { extended: true }
    }

    toggleExtended() {
        this.setState({ extended: !this.state.extended })
    }

    render() {
        const percentage = this.props.correct / this.props.questions * 100
        return (
            <div className="card m-2 w-100">
                <div className="card-body">
                    <h4>{this.props.title}</h4>
                    <div className="p-2 pl-5" style={{height: '6rem'}} onClick={() => this.toggleExtended()}>
                        <LinearChart xDomain={[0,100]} yDomain={[0,4]}>
                            <XAxis horizontal ticks={{count: 6}} />
                            <YAxis horizontal ticks={{count: 6, format: d => labels[d-1] }} />
                            <HorizontalBarGraph labels data={new Array(3).fill(0).map((d,i) => ({x: i+1, y: Math.floor(Math.random() * 100)}))} />
                        </LinearChart>
                    </div>
                    {this.state.extended &&
                        <div className="p-2" onClick={() => this.toggleExtended()}>
                            <Legend>Legende</Legend>
                            <LinearChart xDomain={[1,5]} yDomain={[0,30]}>
                                <YAxis label="richtige Antworten" ticks={{count: 4}} />
                                <XAxis label="Semester" ticks={{count: 5}} />
                                <LineGraph data={new Array(4).fill(0).map((d,i) => ({ x:i+1, y: _.random(0,20) })).concat([{x: 5, y: this.props.correct}]) } color="hsla(250, 100%, 50%, .6)" />
                            </LinearChart>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Subject