import React from 'react'
import { line } from 'd3-shape'
import { curveMonotoneX } from 'd3-shape'
import AnimatedPoint from './AnimatedPoint'
import AnimatedPath from './AnimatedPath'

export default function LineGraph(props) {
    const _line = line()
        .x(d => props.xScale(d.x))
        .y(d => props.yScale(d.y))
        .curve(props.curve || curveMonotoneX)
        
    const texts = !props.withLabels || props.data.map((d, i) => (<text
        key={i}
        x={props.xScale(d.x) - 10}
        y={props.yScale(d.y) + 15}
        fontFamily="sans-serif" 
        fontSize=".6rem">{d.label}</text>))

    const circles = props.noPoints || props.data.map((d, i) => <AnimatedPoint 
        key={i} 
        selected={props.selectedPoint === d.x}
        cx={props.xScale(d.x)} 
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