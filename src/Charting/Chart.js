import React, { Component } from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import { select } from 'd3-selection'

class Chart extends Component {
    constructor(props){
        super(props)
        this.node = React.createRef()
        this.state = { size: null }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                size: {
                    width: this.node.current.width.baseVal.value,
                    height: this.node.current.height.baseVal.value,
                },
            })
        })
    }

    renderContent() {
        const { width, height } = this.state.size
        
        select(this.node.current)
            .attr("viewBox", "0 0 " + width + " " + height )
            .attr("preserveAspectRatio", "none")

        const childrenWithSizes = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { width, height });
        });
        return <g>{childrenWithSizes}</g>
    }

    render() {
        const size = this.state.size;
        return (<svg ref={this.node} width="100%" height="100%">
            { size && this.renderContent() }
        </svg>)
   }
}

export default Chart

class LinearScales extends Component {
    render() {
        const xScale = scaleLinear()
            .domain(this.props.xDomain)
            .range([0, this.props.width])
        
        const yScale = scaleLinear()
            .domain(this.props.yDomain)
            .range([this.props.height, 0])
        
        const childrenWithScales = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { xScale, yScale });
        });

        return childrenWithScales
    }
}

const LinearChart = props => {
    return (
        <Chart>
            <LinearScales {...props} >
                {props.children}
            </LinearScales>
        </Chart>
    )
}

class OrdinalScales extends Component {
    render() {
        const xScale = scaleBand()
            .domain(this.props.xDomain)
            .rangeRound([0, this.props.width])
            .padding(0.5)

        const yScale = scaleLinear()
            .domain(this.props.yDomain)
            .range([this.props.height, 0])
        
        const childrenWithScales = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { xScale, yScale });
        });

        return childrenWithScales
    }
}

const OrdinalChart = props => {
    return (
        <Chart>
            <OrdinalScales {...props} >
                {props.children}
            </OrdinalScales>
        </Chart>
    )
}

export { LinearChart, LinearScales, OrdinalChart, OrdinalScales }