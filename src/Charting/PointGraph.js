import React from 'react'
import Label from './Label'
import { scaleLinear } from 'd3-scale'
import AnimatedPoint from './AnimatedPoint'
import COLORS from '../colors'
import KohortenMittelDot from "./KohortenMittelDot";

export default function PointGraph({padding = 0.2, offset = .5, ...props}) {
    const onClick = props.onClick || (() => {})

    const texts = !props.labels || props.data.map((d, i) => (<Label
        key={i}
        x={props.xScale(d.x)}
        y={props.yScale(d.y) - 20}
        >{d.label}</Label>))

    const width = props.xScale.bandwidth ? props.xScale.bandwidth() : 0
    const scale = scaleLinear([ width * padding, width * (1-padding) ])
    const addData = d => ({
        ...d,
        cx: props.xScale(d.x) + scale(offset),
        cy: props.yScale(d.y),
        key: d.id || (d.x + '' + d.y),
        size: d.size || props.size || props.diamonds ? "15" : "5"
    })
    const circles = props.data.map(addData).map(d => 
        props.diamonds ? 
            <g transform={`translate(${d.cx - d.size*.5}, ${d.cy - d.size*.5}) scale(${d.size})`} key={"diamond" + d.key}>
                <KohortenMittelDot color={props.color} />
            </g> :
            <AnimatedPoint
                key={"circle" + d.key}
                selected={d.selected}
                cx={d.cx}
                cy={d.cy}
                r={d.size}
                fill={props.color || COLORS.default}
                color={props.color || COLORS.default}
                opacity={props.fadeIn ? 0 : 1}
                onClick={() => onClick(d)}>
            </AnimatedPoint>
    )
    return (
        <g className={props.className || ''}>
            {circles}
            {texts}
        </g>
    )
}