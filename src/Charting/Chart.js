import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { select } from 'd3-selection'
import { axisBottom, axisLeft } from 'd3-axis'

class Chart extends Component {
    constructor(props){
        super(props)
        this.node = React.createRef()
        this.axis = {
            x: React.createRef(),
            y: React.createRef()
        }
        this.state = { size: null }
        this.ticks = {x: null, y: 2, ...this.props.ticks}
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

        const xScale = scaleLinear()
            .domain(this.props.xDomain)
            .range([0, width])
        
        const yScale = scaleLinear()
            .domain(this.props.yDomain)
            .range([height, 0])
        
        select(this.node.current)
            .attr("viewBox", "0 0 " + width + " " + height )
            .attr("preserveAspectRatio", "none")
        
        const yAxis = axisLeft(yScale)
            .ticks(this.ticks.y || 2, "f")
            .tickSize(this.props.horizontal ? 0 : -width)
            .tickFormat( this.ticks.yFormat )

        const xAxis = axisBottom(xScale)
            .ticks(this.ticks.x)
            .tickSize(!this.props.horizontal ? 0 : -height)
            .tickFormat( this.ticks.xFormat )

        this.props.noAxis || yAxis(select(this.axis.y.current));
        this.props.noAxis || select(this.axis.x.current)
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        const childrenWithScales = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { xScale, yScale });
        });
        return <g>{childrenWithScales}</g>
    }

    render() {
        const size = this.state.size;
        return (<svg ref={this.node} width="100%" height="100%" className={this.props.horizontal ? 'horizontal' : ''}>
            <g ref={this.axis.x} className="x axis"></g>
            <g ref={this.axis.y} className="y axis"></g>
            { size && this.renderContent() }
        </svg>)
   }
}
export default Chart