import React from 'react'
import { area } from 'd3-shape'
import { curveMonotoneX } from 'd3-shape'

export default function AreaGraph (props) {
	const _area = area()
		.x(d => props.xScale(d.x) )
		.y0(d => props.yScale(d.y0) )
		.y1(d => props.yScale(d.y1) )
		.curve(props.curve || curveMonotoneX);
	
	return <path d={_area(props.data)} className="area" style={{fill: props.color || "black"}}></path>
}