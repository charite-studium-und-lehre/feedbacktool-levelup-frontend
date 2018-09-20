import React from 'react'
import Label from './Label'
import { line } from 'd3-shape'

const Marker = props => (
    <g className="marker">
        <circle 
            className="dot" 
            cx={props.xScale(props.x)} 
            cy={props.yScale(props.y)} 
            fill={props.color || 'black'}
            r={props.size || "5"}
        />
        <path d={line()([[props.xScale(props.x), props.yScale(props.y)],[props.xScale(props.x), props.yScale(props.yScale.domain()[0])]])} className="line" style={{stroke: props.color || "black"}} />
        <text alignmentBaseline="central" x={props.xScale(props.xScale.domain()[0]) - 2} y={props.yScale(props.y)} textAnchor="end">{props.y}</text>
        <path d={line()([[props.xScale(props.xScale.domain()[0]), props.yScale(props.y)],[props.xScale(props.x), props.yScale(props.y)]])} className="line" style={{stroke: props.color || "black"}} />
        <text alignmentBaseline="before-edge" x={props.xScale(props.x)} y={props.yScale(props.yScale.domain()[0])} textAnchor="middle">{props.x}</text>
        <Label x={props.xScale(props.x)} y={props.yScale(props.y) + (props.offset || -20)}>{props.label}</Label>
    </g>
)

export default Marker