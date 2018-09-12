import React from 'react'

export default function BarGraph(props) {
	const bars = props.data.map((d, i) => <rect 
		style={{fill: props.color || '#fe9922'}} 
		x={props.xScale(i+1)} 
		y={props.yScale(d)}
		height={props.yScale(0) - props.yScale(d)}
		width={props.xScale(1) * (props.width || .8)}
		key={"bar" + i} ></rect>)
	return <g transform={`translate(-${props.xScale(1) * (props.width || .8) / 2}, 0)`}>{bars}</g>
}