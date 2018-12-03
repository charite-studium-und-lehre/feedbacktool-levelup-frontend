import React from 'react'
import { LinearChart } from '../Charting/Chart'
import HorizontalBarGraph from '../Charting/HorizontalBarGraph'
import { Link } from 'react-router-dom'
import { XAxis, YAxis } from '../Charting/Axis'

const categories = ['Klinisch', 'Vorklinisch']
const StationsInfo = props =>
    (<div>
        <div>Dein Ergebnis:<span className="font-weight-bold"> {props.data.result} %</span></div>
        <div>Durchschnitt:<span className="font-weight-bold"> {props.data.mean} %</span></div>
        <div>geschrieben am <span className="font-weight-bold"> {props.data.x.toLocaleDateString()}</span></div>
        <div className="pl-5 pr-3 mb-2" style={{height: '5rem'}}>
            <LinearChart xDomain={[0,100]} yDomain={[0,3]}>
                <XAxis horizontal ticks={{count: 6}} />
                <YAxis horizontal ticks={{count: 3, format: d => categories[d-1] }} />
                <HorizontalBarGraph data={[{x: 1, y: Math.random() * 100}, {x: 2, y: Math.random() * 100}]} />
            </LinearChart>
        </div>
        <Link to={`/exams/stations/${props.data.label}`}>
            <button type="button" className="btn btn-outline-primary my-2 w-100">Details</button>
        </Link>
        <button type="button" className="btn btn-outline-info mt-2 w-100" onClick={() => props.onClose()}>schließen</button>
    </div>)

export default StationsInfo