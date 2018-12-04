import React, { Component } from 'react'
import _ from 'lodash'
import { Bar } from '../../Charting/BarGraph'
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
        const scale = scaleBand()
            .domain(_.range(5))
            .rangeRound([this.props.xScale(this.props.data.name), this.props.xScale(this.props.data.name) + this.props.xScale.bandwidth()])
            .paddingInner(0.2)
            .paddingOuter(0.1)
        return <g onClick={() => this.select()}>
            <g style={{opacity: !this.state.selected ? 1 : 0}} className="bar animated">
                <Bar
                    style={{fill: '#fe9922'}}
                    x={this.props.xScale(this.props.data.name)}
                    y={this.props.yScale(this.props.data.result)}
                    height={this.props.yScale.range()[0] - this.props.yScale(this.props.data.result)}
                    width={this.props.xScale.bandwidth()}  />
                <AnimatedText 
                    x={this.props.xScale(this.props.data.name) + this.props.xScale.bandwidth() / 2} 
                    y={this.props.yScale(this.props.data.result) - 3}>
                    {this.props.data.result}
                </AnimatedText>
            </g>
            <g style={{opacity: this.state.selected ? 1 : 0}} className="animated">
                {this.props.data.details.map((d,i) => 
                <g className="bar" key={i}>
                    <Bar
                        style={{fill: colors(i)}}
                        x={scale(i)}
                        y={this.props.yScale(d.value)}
                        height={this.props.yScale.range()[0] - this.props.yScale(d.value)}
                        width={scale.bandwidth()} />
                    <AnimatedText 
                        x={scale(i) + scale.bandwidth() / 2} 
                        y={this.props.yScale(d.value) - 3}>
                        {d.value}
                    </AnimatedText>
                    <AnimatedText
                        x={scale(i) + scale.bandwidth() / 2} 
                        y={this.props.yScale.range()[0]}>
                        {d.label}
                    </AnimatedText>
                </g>)}
                <LineMarker value={this.props.data.mean} label="Durchschnitt" xScale={scale} yScale={this.props.yScale}></LineMarker>
                <LineMarker value={this.props.data.result} label="Dein Ergebnis" xScale={scale} yScale={this.props.yScale}></LineMarker>
            </g>
        </g>
    }
}

export default Station