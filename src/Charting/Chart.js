import React, { Component } from 'react'
import { scaleLinear, scaleBand, scaleTime } from 'd3-scale'
import { select } from 'd3-selection'

const copyPropsToChildren = props => {
    const {children, ...additionalprops} = props
    return React.Children.map(children, child => React.cloneElement(child, additionalprops))
}

const asChart = WrappedComponent =>
    class extends Component {
        constructor(props){
            super(props)
            this.node = React.createRef()
            this.state = { size: null }
        }

        componentDidUpdate() {
            setTimeout(() => {
                    if(!this.state.size || this.state.size.height !== this.node.current.height.baseVal.value || 
                        this.state.size.width !== this.node.current.width.baseVal.value) {
                        this.setState({
                            size: {
                                width: this.node.current.width.baseVal.value,
                                height: this.node.current.height.baseVal.value,
                            },
                        })
                    }
                }, 100)
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({
                    size: {
                        width: this.node.current.width.baseVal.value,
                        height: this.node.current.height.baseVal.value,
                    },
                })
            }, 100)
        }

        renderContent() {
            const { width, height } = this.state.size
            
            select(this.node.current)
                .attr("preserveAspectRatio", "none")

            return <g><WrappedComponent {...this.props} width={width} height={height} /></g>
        }

        render() {
            const size = this.state.size;
            return (<svg ref={this.node} width="100%" height="100%">
                { size && this.renderContent() }
            </svg>)
        }
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
					.paddingInner(.2)
					.paddingOuter(.1)
	}
	return <WrappedComponent {...otherProps} {...scales} />
}

const TimeScales = withTimeScales(copyPropsToChildren)

const TimeChart = asChart(withTimeScales(copyPropsToChildren))

export { asChart, LinearChart, LinearScales, OrdinalChart, OrdinalScales, withHorizontalOrdinalScales, TimeChart, TimeScales }