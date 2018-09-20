import React from 'react'

const BarGraph = props => {
	return (<g transform={`translate(-${props.xScale(props.width || 1) / 2}, 0)`}>{props.data.map((d, i) => 
		<rect 
			style={{fill: d.highlight ? (props.highlightColor || '#fe99f2') : (props.color || '#fe9922')}} 
			x={props.xScale(d.x + (props.offset || 0))} 
			y={props.yScale(d.y)}
			height={props.yScale(props.yScale.domain()[0]) - props.yScale(d.y)}
			width={props.xScale(props.width || 1)}
			key={"bar" + i} />)}
	</g>)
}

export default BarGraph