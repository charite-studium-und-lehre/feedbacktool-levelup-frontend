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

    const circles = () => props.data.map(d => {
        const width = props.xScale.bandwidth ? props.xScale.bandwidth() : 0
        const scale = scaleLinear([ width * padding, width * (1-padding) ])
        const key1 = "circle" + (d.id || (d.x + '' + d.y));
        const cx = props.xScale(d.x) + scale(offset);
        const cy = props.yScale(d.y);
        return <AnimatedPoint
            key={key1}
            selected={d.selected}
            cx={cx}
            cy={cy}
            r={d.size || props.size || "5"}
            fill={props.color || COLORS.default}
            color={props.color || COLORS.default}
            opacity={props.fadeIn ? 0 : 1}
            onClick={() => onClick(d)}>
        </AnimatedPoint>
    })
    const diamonds = () => props.data.map(d => {
        const width = props.xScale.bandwidth ? props.xScale.bandwidth() : 0
        const scale = scaleLinear([ width * padding, width * (1-padding) ])
        const size = 15
        const x = props.xScale(d.x) + scale(offset) - (size/2)
        const y = props.yScale(d.y) - (size/2)
        const key = "diamond" + (d.id || (d.x + '' + d.y));
        return <g transform={"translate("+x+", "+y+") scale("+size+")"} key={key}>
            <KohortenMittelDot/>
        </g>
    })
    return (
        <g className={props.className || ''}>
            {props.diamonds ? diamonds() : circles()}
            {texts}
        </g>
    )
}