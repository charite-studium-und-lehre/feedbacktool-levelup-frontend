import React from 'react'

const InfoOverlay = function (props) {
    const Info = props.graph.info || (() => null)
    return (<div className={`point-details p-3 animated card position-absolute ${props.visible ? 'show' : 'hidden'}`}>
        <h5>{props.graph.label} - {props.selectedPoint.label}</h5>
        <Info data={props.selectedPoint} onClose={props.onClose} />
    </div>)
}

export default InfoOverlay