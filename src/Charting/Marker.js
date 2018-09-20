import React, { Component } from 'react'
import Label from './Label'
import { line } from 'd3-shape'

class Marker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false
        }
    } 

    toggleSelected() {
        this.setState({ selected: !this.state.selected })
    }

    render() {
        return (
            <g className={`marker ${this.state.selected ? 'selected' : ''}`}>
                <circle 
                    className={`dot ${this.state.selected ? 'selected' : ''}`}
                    cx={this.props.xScale(this.props.x)} 
                    cy={this.props.yScale(this.props.y)} 
                    fill={this.props.color || 'black'}
                    r={this.props.size || "5"}
                    onClick={() => this.toggleSelected()}
                />
                <path d={line()([[this.props.xScale(this.props.x), this.props.yScale(this.props.y)],[this.props.xScale(this.props.x), this.props.yScale(this.props.yScale.domain()[0])]])} className="line" style={{stroke: this.props.color || "black"}} />
                <text alignmentBaseline="central" x={this.props.xScale(this.props.xScale.domain()[0]) - 2} y={this.props.yScale(this.props.y)} textAnchor="end">{this.props.y}</text>
                <path d={line()([[this.props.xScale(this.props.xScale.domain()[0]), this.props.yScale(this.props.y)],[this.props.xScale(this.props.x), this.props.yScale(this.props.y)]])} className="line" style={{stroke: this.props.color || "black"}} />
                <text alignmentBaseline="before-edge" x={this.props.xScale(this.props.x)} y={this.props.yScale(this.props.yScale.domain()[0])} textAnchor="middle">{this.props.x}</text>
                <Label onClick={() => this.toggleSelected()} x={this.props.xScale(this.props.x)} y={this.props.yScale(this.props.y) + (this.props.offset || -20)}>{this.props.label}</Label>
            </g>
        )
    }
}

export default Marker