import React, { Component } from 'react'
import { Bar } from '../../Charting/BarGraph'
import AnimatedText from '../../Charting/AnimatedText'
import { scaleBand } from 'd3-scale'

class Station extends Component {
    constructor(props) {
        super(props)
        this.state = { selected: false }
    }

    select() {
        this.setState({ selected: !this.state.selected })
        this.props.onClick(this.props.data)
    }

    deselect() {
        this.setState({ selected: false })
        this.props.onClick()
    }

    render() {
        const scale = scaleBand()
            .domain([1,2,3,4])
            .rangeRound([0, this.props.xScale.step() + this.props.xScale.paddingInner()])
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
                <Bar
                    style={{fill: '#000099'}}
                    x={scale(1)}
                    y={this.props.yScale(50)}
                    height={this.props.yScale.range()[0] - this.props.yScale(50)}
                    width={scale.bandwidth()} />
            </g>
        </g>
    }
}

export default Station