import React, { Component } from 'react'
import { line } from 'd3-shape'
import { select } from 'd3-selection'
import { animationTime } from './Utils'

class AnimatedPath extends Component {
    static defaultProps = {
        stroke: 'rgba(0,0,0,.6)',
        style: {},
        fill: 'none',
        className: '',
        animationTime: animationTime,
        shape: line(),
    }

    constructor(props) {
        super(props)
		this.node = React.createRef()
		this.state = { d: props.d }
    }

    componentDidUpdate() {
		select(this.node.current)
			.datum(this.props.d)
            .transition()
			.duration(this.props.animationTime)
			.attr('d', this.props.shape)
    }

    render() {
        return <path 
            ref={this.node} 
            d={this.props.shape(this.state.d)} 
            className={`animated ${this.props.className}`}
            style={this.props.style} 
            fill={this.props.fill}
            stroke={this.props.stroke} />
    }
}

export default AnimatedPath