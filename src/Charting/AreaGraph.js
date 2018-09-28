import React from 'react'
import { area } from 'd3-shape'
import { curveSelect } from './Utils'

export default function AreaGraph (props) {
	const _area = area()
		.x(d => props.xScale(d.x) )
		.y0(d => props.yScale(d.y0) )
		.y1(d => props.yScale(d.y1) )
		.curve(curveSelect(props.curve));
	
	return <path d={_area(props.data)} className="area" style={{fill: props.color || "black"}}></path>
}