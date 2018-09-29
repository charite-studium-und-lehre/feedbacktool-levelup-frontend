import React from 'react'
import { line } from 'd3-shape'
import { curveSelect } from './Utils'

export default function LineGraph(props) {
    const onClick = props.onClick || (() => {})
    const _line = line()
        .x(d => props.xScale(d.x))
        .y(d => props.yScale(d.y))
        .curve(curveSelect(props.curve))
        
    const texts = !props.withLabels || props.data.map((d, i) => (<text
        key={i}
        x={props.xScale(d.x) - 10}
        y={props.yScale(d.y) + 15}
        fontFamily="sans-serif" 
        fontSize=".6rem">{d.label}</text>))

    const circles = props.noPoints || props.data.map((d, i) => <circle 
        key={i} 
        className={`dot ${props.selectedPoint === d.x ? 'selected' : ''} animated`}
        cx={props.xScale(d.x)} 
        cy={props.yScale(d.y)} 
        r="5" 
        style={{fill: props.color || "black"}}
        onClick={() => onClick(d.x)}>
    </circle>)

    return (<g className={`animated ${props.className}`} style={props.style}>
        <path d={_line(props.data)} className="line animated" style={{stroke: props.color || "black"}}></path>
        {circles}
        {texts}
    </g>)
}