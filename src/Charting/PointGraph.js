import React from 'react'

export default function PointGraph(props) {
    const onClick = props.onClick || (() => {})
    const circles = props.data.map(d => <circle 
        key={"circle" + d.x} 
        className={`dot ${props.selectedPoint === d.x ? 'selected' : ''}`} 
        cx={props.xScale(d.x)} 
        cy={props.yScale(d.y)} 
        r={props.size || "5"}
        style={{fill: props.color || 'black'}}
        onClick={() => onClick(d.x)}>>
    </circle>)
	return <g className={`point animated ${props.className}`}>{circles}</g>
}