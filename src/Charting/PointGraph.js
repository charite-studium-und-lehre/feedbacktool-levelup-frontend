import React from 'react'
import Label from './Label'
import AnimatedPoint from './AnimatedPoint'

export default function PointGraph(props) {
    const onClick = props.onClick || (() => {})

    const texts = !props.labels || props.data.map((d, i) => (<Label
        key={i}
        x={props.xScale(d.x)}
        y={props.yScale(d.y) + 20}
        >{d.label}</Label>))

    const circles = props.data.map(d => <AnimatedPoint 
        key={"circle" + d.x} 
        selected={props.selectedPoint === d.x} 
        cx={props.xScale(d.x) + (props.xScale.bandwidth ? props.xScale.bandwidth() / 2 : 0)} 
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