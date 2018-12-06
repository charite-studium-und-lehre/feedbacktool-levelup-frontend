import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../Charting/HorizontalBarGraph'

const SemesterInfo = props => {
    const data = new Array(4).fill(0).map((d,i) => ({y: `Modul 0${i+1}`, x: _.random(5,100)}))

    return (<div>
        <div>Dein Ergebnis:<span className="font-italic"> {props.data.result} %</span></div>
        <div>Durchschnitt:<span className="font-italic"> {props.data.mean} %</span></div>
        <div className="px-3 mb-2" style={{height: '5rem'}}>
                <HorizontalBarChart data={data} />
        </div>
        <Link to={`/exams/semester/${props.data.label}`}>
            <button type="button" className="btn btn-outline-primary my-2 w-100">Details</button>
        </Link>
        <span className="text-justify">Alle Fragen und Antworten dieser Prüfung</span>
        <Link to={`/exams/semester/${props.data.label}/questions`}>
            <button type="button" className="btn btn-outline-primary mt-2 w-100">Fragen und Antworten</button>
        </Link>
        <button type="button" className="btn btn-outline-info mt-2 w-100" onClick={() => props.onClose()}>schließen</button>
    </div>)
}

export default SemesterInfo