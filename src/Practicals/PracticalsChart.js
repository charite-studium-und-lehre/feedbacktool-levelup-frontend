import React, {Component} from 'react'
import _ from 'lodash'
import { select } from 'd3-selection'
import { scaleLinear, scalePoint } from 'd3-scale'
import { areaRadial, arc, pie, curveCatmullRomClosed } from 'd3-shape'
import { asChart } from '../Charting/Chart'
import GlowFilter from '../Charting/GlowFilter'

class PracticalsChart extends Component{
    constructor(props){
        super(props)
        this.state = { selectedField: null }
        this.rotEl = React.createRef()
    }
    
    selectPoint(a) {
        this.props.selectEntry(a.data)
        select(this.rotEl.current)
            .transition()
            .duration(700)
            .style("transform", `rotate(${-a.angle}rad)`)
    }
    
    render() {
        const scale = scaleLinear().range([0, Math.min(this.props.width, this.props.height) / 2]).domain([0,6])
        const areaRad = areaRadial().angle(d => d.angle).outerRadius(d => scale(d.value)).curve(curveCatmullRomClosed.alpha(.5))
        const arcs = arc().outerRadius(scale(6)).innerRadius(0)
        const fields = pie().padAngle(.05).value(d => d.entries ? d.entries.length : 1)(this.props.data)
        const angles = _.flatMap(fields, f => (f.data.entries || [0]).map((d,i) => ({data: d, value: d.done || _.random(1,6), angle: scalePoint().padding(.5).domain(_.range(0,f.data.entries ? f.data.entries.length : 1)).range([f.startAngle, f.endAngle])(i)}) ))

        return (
        <g transform={`translate(${this.props.width/2}, ${this.props.height/2})`}>
            <g ref={this.rotEl}>
                <GlowFilter />
                { _.range(0,6,2).map(d => <circle key={d} r={scale(d)} stroke="rgba(0,0,0,.2)" fill="none" /> )}
                <path d={areaRad(angles)} fill="rgba(255,0,0,.3)" stroke="red" style={{filter: 'url(#glow)'}} />
                {fields.map((f, i) => <path key={i} d={arcs(f)} style={{filter: 'url(#glow)'}} fill={`hsla(${(i+1)/fields.length*255},50%,50%,.3)`} stroke="none" /> )}
                {angles.map( (a, i) => 
                <g key={i} style={{transform: `rotate(${a.angle}rad)`}} onClick={() => this.selectPoint(a)}>
                    <circle r="4" cy={-scale(a.value)} stroke="blue" fill="rgba(0,0,255,.4)" />
                </g>
                )}
            </g>
        </g>
        )
    }
}

export default asChart(PracticalsChart)















