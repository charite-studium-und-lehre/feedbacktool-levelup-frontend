import React, { useState, useRef, useEffect } from 'react'
import { select } from 'd3-selection'
import { scaleBand } from 'd3-scale'
import AnimatedText from './AnimatedText'
import { animationTime } from './Utils'
import COLORS from '../colors'

export const Bar = ({ fadeIn = true, ...props }) => {
	const node = useRef(),
	[x] = useState(props.x),
	[y] = useState(props.y),
	[width] = useState(props.width),
	[height] = useState(props.height),
	[fill] = useState(props.fill)

	useEffect(() => {
		select(node.current)
			.datum(props)
            .transition()
			.duration(animationTime)
			.attr('x', d => d.x)
			.attr('y', d => d.y)
			.attr('height', d => d.height)
			.attr('width', d => d.width)
			.attr('fill', d => d.fill)
	})

	return <rect
		ref={node}
		fill={fill}
		style={props.style}
		x={x}
		y={fadeIn ? y + height : y}
		height={fadeIn ? 0 : height}
		width={width}
		onClick={props.onClick}
		opacity={.9}
	/>
}

const BarGraph = props => {
	const width = props.xScale.bandwidth ? props.xScale.bandwidth() : (props.data.length > 1 ?
		(props.xScale(Math.max(...props.data.map(d => d.x))) - props.xScale(Math.min(...props.data.map(d => d.x)))) / (props.data.length - 1) * (props.width || 1) :
		(props.xScale.range()[1] * (props.width || .8)))
	const offset = (props.offset || 0) * width
	const dx = props.xScale.bandwidth ? 0 : (offset - width/2)
	const clickHandler = props.onClick || (() => {})
	return (
	<g className={`bar-graph ${props.className || ''}`}>
	{props.data.map((d, i) => {
		const values = [].concat(d.y)
		const scale = scaleBand()
			.domain([0, values.length-1])
			.range([props.xScale(d.x) + dx, props.xScale(d.x) + dx + width])
			.paddingOuter(0)
		return <g key={d.x} className="bar animated" style={props.style}>
			{values.map((y,j) =>
			<g key={j}>
				<Bar
					fill={ d.highlight ? (props.highlightColor || COLORS.default) : (Array.isArray(d.color) ? d.color[j] : d.color || props.color || COLORS.default)}
					x={scale(j)}
					y={props.yScale(y)}
					height={props.yScale.range()[0] - props.yScale(y)}
					width={scale.bandwidth()}
					onClick={() => clickHandler(d, i)} />
				{props.labels &&
					<AnimatedText
					startPos={{y:props.yScale(y) - 3 + props.yScale.range()[0] - props.yScale(y)}}
					x={scale(j) + scale.bandwidth()/2 }
					y={props.yScale(y) - 3}>
						{Array.isArray(d.label) ? d.label[j] : d.label || y}
					</AnimatedText>
				}
			</g>)}
		</g>
	})}
	</g>)
}

export default BarGraph
