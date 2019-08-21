import React, { useState, useRef, useEffect } from 'react'
import { line } from 'd3-shape'
import { select } from 'd3-selection'
import { animationTime as at } from './Utils'

const AnimatedPath = ({ 
        stroke = 'rgba(0,0,0,.6)',
        style = {},
        fill = 'none',
        className = '',
        animationTime = at,
        delay = 0,
        shape = line(),
        ...props
    }) => {

    const node = useRef()

    function update() {
		select(node.current)
			.datum(props.d)
            .transition()
            .ease( t => t )
            .delay(delay)
			.duration(animationTime)
			.attrTween('d', d => t => shape(props.tween ? props.tween(t) : d))
    }

    useEffect( () => {
        update() 
    })

    return <path 
        ref={node} 
        className={`${className}`}
        style={style} 
        fill={fill}
        stroke={stroke} />
}

export default AnimatedPath