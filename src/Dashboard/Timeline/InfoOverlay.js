import React from 'react'

const InfoOverlay = props => {
    const Info = props.graph.timelineinfo || (() => null)
    return (
    <div className={"p-3 position-absolute"}
        style={{top: '0', left: props.visible ? '15%' : '100%', opacity: props.visible ? 1 : 0, fontSize: '.8rem'}}>
        <span className="font-weight-bold">{props.graph.label} - {props.selectedPoint.label}</span>
        <Info data={props.selectedPoint} onClose={props.onClose} />
    </div>)
}

export default InfoOverlay