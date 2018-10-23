import React from 'react'

export default function HorizontalBarGraph(props) {
	const height = (props.yScale(0) - props.yScale(1)) * (props.width || .8)
	return (
	<g transform={`translate(0, -${(props.yScale(0) - props.yScale(1)) * (props.width || .8) / 2})`}>
		{props.data.map((d, i) => 
			<g key={"bar" + d.x} className="bar animated" style={props.style}>
				<rect 
					style={{fill: props.color || `hsla(33, 100%, ${i / props.data.length * 100}%, .5)`}} 
					y={props.yScale(d.x)} 
					x={0}
					width={props.xScale(d.y)}
					height={height}
					key={"bar" + i} 
					className="bar animated" />
				{props.labels && 
					<text
						transform={`translate(${props.xScale(d.y) + 3}, ${props.yScale(d.x) + height / 2})`}
						x="0"
						y="0"
						textAnchor="start"
						alignmentBaseline="central"
						className="animated">
						{d.label || d.y}
					</text>
				}
			</g>
		)}
	</g>)
}