import React from 'react'
import { area, curveMonotoneX } from 'd3-shape'

export default function AreaGraph (props) {
	const _area = area()
		.x(function(d, i) { return props.xScale(d.x); })
		.y0(function(d) { return props.yScale(d.y0); })
		.y1(function(d) { return props.yScale(d.y1); })
		.curve(curveMonotoneX);
	
	const dataset = props.data.map((d) => ({"x": d[0], "y0": d[1], "y1": d[2]}));
	
	return <path d={_area(dataset)} className="area" style={{fill: props.color || "black"}}></path>
}