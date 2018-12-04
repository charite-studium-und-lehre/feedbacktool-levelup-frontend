import React, { Component } from 'react'
import { line } from 'd3-shape'
import { select } from 'd3-selection'
import { animationTime } from './Utils'

class AnimatedLine extends Component {
    static defaultProps = {
        color: 'rgba(0,0,0,.6)',
        className: '',
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
			.duration(animationTime)
			.attr('d', line())
    }

    render() {
        return <path 
            ref={this.node} 
            d={line()(this.state.d)} 
            className={`animated ${this.props.className}`}
            style={{stroke: this.props.color}} />
    }
}

export default AnimatedLine