import React, { useRef, useEffect } from 'react'
import { line } from 'd3-shape'
import { select } from 'd3-selection'
import { easeCubic } from 'd3-ease'
import { animationTime as at } from './Utils'

const AnimatedPath = ({ 
        stroke = 'rgba(0,0,0,.6)',
        style = {},
        fill = 'none',
        className = '',
        animationTime = at,
        delay = 0,
        shape = line(),
        ease = easeCubic,
        ...props
    }) => {

    const node = useRef()

    function update() {
		const el = select(node.current)
            .datum(props.d)
            .transition()
            .attr('d', shape)
            .ease( ease )
            .delay(delay)
			.duration(animationTime)
        props.tween && el.attrTween('d', d => t => shape(props.tween(t)))
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