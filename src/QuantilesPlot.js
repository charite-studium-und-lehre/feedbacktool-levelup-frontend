import React from 'react'
import AreaGraph from './AreaGraph'
import LineGraph from './LineGraph'

export default function QuantilesPlot(props) {
    return (<g className={`quantile-plot ${props.className}`}>
        <g className={`quantile-areas ${props.showAreas ? 'show' : 'hidden'}`}>
            <AreaGraph {...props} data={props.data.map(d => d.slice(1,3))} color={`hsla(${props.color}, 100%, 40%, .4)`}></AreaGraph>
            <AreaGraph {...props} data={props.data.map(d => d.slice(2,4))} color={`hsla(${props.color}, 100%, 60%, .4)`}></AreaGraph>
            <AreaGraph {...props} data={props.data.map(d => d.slice(3))} color={`hsla(${props.color}, 100%, 80%, .4)`}></AreaGraph>
        </g>
        <LineGraph {...props} data={props.data.map(d => d[0])} color={`hsla(${props.color}, 100%, 30%, .4)`}></LineGraph>
    </g>)
}