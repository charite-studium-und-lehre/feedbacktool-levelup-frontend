import React from 'react'
import Chart from '../Charting/Chart'
import HorizontalBarGraph from '../Charting/HorizontalBarGraph'

export default function Details(props) {
    return (
        <div className={`point-details p-3 animated card position-absolute ${props.visible ? 'show' : 'hidden'}`}>
            {/* <h4>{props.graph}</h4> */}
            <h5>{props.graph} - {props.data.label}</h5>
            <div>Dein Ergebnis:<span className="font-italic"> {props.data.result} %</span></div>
            <div>Durchschnitt:<span className="font-italic"> {props.data.mean} %</span></div>
            <div className="px-2 mb-2" style={{height: '5rem'}}>
                <Chart horizontal xDomain={[0,100]} yDomain={[0,5]} ticks={{x: 6, y: 6, yFormat: function(d) { return 'M' + d }}}>
                    <HorizontalBarGraph data={new Array(4).fill(0).map(() => Math.random() * 100)} />
                </Chart>
            </div>
            <button type="button" className="btn btn-outline-primary my-2">Details</button>
            <span className="text-justify">Alle Fragen und Antworten dieser Prüfung</span>
            <button type="button" className="btn btn-outline-primary mt-2">Fragen und Antworten</button>
            <button type="button" className="btn btn-outline-info mt-2" onClick={() => props.onClose()}>schließen</button>
        </div>
    )
}