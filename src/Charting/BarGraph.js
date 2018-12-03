import React, { Component } from 'react'
import { select } from 'd3-selection'
import AnimatedText from './AnimatedText'

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
			.duration(550)
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
		(props.xScale(props.xScale.domain()[1]) * (props.width || .8)))
	const offset = (props.offset || 0) * width
	const dx = props.xScale.bandwidth ? 0 : (offset - width/2)
	const clickHandler = props.onClick || (() => {})
	return (<g className={`bar-graph ${props.className || ''}`}>{props.data.map((d, i) => 
		<g key={"bar" + d.x} className="bar animated" style={props.style}>
			<Bar
				style={{fill: d.highlight ? (props.highlightColor || '#fe99f2') : (d.color || props.color || '#fe9922')}} 
				x={props.xScale(d.x) + dx}
				y={props.yScale(d.y)}
				height={props.yScale.range()[0] - props.yScale(d.y)}
				width={width} 
				onClick={() => clickHandler(d, i)} />
			{props.labels && 
				<AnimatedText x={props.xScale(d.x) + (props.xScale.bandwidth ? (width/2) : offset)} y={props.yScale(d.y) - 3}>
					{d.label || d.y}
				</AnimatedText>
			}
		</g>)}
	</g>)
}

export default BarGraph
export { Bar }