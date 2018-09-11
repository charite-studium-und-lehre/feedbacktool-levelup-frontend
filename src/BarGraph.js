import React from 'react'

export default function BarGraph(props) {
	const bars = props.data.map((d, i) => <rect 
		style={{fill: props.color || '#fe9922'}} 
		x={props.xScale(i+1)} 
		y={props.yScale(d)}
		height={props.yScale(0) - props.yScale(d)}
		width="25"
		key={"bar" + i} ></rect>)
	return <g transform="translate(-12.5, 0)">{bars}</g>
}