import React from 'react'
import Label from './Label'
import { scaleLinear } from 'd3-scale'
import AnimatedPoint from './AnimatedPoint'

export default function PointGraph({padding = 0.2, offset = .5, ...props}) {
    const onClick = props.onClick || (() => {})

    const texts = !props.labels || props.data.map((d, i) => (<Label
        key={i}
        x={props.xScale(d.x)}
        y={props.yScale(d.y) + 20}
        >{d.label}</Label>))

    const circles = props.data.map(d => {
        const width = props.xScale.bandwidth ? props.xScale.bandwidth() : 0
        const scale = scaleLinear([ width * padding, width * (1-padding) ])
        return <AnimatedPoint 
            key={"circle" + (d.id || (d.x + d.y))} 
            selected={d.selected} 
            selectedRef={props.selected}
            cx={props.xScale(d.x) + scale(offset)} 
            cy={props.yScale(d.y)} 
            r={props.size || "5"}
            fill={props.color || 'black'}
            color={props.color || 'black'}
            opacity={props.fadeIn ? 0 : 1}
            onClick={() => onClick(d)}>
        </AnimatedPoint>
    })
	return (
        <g className={props.className || ''}>
            {circles}
            {texts}
        </g>
    )
}