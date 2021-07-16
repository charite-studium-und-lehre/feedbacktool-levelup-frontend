import React from 'react'
import Label from './Label'
import { scaleLinear } from 'd3-scale'
import AnimatedPoint from './AnimatedPoint'
import COLORS from '../colors'

const DefaultMarker = ({ onClick, ...d }) => <AnimatedPoint
        selected={d.selected}
        cx={d.cx}
        cy={d.cy}
        r={d.size * .5}
        fill={d.color}
        color={d.color}
        onClick={() => onClick(d)}>
    </AnimatedPoint>

export default function PointGraph({
    padding = 0.2,
    offset = .5,
    MarkerComponent = DefaultMarker,
    ...props
}) {
    const onClick = props.onClick || (() => {})

    const texts = !props.labels || props.data.map((d, i) => (<Label
        key={i}
        x={props.xScale(d.x)}
        y={props.yScale(d.y) - 20}
        >{d.label}</Label>
    ))

    const width = props.xScale.bandwidth ? props.xScale.bandwidth() : 0
    const scale = scaleLinear([ width * padding, width * (1-padding) ])
    const addData = d => ({
        ...d,
        cx: props.xScale(d.x) + scale(offset),
        cy: props.yScale(d.y),
        key: d.id || (d.x + '' + d.y),
        size: d.size || props.size || "10",
        color: d.color || props.color || COLORS.default
    })
    const circles = props.data.map(addData).map( d => <MarkerComponent onClick={onClick} {...d} />)
    return (
        <g className={props.className || ''}>
            {circles}
            {texts}
        </g>
    )
}
