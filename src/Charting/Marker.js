import React from 'react'
import Label from './Label'
import css from './Marker.module.css'
import AnimatedPoint from './AnimatedPoint'
import AnimatedPath from './AnimatedPath'
import AnimatedText from './AnimatedText'
import AnimatedInteger from './AnimatedInteger'
import makeExtendable from '../Core/makeExtendable'

const Marker = props =>
    <g className={`${css.marker} ${props.extended ? css.selected : ''}`}>
        <AnimatedPoint 
            selected={props.extended}
            cx={props.xScale(props.x)} 
            cy={props.yScale(props.y)} 
            fill={props.color || 'black'}
            r={props.size || "5"}
            onClick={() => props.toggleExtended()}
        />
        <Label onClick={() => props.toggleExtended()} x={props.xScale(props.x)} y={props.yScale(props.y) + (props.offset || -20)}>{props.label}</Label>
        <g className={css.lines}>
            <AnimatedPath d={[[props.xScale(props.x), props.yScale(props.y)],[props.xScale(props.x), props.yScale(props.yScale.domain()[0])]]} stroke={props.color || "black"} />
            <AnimatedText dominantBaseline="central" x={props.xScale(props.xScale.domain()[0]) - 2} y={props.yScale(props.y)} textAnchor="end">
                <AnimatedInteger value={props.y} />
            </AnimatedText>
            <AnimatedPath d={[[props.xScale(props.xScale.domain()[0]), props.yScale(props.y)],[props.xScale(props.x), props.yScale(props.y)]]} stroke={props.color || "black"} />
            <AnimatedText dominantBaseline="hanging" x={props.xScale(props.x)} y={props.yScale.range()[0]+3}>
                <AnimatedInteger value={props.x} />
            </AnimatedText>
        </g>
    </g>

export default makeExtendable(Marker)