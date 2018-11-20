import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { LinearChart } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis'
import HorizontalBarGraph from '../../Charting/HorizontalBarGraph'

const labels = ['richtig', 'falsch', 'weiß nicht']
const Subject = props => (
    <div className="card m-2 flex-grow-1" style={{width: '20rem'}}>
        <div className="card-body">
            <h4>{props.title}</h4>
            <div className="p-2 pl-5" style={{height: '6rem'}} >
                <LinearChart xDomain={[0,100]} yDomain={[0,4]}>
                    <XAxis horizontal ticks={{count: 6}} />
                    <YAxis horizontal ticks={{count: 6, format: d => labels[d-1] }} />
                    <HorizontalBarGraph labels data={new Array(3).fill(0).map((d,i) => ({x: i+1, y: Math.floor(Math.random() * 100)}))} />
                </LinearChart>
            </div>
            <Link to={`/strengths/${encodeURIComponent(props.title)}`} className="mt-2 float-right text-primary" style={{fontSize:".8rem", textDecoration:"underline"}}>zu deiner Entwicklung in diesem Fach</Link>
        </div>
    </div>
)

export default Subject