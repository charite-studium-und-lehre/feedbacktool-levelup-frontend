import React, { Component } from 'react'
import { select } from 'd3-selection'
import { animationTime } from './Utils'

class AnimatedRect extends Component {
    static defaultProps = {
        color: 'rgba(0,0,0,.6)',
        strokeDasharray: '0',
        strokeWidth: 1,
        style: {},
        className: '',
        r: 0,
        onClick: () => {},
    }

    constructor(props) {
        super(props)
		this.node = React.createRef()
		this.state = { x: props.x, y: props.y, height: props.height, width: props.width }
    }

    componentDidUpdate() {
		select(this.node.current)
			.datum({ x: this.props.x, y: this.props.y, height: this.props.height, width: this.props.width })
            .transition()
			.duration(animationTime)
			.attr('x', p => p.x)
			.attr('y', p => p.y)
			.attr('width', p => p.width)
			.attr('height', p => p.height)
    }

    render() {
        return <rect 
            ref={this.node}
            rx={this.props.r}
            ry={this.props.r}
            stroke={this.props.color}
            fill={'transparent'}
            strokeDasharray={this.props.strokeDasharray}
            strokeWidth={this.props.strokeWidth}
            style={this.props.style}
            x={this.state.x} 
            y={this.state.y} 
            height={this.state.height} 
            width={this.state.width} 
            className={`animated rect ${this.props.className}`}
            onClick={() => this.props.onClick(this.props.x)} />
    }
}

export default AnimatedRect