import React from 'react'
import Chart from '../Charting/Chart'
import HorizontalBarGraph from '../Charting/HorizontalBarGraph'
import { Link } from 'react-router-dom'

const Info = props =>
    (<div className={`point-details p-3 animated card position-absolute ${props.visible ? 'show' : 'hidden'}`}>
        <h5>{props.graph} - {props.data.label}</h5>
        <div>Dein Ergebnis:<span className="font-italic"> {props.data.result} %</span></div>
        <div>Durchschnitt:<span className="font-italic"> {props.data.mean} %</span></div>
        <div className="px-3 mb-2" style={{height: '5rem'}}>
            <Chart horizontal xDomain={[0,100]} yDomain={[0,5]} ticks={{x: 6, y: 6, yFormat: d => 'M0' + d }}>
                <HorizontalBarGraph data={new Array(4).fill(0).map(() => Math.random() * 100)} />
            </Chart>
        </div>
        <Link to={`/exams/semester/${props.data.label}`}><button type="button" className="btn btn-outline-primary my-2 w-100">Details</button></Link>
        <span className="text-justify">Alle Fragen und Antworten dieser Prüfung</span>
        <button type="button" className="btn btn-outline-primary mt-2">Fragen und Antworten</button>
        <button type="button" className="btn btn-outline-info mt-2" onClick={() => props.onClose()}>schließen</button>
    </div>)

export default Info