import React from 'react'
import Chart from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph';

function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}
const data = new Array(100).fill(0).map(d => Math.floor(randn_bm() * 14 + 50)).sort((a,b) => a-b).map((d,i) => [i+1,d])
export default function Details(props) {
    return (
        <div className={`point-details p-3 animated card position-absolute ${props.visible ? 'show' : 'hidden'}`}>
            {/* <p>Dein Ergebnis: {props.data[1]} %</p>
            <p>Durchschnitt: {(props.data[3] + props.data[4]) / 2} %</p> */}
            <div className="p-2 mb-2">
                <Chart xDomain={[1,100]} yDomain={[0,100]}>
                    <LineGraph data={data} color="hsla(181, 100%, 41%, .4)" noPoints></LineGraph>
                </Chart>
            </div>
            <button type="button" className="btn btn-outline-primary my-2">Details</button>
            Alle Fragen und Antworten dieser Prüfung
            <button type="button" className="btn btn-outline-primary mt-2">Fragen und Antworten</button>
            <button type="button" className="btn btn-outline-info mt-2" onClick={() => props.onClose()}>schließen</button>
        </div>
    )
}