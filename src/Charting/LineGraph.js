import React from 'react'
import { line } from 'd3-shape'
import { curveMonotoneX } from 'd3-shape'
import AnimatedPoint from './AnimatedPoint'
import AnimatedPath from './AnimatedPath'
import AnimatedText from './AnimatedText'

export default function LineGraph(props) {
    const x = d => props.xScale(d.x) + (props.xScale.bandwidth ? props.xScale.bandwidth() / 2 : 0)
    const _line = line()
        .x(x)
        .y(d => props.yScale(d.y))
        .curve(props.curve || curveMonotoneX)
        
    const texts = !props.labels || props.data.map((d, i) => (<AnimatedText
        key={i}
        x={x(d) - 10}
        y={props.yScale(d.y) + 15}>
        {d.label}</AnimatedText>))

    const circles = props.noPoints || props.data.map((d, i) => <AnimatedPoint 
        key={i} 
        selected={props.selectedPoint === d.x}
        cx={x(d)} 
        cy={props.yScale(d.y)} 
        r="5" 
        fill={props.color || "black"}
        onClick={props.onClick}>
    </AnimatedPoint>)

    return (<g className={`animated ${props.className}`} style={props.style}>
        <AnimatedPath d={props.data} shape={_line} style={{strokeWidth: 2, stroke: props.color || "black"}}></AnimatedPath>
        {circles}
        {texts}
    </g>)
}