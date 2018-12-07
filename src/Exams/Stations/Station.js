import React, { Component } from 'react'
import BarGraph, { Bar } from '../../Charting/BarGraph'
import AnimatedText from '../../Charting/AnimatedText'
import { scaleBand, scaleOrdinal } from 'd3-scale'
import { schemeBlues } from 'd3-scale-chromatic'
import LineMarker from '../../Charting/LineMarker'

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
        const detailsXScale = scaleBand()
            .domain(this.props.data.details.map( d => d.label ))
            .rangeRound([this.props.yScale(this.props.data.name), this.props.yScale(this.props.data.name) + this.props.yScale.bandwidth()])
            .paddingInner(0.2)
            .paddingOuter(0.1)
        return <g onClick={() => this.select()}>
            <g style={{opacity: !this.state.selected ? 1 : 0}} className="bar animated">
                <Bar
                    style={{fill: '#fe9922'}}
                    x={0}
                    y={this.props.yScale(this.props.data.name)}
                    width={this.props.xScale(this.props.data.result)}
                    height={this.props.yScale.bandwidth()}  />
                <AnimatedText 
                    y={this.props.yScale(this.props.data.name) + this.props.yScale.bandwidth() / 2} 
                    x={this.props.xScale(this.props.data.result) + 3}
                    textAnchor="start"
                    dominantBaseline="central">
                    {this.props.data.result}
                </AnimatedText>
            </g>
            {/* <g style={{opacity: this.state.selected ? 1 : 0}} className="animated">
                <BarGraph labels xScale={detailsXScale} yScale={this.props.xScale} data={this.props.data.details.map((d, i) => ({x:d.label, y:d.value, color: colors(i)}))}/>
                <LineMarker value={this.props.data.mean} label="Durchschnitt" xScale={detailsXScale} yScale={this.props.yScale}></LineMarker>
                <LineMarker value={this.props.data.result} label="Dein Ergebnis" xScale={detailsXScale} yScale={this.props.yScale}></LineMarker>
            </g> */}
        </g>
    }
}

export default Station