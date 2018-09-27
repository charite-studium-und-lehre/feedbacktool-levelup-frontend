import React, { Component } from 'react'
import Chart from '../../Charting/Chart'
import BarGraph from '../../Charting/BarGraph'
import LineMarker from '../../Charting/LineMarker'
import Legend from '../../Charting/Legend'

class Modules extends Component {
    render() {
        const width = .4
        return (
            <div className="card p-4">
                <div className="mt-3">
                    <Legend title="Module" />
                    <Chart xDomain={[0,5]} yDomain={[0,Math.max(...this.props.result)]} ticks={{x: 6, xFormat: d => `M0${d}`}}>
                        <BarGraph labels offset={-width/2} width={width} data={this.props.result.map((d, i) => ({x: i+1, y: d}))} color="hsla(33, 100%, 20%, .5)" highlightColor="hsla(33, 100%, 20%, .8)" />
                        <BarGraph labels offset={width/2} width={width} data={this.props.moduleMeans} color="hsla(33, 100%, 40%, .5)" highlightColor="hsla(33, 100%, 40%, .8)" />
                        <LineMarker value={this.props.totalMean} label="Durchschnitt" />
                    </Chart>
                </div>
            </div>
        )
    }
}

export default Modules