import React, { Component } from 'react'
import { select } from 'd3-selection'
import AnimatedText from './AnimatedText'
import { animationTime } from './Utils'
import COLORS from '../colors'

class Label extends Component {
    static defaultProps = {
        onClick: () => {},
        color: 'white',
        bgcolor: COLORS.default,
        textAnchor: "middle",
    }

    constructor(props) {
        super(props)
        this.ref = React.createRef()
        this.padding = {left:4, right: 4, top: 4, bottom: 4, ...this.props.padding }
        this.state = { x: props.x, y: props.y }
    }
    
    componentDidMount() {
        const bbox = select(this.ref.current).node().getBBox()
        select(this.ref.current)
            .insert("rect", ":first-child")
            .attr("x", bbox.x - this.padding.left)
            .attr("y", bbox.y - this.padding.top)
            .attr("rx", 3)
            .attr("ry", 3)
            .attr("width", bbox.width + this.padding.right + this.padding.left)
            .attr("height", bbox.height + this.padding.bottom + this.padding.top )
            .style("fill", this.props.bgcolor)
            .style("fill-opacity", ".5")
            .style("stroke", this.props.bgcolor)
            .style("stroke-width", "0")
    }

    componentDidUpdate() {
        select(this.ref.current)
            .transition()
            .duration(animationTime)
            .attr("transform", `translate(${this.props.x}, ${this.props.y})`)
    }

    render() {
        const { x, y, ...otherProps } = this.props
        return (
        <g ref={this.ref} onClick={this.props.onClick} transform={`translate(${this.state.x}, ${this.state.y})`}>
            <g>
                <AnimatedText {...otherProps}
                color={this.props.color}
                textAnchor={this.props.textAnchor}>{this.props.children}</AnimatedText>
            </g>
        </g>)
    }
}

export default Label