import React from 'react'
import { OrdinalChart } from '../Charting/Chart'
import Legend from '../Charting/Legend'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'

const Summery = props => (
    <div className="card">
        <div className="card-body">
            <Legend title={props.graph}>Legende</Legend>
            <div className="m-3">
                <OrdinalChart xDomain={props.data.map( d => d.x )} yDomain={[0,Math.max( ...props.data.map( d => d.y ))]}>
                    <XAxis />
                    <YAxis />
                    <BarGraph labels data={props.data} color="hsla(32, 100%, 56%, .4)"/>
                    <BarGraph labels data={props.data.map( d => ({ ...d, y: d.y - Math.floor(Math.random() * d.y) }))}/>
                </OrdinalChart>
            </div>
        </div>
    </div>
)

export default Summery