import React from 'react'
import AreaGraph from './AreaGraph'
import LineGraph from './LineGraph'
import tinycolor from 'tinycolor2'

function transformData(data, q1, q2) {
    return data.map((d) => ({x: d.x, y0: d[q1], y1: d[q2]}))
}

export default function QuantilesPlot(props) {
    let color = tinycolor(props.color)
    return (<g className={`animated ${props.className}`}>
        <g className={`animated ${props.showAreas ? 'show' : 'hidden'}`}>
            <AreaGraph {...props} data={transformData(props.data, 'q0', 'q25')} color={color.lighten(10).setAlpha(.2).toString()}></AreaGraph>
            <AreaGraph {...props} data={transformData(props.data, 'q25', 'q75')} color={color.lighten(20).setAlpha(.2).toString()}></AreaGraph>
            <AreaGraph {...props} data={transformData(props.data, 'q75', 'q100')} color={color.lighten(20).setAlpha(.2).toString()}></AreaGraph>
        </g>
        <LineGraph {...props} data={props.data.map(d => ({x: d.x, y: d.result}))} color={props.color}></LineGraph>
    </g>)
}