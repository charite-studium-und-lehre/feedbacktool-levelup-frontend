import React from 'react'

export default function PointGraph(props) {
    const onClick = props.onClick || (() => {})

    const texts = !props.withLabels || props.data.map((d, i) => (<text
        key={i}
        x={props.xScale(d.x) - 10}
        y={props.yScale(d.y) + 15}
        fontFamily="sans-serif" 
        fontSize=".6rem">{d.label}</text>))

    const circles = props.data.map(d => <circle 
        key={"circle" + d.x} 
        className={`dot ${props.selectedPoint === d.x ? 'selected' : ''}`} 
        cx={props.xScale(d.x)} 
        cy={props.yScale(d.y)} 
        r={props.size || "5"}
        style={{fill: props.color || 'black'}}
        onClick={() => onClick(d.x)}>>
    </circle>)
	return (
        <g className={`point animated ${props.className || ''}`}>
            {circles}
            {texts}
        </g>
    )
}