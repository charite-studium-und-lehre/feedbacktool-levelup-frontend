import React from 'react'

export default function HorizontalBarGraph(props) {
	const bars = props.data.map((d, i) => <rect 
		style={{fill: props.color || `hsla(33, 100%, ${i / props.data.length * 100}%, .5)`}} 
		y={props.yScale(i+1)} 
		x={0}
		width={props.xScale(d)}
		height={(props.yScale(0) - props.yScale(1)) * (props.width || .8)}
		key={"bar" + i} 
		className="bar animated" ></rect>)
	return <g transform={`translate(0, -${(props.yScale(0) - props.yScale(1)) * (props.width || .8) / 2})`}>{bars}</g>
}