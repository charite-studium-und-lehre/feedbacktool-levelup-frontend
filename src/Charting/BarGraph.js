import React from 'react'

const BarGraph = props => {
	const width = props.xScale(props.width || 1)
	const offset = props.offset || 0
	return (<g>{props.data.map((d, i) => 
		<g key={"bar" + i} className="bar">
			<rect 
				style={{fill: d.highlight ? (props.highlightColor || '#fe99f2') : (props.color || '#fe9922')}} 
				x={props.xScale(d.x + offset)-width/2} 
				y={props.yScale(d.y)}
				height={props.yScale(props.yScale.domain()[0]) - props.yScale(d.y)}
				width={width} />
			{props.labels ? <text x={props.xScale(d.x + offset)} y={props.yScale(d.y) - 2} textAnchor="middle">{d.y}</text> : ''}
		</g>)}
	</g>)
}

export default BarGraph