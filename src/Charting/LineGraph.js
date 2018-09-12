import React from 'react'
import { line, curveMonotoneX } from 'd3-shape'

export default function LineGraph(props) {
    const _line = line()
        .x((d, i) => props.xScale(i+1))
        .y(d => props.yScale(d))
        .curve(curveMonotoneX)

    const circles = props.noPoints || props.data.map((d, i) => <circle 
        key={"circle" + i} 
        className="dot" 
        cx={props.xScale(i+1)} 
        cy={props.yScale(d)} 
        r="5" 
        style={{fill: props.color}}>
    </circle>)

    return (<g>
        <path d={_line(props.data)} className="line" style={{stroke: props.color || "black"}}></path>
        {circles}
    </g>)
}