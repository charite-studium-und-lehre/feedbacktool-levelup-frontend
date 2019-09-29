import React, { Component } from 'react'
import _ from 'lodash'
import { select } from 'd3-selection'
import AnimatedText from './AnimatedText'
import { animationTime } from './Utils'

class Bar extends Component {
	constructor(props) {
        super(props)
		this.node = React.createRef()
		this.state = { x: props.x, y: props.y, width: props.width, height: props.height }
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
	}

	render() {
		return (<rect
			ref={this.node}
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
	{props.data.map((d, i) => 
		<g key={d.x} className="bar animated" style={props.style}>
			{[].concat(d.y).map((y,j) => 
			<g key={j}>
				<Bar
					style={{fill: d.highlight ? (props.highlightColor || '#fe99f2') : (_.isArray(d.color) ? d.color[j] : d.color || props.color || '#fe9922')}} 
					x={props.xScale(d.x) + dx}
					y={props.yScale(y)}
					height={props.yScale.range()[0] - props.yScale(y)}
					width={width} 
					onClick={() => clickHandler(d, i)} />
				{props.labels && 
					<AnimatedText 
					x={props.xScale(d.x) + (props.xScale.bandwidth ? (width/2) : offset)} 
					y={props.yScale(y) - 3}>
						{_.isArray(d.label) ? d.label[j] : d.label || y}
					</AnimatedText>
				}
			</g>)}
		</g>
	)}
	</g>)
}

export default BarGraph
export { Bar }