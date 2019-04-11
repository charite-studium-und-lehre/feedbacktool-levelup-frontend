import React from 'react'

const style = {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    maxWidth: '20rem',
    right: '1rem',
    zIndex: '1',
}

const InfoOverlay = props => {
    const Info = props.graph.info || (() => null)
    return (
    <div style={style} className={`ml-1 p-3 animated card with-border position-absolute ${props.visible ? 'show' : 'hidden'}`}>
        <h5>{props.graph.label} - {props.selectedPoint.label}</h5>
        <Info data={props.selectedPoint} onClose={props.onClose} />
    </div>)
}

export default InfoOverlay
