import React, { Component } from 'react'
import { select } from 'd3-selection'

class Label extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
        this.padding = {left:4, right: 4, top: 4, bottom: 4, ...this.props.padding }
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
            .style("fill", this.props.color || 'black')
            .style("fill-opacity", ".5")
            .style("stroke", this.props.color || 'black')
            .style("stroke-width", "0");
    }

    render() {
        return (<g ref={this.ref}><text {...this.props} 
            fontFamily="sans-serif" 
            fontSize=".7rem"
            fill="white" 
            textAnchor="middle">{this.props.children}</text></g>)
    }
}

export default Label