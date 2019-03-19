import React, { Component } from 'react'
import { scaleLinear, scalePoint } from 'd3-scale'
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
        .domain(xDomain )
        .range([0, 800])
    
    const yScale = scaleLinear()
        .domain(yDomain )
        .range([0, 500])

    return <WrappedComponent {...otherProps} xScale={xScale} yScale={yScale} />
}

const LinearScales = withLinearScales(copyPropsToChildren)

const LinearChart = asChart(withLinearScales(copyPropsToChildren))







export { asChart, LinearChart, LinearScales }