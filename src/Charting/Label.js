import React, { Component } from 'react'
import { select } from 'd3-selection'

class Label extends Component {
    constructor(props) {
        super(props)
        this.ref = React.createRef()
        this.padding = {left:0, right: 0, top: 0, bottom: 0, ...this.props.padding }
    }
    
    componentDidMount() {
        const bbox = select(this.ref.current).node().getBBox()
        select(this.ref.current)
            .append("rect")
            .attr("x", bbox.x - this.padding.left)
            .attr("y", bbox.y - this.padding.top)
            .attr("width", bbox.width + this.padding.right + this.padding.left)
            .attr("height", bbox.height + this.padding.bottom + this.padding.top )
            .style("fill", this.props.color || 'black')
            .style("fill-opacity", ".5")
            .style("stroke", this.props.color || 'black')
            .style("stroke-width", "0");
    }

    render() {
        return (<g ref={this.ref}><text {...this.props}>{this.props.children}</text></g>)
    }
}

export default Label