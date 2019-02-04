import React, { Component } from 'react'
import { radialArea } from 'd3-shape'
import { select } from 'd3-selection'
import { animationTime } from './Utils'
const degtorad = d => Math.PI * 2 * d / 360
const hex = r => [[0,r],[degtorad(60),r],[degtorad(120),r],[degtorad(180),r],[degtorad(240),r],[degtorad(300),r], [degtorad(0),r]]

class AnimatedHex extends Component {
    static defaultProps = {
        color: 'rgba(0,0,0,.6)',
        className: '',
    }

    constructor(props) {
        super(props)
		this.node = React.createRef()
		this.state = { r: props.r, x: props.x, y: props.y }
    }

    componentDidUpdate() {
		select(this.node.current)
			.datum(hex(this.props.r))
            .transition()
			.duration(animationTime)
            .attr('d', radialArea())
            .attr('tansform', `translate(${this.props.x}, ${this.props.y})`)
    }

    render() {
        return <path 
            ref={this.node} 
            d={radialArea()(hex(this.state.r))} 
            className={`animated ${this.props.className}`}
            style={{fill: this.props.color}} 
            transform={`translate(${this.state.x}, ${this.state.y})`} />
    }
}

export default AnimatedHex