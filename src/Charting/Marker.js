import React, { Component } from 'react'
import Label from './Label'
import { line } from 'd3-shape'
import css from './Marker.module.css'
import AnimatedPoint from './AnimatedPoint'
import makeExtendable from '../Core/makeExtendable'

const Marker = props =>
    <g className={`${css.marker} ${props.extended ? css.selected : ''}`}>
        <AnimatedPoint 
            selected={props.extended}
            cx={props.xScale(props.x)} 
            cy={props.yScale(props.y)} 
            color={props.color || 'black'}
            r={props.size || "5"}
            onClick={() => props.toggleExtended()}
        />
        <g className={css.lines}>
            <path d={line()([[props.xScale(props.x), props.yScale(props.y)],[props.xScale(props.x), props.yScale(props.yScale.domain()[0])]])} className="line" style={{strokeWidth: 1, stroke: props.color || "black"}} />
            <text dominantBaseline="central" x={props.xScale(props.xScale.domain()[0]) - 2} y={props.yScale(props.y)} textAnchor="end" style={{fontSize: '0.7rem'}}>{props.y}</text>
            <path d={line()([[props.xScale(props.xScale.domain()[0]), props.yScale(props.y)],[props.xScale(props.x), props.yScale(props.y)]])} className="line" style={{strokeWidth: 1, stroke: props.color || "black"}} />
            <text dominantBaseline="hanging" x={props.xScale(props.x)} y={props.yScale.range()[0]+3} textAnchor="middle" style={{fontSize: '0.7rem'}}>{props.x}</text>
        </g>
        <Label onClick={() => props.toggleExtended()} x={props.xScale(props.x)} y={props.yScale(props.y) + (props.offset || -20)}>{props.label}</Label>
    </g>

export default makeExtendable(Marker)