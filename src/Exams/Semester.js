import React from 'react'
import Chart from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import AreaGraph from '../Charting/AreaGraph'
import _ from 'lodash'
import PointGraph from '../Charting/PointGraph';

export default function() {
    return (<div className="p-2 mb-2">
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