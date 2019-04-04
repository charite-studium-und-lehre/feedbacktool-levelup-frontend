import React, { Component } from 'react'
import { select } from 'd3-selection'
import { animationTime } from './Utils'

class AnimatedText extends Component {
    static defaultProps = {
        color: 'black',
        textAnchor: 'middle',
        className: '',
        transform: '',
        dominantBaseline: "baseline",
        style: {fontSize: '0.7rem'},
    }

    constructor(props) {
        super(props)
		this.node = React.createRef()
		this.state = { x: props.x, y: props.y }
    }

    componentDidUpdate() {
		select(this.node.current)
			.datum(this.props)
            .transition()
			.duration(animationTime)
			.attr('x', d => d.x)
			.attr('y', d => d.y)
    }

    render() {
        return (<text
            ref={this.node}
            x={this.state.x}
            y={this.state.y}
            textAnchor={this.props.textAnchor}
            fill={this.props.color}
            style={this.props.style}
            dominantBaseline={this.props.dominantBaseline}
            transform={`rotate(${this.props.vertical ? '-90' : '0'})`}
            className={`animated ${this.props.className}`}>
            {this.props.children}
        </text>)
    }
}

export default AnimatedText