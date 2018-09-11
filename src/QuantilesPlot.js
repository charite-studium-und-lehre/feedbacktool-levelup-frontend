import React from 'react'
import AreaGraph from './AreaGraph'
import LineGraph from './LineGraph'

export default function QuantilesPlot(props) {
    return (<g className={`animated ${props.className}`}>
        <g className={`animated ${props.showAreas ? 'show' : 'hidden'}`}>
            <AreaGraph {...props} data={props.data.map(d => d.slice(1,3))} color={`hsla(${props.color}, 100%, 40%, .2)`}></AreaGraph>
            <AreaGraph {...props} data={props.data.map(d => d.slice(2,4))} color={`hsla(${props.color}, 100%, 60%, .2)`}></AreaGraph>
            <AreaGraph {...props} data={props.data.map(d => d.slice(3))} color={`hsla(${props.color}, 100%, 80%, .2)`}></AreaGraph>
        </g>
        <LineGraph {...props} data={props.data.map(d => d[0])} color={`hsla(${props.color}, 100%, 30%, .4)`}></LineGraph>
    </g>)
}