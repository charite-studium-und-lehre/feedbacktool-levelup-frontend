import React from 'react'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../Charting/HorizontalBarGraph'
const bars = ['Durchschnitt', 'Dein Ergebnis']

const StationsInfo = props => {
    const data = bars.map((d, i) => ({y: d, x: i ? props.data.mean : props.data.result, label: i ? `${props.data.mean} %` : `${props.data.result} %` }))
    return (<div>
        <div className="mt-1" style={{height: '4.3rem'}}>
            <HorizontalBarChart noaxis yDomain={bars} data={data} />
        </div>
        <div>geschrieben am <span className="font-weight-bold"> {props.data.x.toLocaleDateString()}</span></div>
        <span className="text-primary float-right" onClick={() => props.onClose()}>schließen</span>
        <Link to={`/exams/stations/${props.data.label}`}>
            <span className="text-primary">Details</span>
        </Link>
    </div>)
}

export default StationsInfo