import React from 'react'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../../Charting/HorizontalBarGraph'
const bars = ['Durchschnitt', 'Dein Ergebnis']

const SemesterInfo = props => {
    const data = bars.map((d, i) => ({y: d, x: i ? props.data.mean : props.data.result, label: i ? `${props.data.mean} %` : `${props.data.result} %` }))

    return (<div>
        <div className="mt-1" style={{height: '4.3rem'}}>
            <HorizontalBarChart noaxis yDomain={bars} data={data} />
        </div>
        <div className="row">
            <div className="col-4 pr-0">
                <Link to={`/exams/semester/${props.data.label}`}>
                    <span className="text-primary">Details</span>
                </Link>
            </div>
            <div className="col-4 p-0 text-center">
                <Link to={`/exams/semester/${props.data.label}/questions`}>
                    <span className="text-primary">MC-Fragen</span>
                </Link>
            </div>
            <div className="col-4 pl-0 text-right">
                <span className="text-primary" style={{cursor: 'pointer'}} onClick={() => props.onClose()}>schließen</span>
            </div>
        </div>
    </div>)
}

export default SemesterInfo