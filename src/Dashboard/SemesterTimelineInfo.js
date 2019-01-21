import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../Charting/HorizontalBarGraph'

const SemesterInfo = props => {
    const data = new Array(4).fill(0).map((d,i) => ({y: `Modul 0${i+1}`, x: _.random(5,100)}))

    return (<div>
        <div>Dein Ergebnis:<span className="font-italic"> {props.data.result} %</span></div>
        <div>Durchschnitt:<span className="font-italic"> {props.data.mean} %</span></div>
        <span className="text-primary float-right" onClick={() => props.onClose()}>schließen</span>
        <Link to={`/exams/semester/${props.data.label}`}>
            <span className="text-primary">Details</span>
        </Link>
    </div>)
}

export default SemesterInfo