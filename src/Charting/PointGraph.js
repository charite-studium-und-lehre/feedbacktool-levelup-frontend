import React from 'react'

export default function PointGraph(props) {
    const onClick = props.onClick || (() => {})
    const circles = props.data.map(d => <circle 
        key={"circle" + d[0]} 
        className={`dot ${props.selectedPoint === d[0] ? 'selected' : ''}`} 
        cx={props.xScale(d[0])} 
        cy={props.yScale(d[1])} 
        r="5" 
        style={{fill: `hsla(${props.color || 32}, 100%, 30%, .4)`}}
        onClick={() => onClick(d[0])}>>
    </circle>)
	return <g className={`point animated ${props.className}`}>{circles}</g>
}