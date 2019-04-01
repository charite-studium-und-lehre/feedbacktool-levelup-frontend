
import React, {Component} from 'react'
import _ from 'lodash'
import { scaleLinear } from 'd3-scale'
import { areaRadial, pie, curveCatmullRomClosed } from 'd3-shape'
import { asChart } from '../Charting/Chart'
import { XAxis, YAxis } from '../Charting/Axis'

class PracticalsChart extends Component{
    constructor(props){
        super(props)
        this.state = { angle: 0}
    }

    selectPoint(a) {
        this.setState({ angle: a.startAngle })
    }

    render() {
        const data = _.range(0,12,1).map(() => _.random(0,6))
        const scale = scaleLinear().range([0, Math.min(this.props.width, this.props.height) / 2]).domain([0,6])
        const area = areaRadial().angle(d => d.startAngle).outerRadius(d => scale(d.data)).curve(curveCatmullRomClosed.alpha(.5))
        const angles = pie().value(1)(data)
        return (
        <g transform={`translate(${this.props.width/2}, ${this.props.height/2})`} onClick={() => console.log("ij")}>
            <g style={{transform: `rotate(${this.state.angle}rad)`}}>
                { _.range(0,6,1).map(d => <circle key={d} r={scale(d)} stroke="rgba(0,0,0,.2)" fill="none" /> )}
                <path d={area(angles)} fill="rgba(255,0,0,.3)" stroke="red" />
                {angles.map( (a, i) => 
                <g key={i} style={{transform: `rotate(${a.startAngle}rad)`}} onClick={() => this.selectPoint(a)}>
                    <line x0="0" y0="0" x1="0" y1={-scale(6)} stroke="rgba(0,0,255,.4)" />
                    <circle r="4" cy={-scale(a.data)} stroke="blue" fill="rgba(0,0,255,.4)" />
                </g> 
                )}
            </g>
        </g>
        )
    }
}

export default asChart(PracticalsChart)















