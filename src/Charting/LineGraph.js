import React from 'react'
import { line } from 'd3-shape'
import { curveMonotoneX } from 'd3-shape'
import AnimatedPath from './AnimatedPath'
import AnimatedText from './AnimatedText'
import PointGraph from './PointGraph'
import COLORS from '../colors'

export default function LineGraph(props) {
    const x = d => props.xScale(d.x) + (props.xScale.bandwidth ? props.xScale.bandwidth() / 2 : 0)
    const _line = line()
        .x(x)
        .y(d => props.yScale(d.y))
        .curve(props.curve || curveMonotoneX)
        
    const texts = !props.labels || props.data.map((d, i) => (<AnimatedText
        key={i}
        x={x(d) - 10}
        y={props.yScale(d.y) + 15}>
        {d.label}</AnimatedText>))

    return (<g className={`animated ${props.className}`} style={props.style}>
        <AnimatedPath d={props.data} shape={_line} style={{strokeWidth: 2, stroke: props.color || COLORS.default}}></AnimatedPath>
        {props.noPoints || <PointGraph {...props} />}
        {texts}
    </g>)
}