import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../Charting/HorizontalBarGraph'
import { withTranslation } from 'react-i18next'

const SemesterInfo =( props, {t}) => {
    const data = _.range(4).map(i => ({y: `Modul 0${i+1}`, x: _.random(5,100)}))

    return (<div>
        <div>Dein Ergebnis:<span className="font-italic"> {props.data.result} %</span></div>
        <div>Durchschnitt:<span className="font-italic"> {props.data.mean} %</span></div>
        <div className="my-2" style={{height: '10rem'}}>
                <HorizontalBarChart yDomain={data.map(d => d.y)} data={data} />
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

export default withTranslation() (SemesterInfo)