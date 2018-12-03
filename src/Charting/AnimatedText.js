import React, { Component } from 'react'
import { select } from 'd3-selection'

class AnimatedText extends Component {
    constructor(props) {
        super(props)
		this.node = React.createRef()
		this.state = { x: props.x, y: props.y }
    }

    componentDidUpdate() {
		select(this.node.current)
			.datum(this.props)
            .transition()
			.duration(550)
			.attr('x', d => d.x)
			.attr('y', d => d.y)
    }

    render() {
        return (<text
            ref={this.node}
            x={this.state.x}
            y={this.state.y}
            textAnchor="middle"
            color={this.props.color}
            className="animated">
            {this.props.children}
        </text>)
    }
}

export default AnimatedText