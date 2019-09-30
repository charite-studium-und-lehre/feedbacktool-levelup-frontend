import React, { useState, useEffect } from 'react'
import _ from 'lodash/fp'
import { transition } from 'd3-transition'
import { interpolateNumber } from 'd3-interpolate'
import { easeQuadInOut } from 'd3-ease'
import { animationTime as at } from './Utils'

const AnimatedInteger = ({ ease = easeQuadInOut, initial, animationTime = at, ...props }) => {
    const [value, setValue] = useState(initial === undefined ? props.value : initial)

    useEffect(() => {
        transition(_.uniqueId())
            .ease(ease)
            .tween('text', () => {
                const interpolator = interpolateNumber(value, props.value)
                return _.compose(setValue, Math.round, interpolator)
            })
            .duration(animationTime)
    }, [props.value])

    return <>{value}</>
}

export default AnimatedInteger