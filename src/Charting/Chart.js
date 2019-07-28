import React, { useState, useRef, useEffect } from 'react'
import _ from 'lodash/fp'
import { scaleLinear, scaleBand, scaleTime } from 'd3-scale'

const copyPropsToChildren = props => {
    const {children, ...additionalprops} = props
    return React.Children.map(children, child => React.cloneElement(child, additionalprops))
}

const asChart = WrappedComponent =>
    props => {
        const [ size, setSize ] = useState(null)
        const node = useRef(null)
        useEffect(() => {
            const handler = _.debounce(200, () => { if (node.current !== null) setSize(node.current.getBoundingClientRect()) })
            if(size === null) handler()
            window.addEventListener('resize', handler)
            return () => window.removeEventListener('resize', handler)
        })
        const renderContent = () => <g><WrappedComponent {...props} width={size.width} height={size.height} /></g>

        return (
            <svg ref={node} width="100%" height="100%" preserveAspectRatio="none">
                { size && renderContent() }
            </svg>
        )
    }

const Chart = asChart(copyPropsToChildren)

export default Chart

const withLinearScales = WrappedComponent => props => {
    const { width, height, xDomain, yDomain, ...otherProps } = props
    const xScale = scaleLinear()
        .domain(xDomain || [])
        .range([0, width])
    
    const yScale = scaleLinear()
        .domain(yDomain || [])
        .range([height, 0])

    return <WrappedComponent {...otherProps} xScale={xScale} yScale={yScale} />
}

const LinearScales = withLinearScales(copyPropsToChildren)

const LinearChart = asChart(withLinearScales(copyPropsToChildren))

const withOrdinalScales = WrappedComponent => props => {
    const { width, height, offset, scale, xDomain, yDomain, padding, ...otherProps } = props
    const xScale = scaleBand()
        .domain(xDomain || [])
        .rangeRound([(offset || 0) * width, (offset || 0) * width + width * (scale || 1)])
        .paddingInner(padding || 0.2)
        .paddingOuter(padding || 0.1)
    
    const yScale = scaleLinear()
        .domain(yDomain || [])
        .range([height, 0])
    
    return <WrappedComponent {...otherProps} xScale={xScale} yScale={yScale} />
}

const OrdinalScales = withOrdinalScales(copyPropsToChildren)

const OrdinalChart = asChart(withOrdinalScales(copyPropsToChildren))

const withTimeScales = WrappedComponent => props => {
    const { width, height, ...otherProps } = props
    const xScale = scaleTime()
        .domain(props.xDomain || [])
        .range([0, width])
    
    const yScale = scaleLinear()
        .domain(props.yDomain || [])
        .range([height, 0])

    return <WrappedComponent {...otherProps} xScale={xScale} yScale={yScale} />
}

const withHorizontalOrdinalScales = WrappedComponent => props => {
	const { width, height, offset, scale, xDomain, yDomain, padding, ...otherProps } = props
	const scales = {
		xScale: scaleLinear().domain(xDomain || [0,100]).range([0, width]),
		yScale: scaleBand()
					.domain(yDomain)
					.rangeRound([(offset || 0) * height + height * (scale || 1), (offset || 0) * height])
					.paddingInner(padding || 0.2)
					.paddingOuter(padding || .1)
	}
	return <WrappedComponent {...otherProps} {...scales} />
}

const TimeScales = withTimeScales(copyPropsToChildren)

const TimeChart = asChart(withTimeScales(copyPropsToChildren))

export { asChart, LinearChart, LinearScales, OrdinalChart, OrdinalScales, withHorizontalOrdinalScales, TimeChart, TimeScales }