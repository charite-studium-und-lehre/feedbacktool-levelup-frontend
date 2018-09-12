import React from 'react'
import { area, curveMonotoneX } from 'd3-shape'

export default function AreaGraph (props) {
	const _area = area()
		.x(function(d, i) { return props.xScale(i+1); })
		.y0(function(d) { return props.yScale(d.y0); })
		.y1(function(d) { return props.yScale(d.y1); })
		.curve(curveMonotoneX);
	
	const dataset = props.data.map((d) => ({"y0": d[0], "y1": d[1]}));
	
	return <path d={_area(dataset)} className="area" style={{fill: props.color || "black"}}></path>
}