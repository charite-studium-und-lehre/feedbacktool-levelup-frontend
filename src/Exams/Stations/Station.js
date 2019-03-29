import React, { Component } from 'react'
import { scaleBand, scaleOrdinal } from 'd3-scale'
import { schemeBlues } from 'd3-scale-chromatic'
import StationDetails from './StationDetails'
import AnimatedPoint from '../../Charting/AnimatedPoint'
import HorizontalBarGraph from '../../Charting/HorizontalBarGraph';

const colors = scaleOrdinal(schemeBlues[5])
class Station extends Component {
    constructor(props) {
        super(props)
        this.state = { selected: false }
    }

    select() {
        this.props.onClick(this.state.selected ? null : this.props.data)
        this.setState({ selected: !this.state.selected })
    }

    render() {
        const detailsYScale = scaleBand()
            .domain(this.props.data.details.map( d => d.label ))
            .rangeRound([this.props.yScale(this.props.data.name) + this.props.yScale.bandwidth(), this.props.yScale(this.props.data.name)])
            .paddingInner(0.2)
            .paddingOuter(0.1)
        return <g onClick={() => this.select()}>
            <g style={{opacity: !this.state.selected ? 1 : 0}} className="bar animated">
                <HorizontalBarGraph labels
                    color={this.props.color}
                    xScale={this.props.xScale} 
                    yScale={this.props.yScale} 
                    data={[{x: this.props.data.result, y: this.props.data.name}]} />
                <AnimatedPoint
                    cy={this.props.yScale(this.props.data.name) + this.props.yScale.bandwidth() / 2 + 1} 
                    cx={this.props.xScale(this.props.data.mean)} />
            </g>
            <StationDetails 
                style={{opacity: this.state.selected ? 1 : 0}}
                xScale={this.props.xScale} 
                yScale={detailsYScale} 
                data={this.props.data.details.map((d, i) => ({y:d.label, x:d.value, color: colors(i)}))} />
        </g>
    }
}

export default Station