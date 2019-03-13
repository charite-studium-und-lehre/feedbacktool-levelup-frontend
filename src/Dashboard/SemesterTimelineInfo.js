import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../Charting/HorizontalBarGraph'
const bars = ['Durchschnitt', 'Dein Ergebnis']

const SemesterInfo = props => {
    const data = bars.map((d, i) => ({y: d, x: i ? props.data.mean : props.data.result }))

    return (<div>
        <div className="mt-1" style={{height: '4.3rem'}}>
            <HorizontalBarChart noaxis yDomain={bars} data={data} />
        </div>
        <span className="text-primary float-right" style={{cursor: 'pointer'}} onClick={() => props.onClose()}>schließen</span>
        <Link to={`/exams/semester/${props.data.label}`}>
            <span className="text-primary">Details</span>
        </Link>
    </div>)
}

export default SemesterInfo