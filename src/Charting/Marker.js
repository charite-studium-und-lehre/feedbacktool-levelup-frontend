import React from 'react'
import Label from './Label'

const Marker = props => (
    <g>
        <circle 
            className="dot" 
            cx={props.xScale(props.x)} 
            cy={props.yScale(props.y)} 
            fill={props.color || 'black'}
            r={props.size || "5"}
        />
        <Label x={props.xScale(props.x)} y={props.yScale(props.y) + 20}>{props.label}</Label>
    </g>
)

export default Marker