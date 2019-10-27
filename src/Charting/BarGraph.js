import React, { Component } from 'react'
import _ from 'lodash'
import { select } from 'd3-selection'
import { scaleBand } from 'd3-scale'
import AnimatedText from './AnimatedText'
import { animationTime } from './Utils'

class Bar extends Component {
	constructor(props) {
        super(props)
		this.node = React.createRef()
		this.state = { x: props.x, y: props.y, width: props.width, height: props.height, fill: props.fill }
	}

	componentDidUpdate() {
		select(this.node.current)
			.datum(this.props)
            .transition()
			.duration(animationTime)
			.attr('x', d => d.x)
			.attr('y', d => d.y)
			.attr('height', d => d.height)
			.attr('width', d => d.width)
			.attr('fill', d => d.fill)
	}

	render() {
		return (<rect
			ref={this.node}
			fill={this.state.fill}
			style={this.props.style}
			x={this.state.x}
			y={this.state.y}
			height={this.state.height}
			width={this.state.width} 
			onClick={this.props.onClick} />)
	}
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
					fill={ d.highlight ? (props.highlightColor || '#fe99f2') : (_.isArray(d.color) ? d.color[j] : d.color || props.color || '#fe9922')} 
					x={scale(j)}
					y={props.yScale(y)}
					height={props.yScale.range()[0] - props.yScale(y)}
					width={scale.bandwidth()} 
					onClick={() => clickHandler(d, i)} />
				{props.labels && 
					<AnimatedText 
					x={scale(j) + scale.bandwidth()/2 } 
					y={props.yScale(y) - 3}>
						{_.isArray(d.label) ? d.label[j] : d.label || y}
					</AnimatedText>
				}
			</g>)}
		</g>
	})}
	</g>)
}

export default BarGraph
export { Bar }