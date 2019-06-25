import React from 'react'
import { XAxis } from './Axis'
import { asChart, withHorizontalOrdinalScales } from './Chart'
import AnimatedText from './AnimatedText'
import { Bar } from './BarGraph'

const HorizontalBarGraph = props => {
	const height = props.yScale.bandwidth ? props.yScale.bandwidth() : (props.data.length > 1 ? 
		(props.yScale(Math.max(...props.data.map(d => d.x))) - props.yScale(Math.min(...props.data.map(d => d.x)))) / (props.data.length - 1) * (props.width || 1) :
		(props.yScale.range()[1] * (props.width || .8)))
	const offset = (props.offset || 0) * height
	const dy = props.yScale.bandwidth ? 10 : (offset - height/2)
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
					height={height - 13} 
					onClick={() => clickHandler(d, i)} />
				{props.labels && 
					<AnimatedText
						x={props.xScale(d.x) + 3}
						y={props.yScale(d.y) + (height - 13) / 2 + dy}
						textAnchor="start"
						color="rgba(0, 0, 0, .6)"
						style={{fontSize: '.75rem'}}
						dominantBaseline="central">
						{d.label || d.x}
					</AnimatedText>
				}
				<AnimatedText 
                    y={props.yScale(d.y)} 
					x={0}
					color="rgba(0, 0, 0, .6)"
					style={{fontSize: '.75rem'}}
                    textAnchor="start"
                    dominantBaseline="central">
                    {d.y}
                </AnimatedText>
			</g>
		)}
	</g>)
}

export default HorizontalBarGraph

const HorizontalBarChart = asChart(withHorizontalOrdinalScales(props => {
    return <g>
        <HorizontalBarGraph labels {...props}  />
        {/* <YAxis horizontal xScale={props.xScale} yScale={props.yScale} /> */}
        {props.noaxis || <XAxis horizontal xScale={props.xScale} yScale={props.yScale} ticks={{count:4}} />}
    </g>
}))

export { HorizontalBarChart }