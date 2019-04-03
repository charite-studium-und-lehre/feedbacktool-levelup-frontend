import React, { Component } from 'react'
import { select } from 'd3-selection'
import { animationTime } from './Utils'

class AnimatedPoint extends Component {
    static defaultProps = {
        color: 'rgba(0,0,0,.6)',
        fill: 'rgba(0,0,0,.6)',
        className: '',
        r: 5,
        onClick: () => {},
    }

    constructor(props) {
        super(props)
		this.node = React.createRef()
		this.state = { cx: props.cx, cy: props.cy }
    }

    componentDidUpdate() {
		select(this.node.current)
			.datum({cx: this.props.cx, cy: this.props.cy })
            .transition()
			.duration(animationTime)
			.attr('cx', p => p.cx)
			.attr('cy', p => p.cy)
    }

    render() {
        return <circle 
            ref={this.node}
            r={this.props.r}
            style={{stroke: this.props.color, fill: this.props.fill}}
            cx={this.state.cx} 
            cy={this.state.cy} 
            className={`animated dot ${this.props.className}`} 
            onClick={() => this.props.onClick(this.props.x)} />
    }
}

export default AnimatedPoint