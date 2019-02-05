import React, { Component } from 'react'
import _ from 'lodash'
import { radialArea } from 'd3-shape'
import { select } from 'd3-selection'
import { animationTime } from './Utils'
import AnimatedText from './AnimatedText'
const degtorad = d => Math.PI * 2 * d / 360
const hex = r => [[0,r],[degtorad(60),r],[degtorad(120),r],[degtorad(180),r],[degtorad(240),r],[degtorad(300),r], [degtorad(0),r]]

class AnimatedHex extends Component {
    static defaultProps = {
        color: 'rgba(0,0,0,.6)',
        className: '',
        onClick: () => {},
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
            .attr('transform', `translate(${this.props.x}, ${this.props.y})`)
    }

    render() {
        return (
        <g>
            <path 
                ref={this.node} 
                onClick={this.props.onClick}
                d={radialArea()(hex(this.state.r))} 
                className={`animated ${this.props.className}`}
                style={_.extend({fill: this.props.color}, this.props.style)} 
                transform={`translate(${this.state.x}, ${this.state.y})`} />
            {this.props.label && 
                <AnimatedText 
                    x={this.props.x} 
                    y={this.props.y} 
                    color="white" 
                    dominantBaseline="middle"
                    style={{fontSize: '.5rem'}}>
                    {this.props.label}
                </AnimatedText>
            }
        </g>)
    }
}

export default AnimatedHex