import React, { Component } from 'react'
import { axisBottom, axisLeft } from 'd3-axis'
import { select } from 'd3-selection'
import { animationTime } from './Utils'

class Axis extends Component {
    count = null

    constructor(props) {
        super(props)
        this.node = React.createRef()
    }
    
    drawAxis( transition = true ) {
        const ticks = { count: this.count , ...this.props.ticks }
        const axis = this.createAxis()
            .ticks( ticks.count )
            .tickFormat( ticks.format )
        
        const el = select(this.node.current)
            .transition()
            .duration(transition ? animationTime : 0)
            .call(axis)
        
        // el.selectAll("text").attr("text-anchor", "start")
        this.props.rotateLabels && el.selectAll("text")	
            .style("text-anchor", "start")
            .attr("dx", ".8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(90)")
    }

    componentDidMount() {
        this.drawAxis(false)
    }

    componentDidUpdate() {
        this.drawAxis()
    }
}

class XAxis extends Axis {
    createAxis() {
        return axisBottom( this.props.xScale )
            .tickSize(!this.props.horizontal ? 0 : -this.props.yScale.range()[0])
    }

    render() {
        return (
            <g transform={`translate(0,${this.props.yScale.range()[0]})`}>
                <g ref={this.node} className={`x axis ${this.props.horizontal ? 'horizontal' : ''}`} />
                <text 
                    className="label" 
                    dy="-2"
                    x={this.props.xScale.range()[1]}
                    fontSize=".7rem" fill="rgba(1,1,1,.4)"
                    style={{textAnchor: "end"}}>
                    {this.props.label}
                </text>
            </g>
        )
    }
}

class YAxis extends Axis {
    count = 2

    createAxis() {
        return axisLeft(this.props.yScale)
            .tickSize(this.props.horizontal ? 0 : -this.props.xScale.range()[1])
    }
    
    render() {
        return (
            <g>
                <text 
                    transform="rotate(-90)"
                    y={6}
                    dy=".71rem"
                    fontSize=".7rem"
                    fill="rgba(1,1,1,.4)"
                    style={{textAnchor: "end"}}>
                    {this.props.label}
                </text>
                <g ref={this.node} className={`y axis ${this.props.horizontal ? 'horizontal' : ''}`} />
            </g>
        )
    }
}

export { XAxis, YAxis }