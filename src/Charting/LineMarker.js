import React from 'react'
import AnimatedText from './AnimatedText'
import AnimatedLine from './AnimatedLine'

const LineMarker = props => {
    let _line = props.vertical ? 
    [
        [
            props.xScale(props.value),
            props.yScale.range()[0],
        ],
        [
            props.xScale(props.value),
            props.yScale.range()[1],
        ]
    ] :
    [
        [
            props.xScale.range()[0],
            props.yScale(props.value),
        ],
        [
            props.xScale.range()[1],
            props.yScale(props.value),
        ]
    ]
    const xLabel = props.vertical ? props.xScale.range()[0] : props.xScale.range()[1]
    const yLabel = props.vertical ? -props.xScale(props.value) - 2 : (props.yScale(props.value) - 2)
    const xValue=props.vertical ? props.xScale(props.value) : (props.xScale.range()[0] - 2)
    const yValue=props.vertical ? (props.yScale.range()[0] + 2) : props.yScale(props.value)
	return (<g className="marker selected">
        <AnimatedLine d={_line} />
        <AnimatedText  
            x={xLabel}
            y={yLabel}
            textAnchor={props.vertical ? 'begin' : 'end'}
            vertical={props.vertical}>
            {props.label}
        </AnimatedText>
        <AnimatedText 
            alignmentBaseline={props.vertical ? 'hanging' : 'central'}
            x={xValue}
            y={yValue}
            textAnchor={props.vertical ? 'middle' : 'end'}
            vertical={props.vertical}>
            {props.value}
        </AnimatedText>
	</g>)
}

export default LineMarker