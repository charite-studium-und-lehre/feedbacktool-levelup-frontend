import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { select } from 'd3-selection'
import { axisBottom, axisLeft } from 'd3-axis'

class BaseChart extends Component {
    constructor(props){
        super(props)
        this.node = React.createRef()
        this.axis = {
            x: React.createRef(),
            y: React.createRef()
        }
        this.state = { size: null }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                size: {
                    width: this.node.current.width.baseVal.value,
                    height: this.node.current.height.baseVal.value,
                },
            });
        })
    }

    renderContent() {
        const { width, height } = this.state.size;

        const xScale = scaleLinear()
            .domain(this.props.xDomain)
            .range([0, width]);
        
        const yScale = scaleLinear()
            .domain(this.props.yDomain)
            .range([height, 0]);
        
        select(this.node.current)
            .attr("viewBox", "0 0 " + width + " " + height )
            .attr("preserveAspectRatio", "xMidYMid meet");
        
        const yAxis = axisLeft(yScale)
            .tickValues([(this.props.yDomain[1] - this.props.yDomain[0]) / 2, this.props.yDomain[1]])
            .ticks(2, ",.0f")
            .tickSize(-width);
        
        yAxis(select(this.axis.y.current));
        select(this.axis.x.current)
            .attr("transform", "translate(0," + height + ")")
            .call(axisBottom(xScale));

        const childrenWithSize = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { xScale, yScale });
        });
        return <g>{childrenWithSize}</g>
    }

    render() {
        const size = this.state.size;
        return (<svg ref={this.node} width="100%">
            <g ref={this.axis.y} className="y axis"></g>
            <g ref={this.axis.x} className="x axis"></g>
            { size && this.renderContent() }
        </svg>)
   }
}
export default BaseChart