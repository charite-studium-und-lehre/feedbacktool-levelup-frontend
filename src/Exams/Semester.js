import React from 'react'
import Chart from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import AreaGraph from '../Charting/AreaGraph'
import _ from 'lodash'
import PointGraph from '../Charting/PointGraph';

function randn_bm() {
    var u = 0, v = 0
    while(u === 0) u = Math.random()
    while(v === 0) v = Math.random()
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
}
const data = new Array(100).fill(0).map(d => Math.floor(randn_bm() * 14 + 50)).sort((a,b) => a-b).map((d,i) => [i+1,d])

export default function() {
    return (
    <div className="p-2 mb-2">
        <Chart xDomain={[1,100]} yDomain={[0,100]}>
            <LineGraph data={data.map(d => ({x: d[0], y: d[1]}))} color="hsla(181, 100%, 41%, .6)" noPoints noSmooth/>
            <AreaGraph data={data.map(d => ({x: d[0], y0: 0, y1: d[1]}))} color="hsla(181, 100%, 41%, .3)"></AreaGraph>
            <PointGraph 
                data={[[_.findIndex(data, d => d[1] === props.data[1]), props.data[1]]]} 
                color="181"
                label="Du" />
        </Chart>
    </div>)
}