import React from 'react'
import Label from './Label'
import AnimatedPoint from './AnimatedPoint'

export default function PointGraph({offset = .5, ...props}) {
    const onClick = props.onClick || (() => {})

    const texts = !props.labels || props.data.map((d, i) => (<Label
        key={i}
        x={props.xScale(d.x)}
        y={props.yScale(d.y) + 20}
        >{d.label}</Label>))

    const circles = props.data.map(d => <AnimatedPoint 
        key={"circle" + d.x} 
        selected={props.selectedPoint === d.x || d.selected} 
        cx={props.xScale(d.x) + (props.xScale.bandwidth ? props.xScale.bandwidth() * offset : 0)} 
        cy={props.yScale(d.y)} 
        r={props.size || "5"}
        fill={props.color || 'black'}
        color={props.color || 'black'}
        opacity={props.fadeIn ? 0 : 1}
        onClick={() => onClick(d)}>
    </AnimatedPoint>)
	return (
        <g className={props.className || ''}>
            {circles}
            {texts}
        </g>
    )
}