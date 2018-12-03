import React, { Component } from 'react'
import { scaleLinear, scaleBand, scaleTime } from 'd3-scale'
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
        }, 100)
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

const LinearScales = props => {
    const xScale = scaleLinear()
        .domain(props.xDomain || [])
        .range([0, props.width])
    
    const yScale = scaleLinear()
        .domain(props.yDomain || [])
        .range([props.height, 0])
    
    const childrenWithScales = React.Children.map(props.children, child => {
        return React.cloneElement(child, { xScale, yScale });
    });

    return childrenWithScales
}

const LinearChart = props => (
    <Chart>
        <LinearScales {...props} >
            {props.children}
        </LinearScales>
    </Chart>
)

const OrdinalScales = props => {
    const offset = props.offset ? (props.offset * props.width) : 0
    const scale = props.scale || 1
    const xScale = scaleBand()
        .domain(props.xDomain || [])
        .rangeRound([offset, offset + props.width * scale])
        .paddingInner(props.padding || 0.2)
        .paddingOuter(props.padding || 0.2)

    const yScale = scaleLinear()
        .domain(props.yDomain || [])
        .range([props.height, 0])
    
    const childrenWithScales = React.Children.map(props.children, child => {
        return React.cloneElement(child, { xScale, yScale });
    });

    return <g onClick={props.onClick}>{childrenWithScales}</g>
}

const OrdinalChart = props => (
    <Chart>
        <OrdinalScales {...props} >
            {props.children}
        </OrdinalScales>
    </Chart>
)

const TimeScales = props => {
    const xScale = scaleTime()
        .domain(props.xDomain || [])
        .range([0, props.width])
    
    const yScale = scaleLinear()
        .domain(props.yDomain || [])
        .range([props.height, 0])
    
    const childrenWithScales = React.Children.map(props.children, child => {
        return React.cloneElement(child, { xScale, yScale });
    });

    return childrenWithScales
}

const TimeChart = props => (
    <Chart>
        <TimeScales {...props} >
            {props.children}
        </TimeScales>
    </Chart>
)

export { LinearChart, LinearScales, OrdinalChart, OrdinalScales, TimeChart, TimeScales }