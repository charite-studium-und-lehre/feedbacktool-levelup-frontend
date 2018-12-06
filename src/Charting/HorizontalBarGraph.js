import React from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import { XAxis, YAxis } from './Axis'
import { asChart } from './Chart'
import AnimatedText from './AnimatedText'
import { Bar } from './BarGraph'

const HorizontalBarGraph = props => {
	const height = props.yScale.bandwidth ? props.yScale.bandwidth() : (props.data.length > 1 ? 
		(props.yScale(Math.max(...props.data.map(d => d.x))) - props.yScale(Math.min(...props.data.map(d => d.x)))) / (props.data.length - 1) * (props.width || 1) :
		(props.yScale.range()[1] * (props.width || .8)))
	const offset = (props.offset || 0) * height
	const dy = props.yScale.bandwidth ? 0 : (offset - height/2)
	const clickHandler = props.onClick || (() => {})
	return (
	<g>
		{props.data.map((d, i) => 
			<g key={"bar" + d.y} className="bar animated" style={props.style}>
				<Bar 
					style={{fill: d.highlight ? (props.highlightColor || '#fe99f2') : (d.color || props.color || '#fe9922')}}
					y={props.yScale(d.y) + dy} 
					x={0}
					width={props.xScale(d.x)}
					height={height} 
					onClick={() => clickHandler(d, i)} />
				{props.labels && 
					<AnimatedText
						x={props.xScale(d.x) + 3}
						y={props.yScale(d.y) + height / 2}
						textAnchor="start"
						alignmentBaseline="central">
						{d.label || d.x}
					</AnimatedText>
				}
			</g>
		)}
	</g>)
}

export default HorizontalBarGraph

const HorizontalBarChart = asChart(props => {
    const scales = {
        xScale: scaleLinear().domain([0,100]).range([0, props.width]),
		yScale: scaleBand()
					.domain(props.data.map(d => d.y))
					.range([props.height, 0])
					.paddingInner(.2)
					.paddingOuter(.1)
    }
    return <g>
        <HorizontalBarGraph labels {...scales} data={props.data} />
        <YAxis horizontal {...scales} />
        <XAxis horizontal {...scales} ticks={{count:4}} />
    </g>
})

export { HorizontalBarChart }