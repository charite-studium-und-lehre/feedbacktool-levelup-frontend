import React from 'react'
import Label from './Label'
import AnimatedPoint from './AnimatedPoint'

export default function PointGraph(props) {
    const onClick = props.onClick || (() => {})

    const texts = !props.withLabels || props.data.map((d, i) => (<Label
        key={i}
        x={props.xScale(d.x)}
        y={props.yScale(d.y) + 20}
        >{d.label}</Label>))

    const circles = props.data.map(d => <AnimatedPoint 
        key={"circle" + d.x} 
        className={props.selectedPoint === d.x ? 'selected' : ''} 
        cx={props.xScale(d.x)} 
        cy={props.yScale(d.y)} 
        r={props.size || "5"}
        color={props.color || 'black'}
        onClick={() => onClick(d)}>
    </AnimatedPoint>)
	return (
        <g className={`point animated ${props.className || ''}`}>
            {circles}
            {texts}
        </g>
    )
}