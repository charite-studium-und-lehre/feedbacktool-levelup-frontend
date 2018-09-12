import React from 'react'
import { line, curveMonotoneX } from 'd3-shape'

export default function LineGraph(props) {
    const _line = line()
        .x(d => props.xScale(d[0]))
        .y(d => props.yScale(d[1]))
        .curve(curveMonotoneX)

    const circles = props.noPoints || props.data.map((d, i) => <circle 
        key={i} 
        className="dot" 
        cx={props.xScale(d[0])} 
        cy={props.yScale(d[1])} 
        r="5" 
        style={{fill: props.color}}>
    </circle>)

    return (<g>
        <path d={_line(props.data)} className="line" style={{stroke: props.color || "black"}}></path>
        {circles}
    </g>)
}