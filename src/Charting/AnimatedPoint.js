import React, { useEffect, useState } from 'react'
import { select } from 'd3-selection'
import { animationTime } from './Utils'
import css from './AnimatedPoint.module.css'

const AnimatedPoint = ({
        cx, cy, selected, x,
        color = 'rgba(0,0,0,.6)',
        fill = 'rgba(0,0,0,.6)',
        className = '',
        r = 5,
        onClick = () => {},
    }) => {

    const [ node ] = useState(React.createRef())
    const [ dcx ] = useState(cx)
    const [ dcy ] = useState(cy)

    useEffect(() => {
		select(node.current)
            .transition()
			.duration(animationTime)
			.attr('cx', cx)
            .attr('cy',  cy)
    })

    return <circle 
        ref={node}
        r={r}
        style={{stroke: color, fill: fill}}
        cx={dcx}
        cy={dcy}
        className={`animated ${css.dot} ${className} ${selected && css.selected}`} 
        onClick={() => onClick(x)} />
}

export default AnimatedPoint