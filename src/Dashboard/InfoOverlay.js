import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const InfoOverlay = function (props) {
    const Info = props.info || (() => null)
    return (
    <div className={`p-3 animated position-absolute ${props.visible ? 'show' : 'd-none'}`}
        style={{
            top: '10px',
            left: '100px'
        }}>
        <h5>{props.selectedPoint.label}</h5>
        <div>
            <div>Dein Ergebnis: {props.selectedPoint.result}</div>
            <div>Durchschnitt: {props.selectedPoint.mean}</div>
            <Link to={`/exams/${props.graph}/${props.selectedPoint.label}`}>
                <span className="text-primary my-2 w-100">Details</span>
            </Link>
        </div>
    </div>)
}

export default InfoOverlay