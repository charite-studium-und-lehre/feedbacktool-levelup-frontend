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

const result = Math.floor(Math.random() * 75 + 25)
const data = new Array(100).fill(0).map(d => Math.floor(randn_bm() * 13 + 50)).concat([ result ]).sort((a,b) => a-b).map((d,i) => ({x: (i+1)/1.01, y: d}))

const Semester = ({ props, match }) => (
    <div className="container-fluid">
        <div className="row">
        <div className="col">
        <div className="card p-4">
            <div className="p-2 mb-2">
                <Chart xDomain={[0,100]} yDomain={[Math.min(...data.map(d => d.y)), Math.max(...data.map(d => d.y))]}>
                    <LineGraph data={data} color="hsla(181, 100%, 41%, .6)" noPoints noSmooth/>
                    <AreaGraph data={data.map(d => ({x: d.x, y0: Math.min(...data.map(d => d.y)), y1: d.y}))} color="hsla(181, 100%, 41%, .3)"></AreaGraph>
                    <PointGraph 
                        data={[{x: _.findIndex(data, d => d.y === result), y: result, label: 'Du'}]} 
                        color="hsla(181, 100%, 30%, .6)"
                        withLabels />
                </Chart>
            </div>
        </div>
        </div>
        </div>
    </div>
)

export default Semester