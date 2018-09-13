import React from 'react'
import { line, curveMonotoneX } from 'd3-shape'

export default function LineGraph(props) {
    const onClick = props.onClick || (() => {})
    const _line = line()
        .x(d => props.xScale(d[0]))
        .y(d => props.yScale(d[1]))
        .curve(curveMonotoneX)
        
    const texts = !props.labels || props.data.map((d, i) => (<text
        key={i}
        x={props.xScale(d[0]) - 10}
        y={props.yScale(d[1]) + 15}
        fontFamily="sans-serif" 
        fontSize=".6rem">{d[0]}. Semester</text>))

    const circles = props.noPoints || props.data.map((d, i) => <circle 
        key={i} 
        className={`dot ${props.selectedPoint === d[0] ? 'selected' : ''}`}
        cx={props.xScale(d[0])} 
        cy={props.yScale(d[1])} 
        r="5" 
        style={{fill: props.color}}
        onClick={() => onClick(d[0])}>
    </circle>)

    return (<g>
        <path d={_line(props.data)} className="line" style={{stroke: props.color || "black"}}></path>
        {circles}
        {texts}
    </g>)
}