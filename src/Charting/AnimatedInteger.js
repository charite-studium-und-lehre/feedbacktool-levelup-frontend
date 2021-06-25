import React, { useState, useEffect } from 'react'
import { uniqueId } from 'lodash/fp'
import { select } from 'd3-selection'
import { interpolateNumber } from 'd3-interpolate'
import { easeQuadInOut } from 'd3-ease'
import { animationTime as at } from './Utils'
import { compose } from '../Utils/utils'

const AnimatedInteger = ({
    ease = easeQuadInOut,
    initial,
    animationTime = at,
    ...props
}) => {
    const [value, setValue] = useState(initial === undefined ? props.value : initial)

    useEffect(() => {
        const interpolator = interpolateNumber(value, props.value)
        const id = uniqueId++
        select('body').transition(id)
            .ease(ease)
            .tween('text', () => compose(setValue, Math.round, interpolator))
            .duration(animationTime)
        return () => { select('boy').interrupt(id) }
    }, [props.value, value, animationTime, ease])

    return <>{value}</>
}

export default AnimatedInteger
