import React from 'react'

export default function BarGraph(props) {
	const bars = props.data.map((d, i) => <rect 
		style={{fill: props.color || (d.highlight ? '#fe99f2' : '#fe9922')}} 
		x={props.xScale(d.x)} 
		y={props.yScale(d.y)}
		height={props.yScale(0) - props.yScale(d.y)}
		width={(props.xScale(1) - props.xScale(0)) * (props.width || .8)}
		key={"bar" + i} ></rect>)
	return <g transform={`translate(-${props.xScale(1) * (props.width || .8) / 2}, 0)`}>{bars}</g>
}