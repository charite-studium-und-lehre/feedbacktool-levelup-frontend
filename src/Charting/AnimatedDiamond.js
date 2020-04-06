import React, { useState, useRef, useEffect } from 'react'
import { select } from 'd3-selection'
import { animationTime } from './Utils'
import COLORS from "../colors"

export const DiamondShape = ({ color = COLORS.textBlack }) =>
    <polygon style={{fill: color, stroke: 'var(--color-background-base)', strokeWidth: .1}}
        points="0.5 0, 1 0.5, 0.5 1, 0 0.5"/>

const AnimatedDiamond = ({ color = COLORS.textBlack, cx, cy, size }) => {
    const node = useRef()
    const [ dcx ] = useState(cx)
    const [ dcy ] = useState(cy)
    const [ dsize ] = useState(size)

    useEffect(() => {
		select(node.current)
            .transition()
			.duration(animationTime)
			.attr('transform', `translate(${cx - size*.5}, ${cy - size*.5}) scale(${size})`)
            .style('opacity', 1)
    })

    return <g ref={node} transform={`translate(${dcx - dsize*.5}, ${dcy - dsize*.5}) scale(${dsize})`}>
        <DiamondShape color={color} />
    </g>
}

export default AnimatedDiamond