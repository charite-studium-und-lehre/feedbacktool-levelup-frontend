import React from 'react'

const InfoOverlay = props => {
    const Info = props.graph.timelineinfo || (() => null)
    return (
    <div className={"p-3 animated position-absolute"}
        style={{top: '0', left: '100px', opacity: props.visible ? 1 : 0, fontSize: '.8rem'}}>
        <span className="font-weight-bold">{props.graph.label} - {props.selectedPoint.label}</span>
        <Info data={props.selectedPoint} onClose={props.onClose} />
    </div>)
}

export default InfoOverlay