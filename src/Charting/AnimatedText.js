import React, { useRef, useState, useEffect } from 'react'
import { select } from 'd3-selection'
import { animationTime } from './Utils'

const AnimatedText = ({
        color = 'black',
        textAnchor = 'middle',
        className = '',
        transform = '',
        dominantBaseline = "baseline",
        style = {fontSize: '0.8rem'},
        ...props
    }) => {

	const node = useRef()
    const [x] = useState(props.x)
    const [y] = useState(props.y)

    useEffect(() => {
        if(!node.current) return
		select(node.current)
			.datum(props)
            .transition()
			.duration(animationTime)
			.attr('x', d => d.x)
			.attr('y', d => d.y)
    })

    return (<text
        ref={node}
        x={x}
        y={y}
        textAnchor={textAnchor}
        fill={color}
        style={style}
        dominantBaseline={dominantBaseline}
        className={`animated ${className}`}>
        {props.children}
    </text>)
}

export default AnimatedText