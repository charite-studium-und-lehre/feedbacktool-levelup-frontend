import React from 'react'

export default function Details(props) {
    return (
        <div className={`point-details p-3 animated card position-absolute ${props.visible ? 'show' : 'hidden'}`}>
            {/* <h4>{props.graph}</h4> */}
            <h5>{props.graph} - {props.data.label}</h5>
            <p>Dein Ergebnis: {props.data.result} %</p>
            <p>Durchschnitt: {props.data.mean} %</p>
            <button type="button" className="btn btn-outline-primary my-2">Details</button>
            Alle Fragen und Antworten dieser Prüfung
            <button type="button" className="btn btn-outline-primary mt-2">Fragen und Antworten</button>
            <button type="button" className="btn btn-outline-info mt-2" onClick={() => props.onClose()}>schließen</button>
        </div>
    )
}