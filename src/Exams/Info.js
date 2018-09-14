import React from 'react'

function randn_bm() {
    var u = 0, v = 0
    while(u === 0) u = Math.random()
    while(v === 0) v = Math.random()
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
}
export default function Details(props) {
    return (
        <div className={`point-details p-3 animated card position-absolute ${props.visible ? 'show' : 'hidden'}`}>
            <h4>{props.data.label}</h4>
            <p>Dein Ergebnis: {props.data[1]} %</p>
            <p>Durchschnitt: {(props.data[3] + props.data[4]) / 2} %</p>
            
            <button type="button" className="btn btn-outline-primary my-2">Details</button>
            Alle Fragen und Antworten dieser Prüfung
            <button type="button" className="btn btn-outline-primary mt-2">Fragen und Antworten</button>
            <button type="button" className="btn btn-outline-info mt-2" onClick={() => props.onClose()}>schließen</button>
        </div>
    )
}