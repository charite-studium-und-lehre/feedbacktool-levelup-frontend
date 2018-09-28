import React from 'react'
import { line } from 'd3-shape'

const LineMarker = props => {
    let _line = props.vertical ? 
    [
        [
            props.xScale(props.value),
            props.yScale(props.yScale.domain()[0]),
        ],
        [
            props.xScale(props.value),
            props.yScale(props.yScale.domain()[1]),
        ]
    ] :
    [
        [
            props.xScale(props.xScale.domain()[0]),
            props.yScale(props.value),
        ],
        [
            props.xScale(props.xScale.domain()[1]),
            props.yScale(props.value),
        ]
    ]
    const xLabel = props.vertical ? props.xScale(props.xScale.domain()[0]) : props.xScale(props.xScale.domain()[1])
    const yLabel = props.vertical ? -props.xScale(props.value) - 2 : (props.yScale(props.value) - 2)
    const xValue=props.vertical ? props.xScale(props.value) : (props.xScale(props.xScale.domain()[0]) - 2)
    const yValue=props.vertical ? (props.yScale(props.yScale.domain()[0]) + 2) : props.yScale(props.value)
	return (<g className="marker selected">
		<path d={line()(_line)} className="line animated" style={{stroke: props.color || "rgba(0,0,0,.6)"}} />
        <text 
            alignmentBaseline="baseline" 
            x="0"
            y="0"
            textAnchor={props.vertical ? 'begin' : 'end'}
            transform={`rotate(${props.vertical ? '90' : '0'}) translate(${xLabel},${yLabel})`}
            className="animated">
            {props.label}
        </text>
        <text 
            alignmentBaseline={props.vertical ? 'hanging' : 'central'}
            x="0"
            y="0"
            textAnchor={props.vertical ? 'middle' : 'end'}
            transform={`rotate(${props.vertical ? '90' : '0'}) translate(${xValue},${yValue})`}
            className="animated">
            {props.value}
        </text>
	</g>)
}

export default LineMarker