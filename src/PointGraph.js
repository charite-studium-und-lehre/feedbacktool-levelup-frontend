import React from 'react'

export default function PointGraph(props) {
    const circles = props.data.map(d => <circle 
        key={"circle" + d[0]} 
        className="dot" 
        cx={props.xScale(d[0])} 
        cy={props.yScale(d[1])} 
        r="5" 
        style={{fill: props.color || '#fe9922'}}>
    </circle>)
	return <g className={`point animated ${props.className}`}>{circles}</g>
}