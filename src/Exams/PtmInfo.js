import React from 'react'
import { Link } from 'react-router-dom'
import { LinearChart } from '../Charting/Chart'
import HorizontalBarGraph from '../Charting/HorizontalBarGraph'
import { XAxis, YAxis } from '../Charting/Axis'

const labels = ['richtig', 'falsch', 'weiß nicht']
const PtmInfo = props =>
    (<div>
        <div>Dein Antworten:</div>
        <div className="pr-3 pl-5 mb-2" style={{height: '5rem'}}>
            <LinearChart xDomain={[0,100]} yDomain={[0,4]}>
                <XAxis horizontal ticks={{count: 6}} />
                <YAxis horizontal ticks={{count: 6, format: d => labels[d-1] }} />
                <HorizontalBarGraph labels data={new Array(3).fill(0).map((d,i) => ({x: i+1, y: Math.floor(Math.random() * 100)}))} />
            </LinearChart>
        </div>
        <Link to={`/exams/ptm/${props.data.label}`}>
            <button type="button" className="btn btn-outline-primary my-2 w-100">Details</button>
        </Link>
        <button type="button" className="btn btn-outline-info mt-2 w-100" onClick={() => props.onClose()}>schließen</button>
    </div>)

export default PtmInfo