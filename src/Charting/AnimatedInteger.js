import React, { useState, useEffect } from 'react'
import _ from 'lodash/fp'
import { select } from 'd3-selection'
import { interpolateNumber } from 'd3-interpolate'
import { easeQuadInOut } from 'd3-ease'
import { animationTime as at } from './Utils'

const AnimatedInteger = ({ ease = easeQuadInOut, initial, animationTime = at, ...props }) => {
    const [value, setValue] = useState(initial === undefined ? props.value : initial)
    
    useEffect(() => {
        const interpolator = interpolateNumber(value, props.value)
        const id = _.uniqueId()
        select('body').transition(id)
            .ease(ease)
            .tween('text', () => _.compose(setValue, Math.round, interpolator))
            .duration(animationTime)
        return () => { select('body').interrupt(id) }
    }, [props.value])

    return <>{value}</>
}

export default AnimatedInteger