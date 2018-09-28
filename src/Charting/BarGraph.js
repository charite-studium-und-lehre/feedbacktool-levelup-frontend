import React from 'react'

const BarGraph = props => {
	const width = props.data.length > 1 ? 
		(props.xScale(Math.max(...props.data.map(d => d.x))) - props.xScale(Math.min(...props.data.map(d => d.x)))) / (props.data.length - 1) * (props.width || 1) :
		(props.xScale(props.xScale.domain()[1]) * (props.width || .8))
	const offset = (props.offset || 0) * width
	const clickHandler = props.onClick || (() => {})
	return (<g>{props.data.map((d, i) => 
		<g key={"bar" + i} className="bar animated" style={props.style}>
			<rect 
				style={{fill: d.highlight ? (props.highlightColor || '#fe99f2') : (props.color || '#fe9922')}} 
				x={props.xScale(d.x) + offset - width/2}
				y={props.yScale(d.y)}
				height={props.yScale(props.yScale.domain()[0]) - props.yScale(d.y)}
				width={width} 
				onClick={() => clickHandler(d, i)} 
				className="animated" />
			{props.labels && 
				<text
					transform={`translate(${props.xScale(d.x) + offset}, ${props.yScale(d.y) - 3})`}
					x="0"
					y="0"
					textAnchor="middle"
					className="animated">
					{d.y}
				</text>
			}
		</g>)}
	</g>)
}

export default BarGraph