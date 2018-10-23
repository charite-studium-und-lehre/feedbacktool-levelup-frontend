import React from 'react'

const PtmInfo = props =>
    (<div>
        <div>Dein Ergebnis:<span className="font-italic"> {props.data.result} %</span></div>
        <div>Durchschnitt:<span className="font-italic"> {props.data.mean} %</span></div>
        <button type="button" className="btn btn-outline-info mt-2" onClick={() => props.onClose()}>schließen</button>
    </div>)

export default PtmInfo