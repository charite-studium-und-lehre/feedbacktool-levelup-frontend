import React from 'react'
import AreaGraph from './AreaGraph'
import LineGraph from './LineGraph'
import tinycolor from 'tinycolor2'

function splitData(d, n, m) {
    return d.map(d => [d[0], ...d.slice(n,m)])
}
function transformData(d) {
    return d.map((d) => ({"x": d[0], "y0": d[1], "y1": d[2]}))
}

export default function QuantilesPlot(props) {
    let color = tinycolor(props.color)
    return (<g className={`animated ${props.className}`}>
        <g className={`animated ${props.showAreas ? 'show' : 'hidden'}`}>
            <AreaGraph {...props} data={transformData(splitData(props.data, 2,4))} color={color.lighten(10).setAlpha(.2).toString()}></AreaGraph>
            <AreaGraph {...props} data={transformData(splitData(props.data, 3,5))} color={color.lighten(20).setAlpha(.2).toString()}></AreaGraph>
            <AreaGraph {...props} data={transformData(splitData(props.data, 4))} color={color.lighten(20).setAlpha(.2).toString()}></AreaGraph>
        </g>
        <LineGraph {...props} data={props.data.map(d => ({x: d[0], y: d[1]}))} color={props.color}></LineGraph>
    </g>)
}