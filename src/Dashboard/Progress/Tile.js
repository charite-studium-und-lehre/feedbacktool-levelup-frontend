import React,  { Component } from 'react'
import _ from 'lodash'
import { scaleBand } from 'd3-scale'
import AnimatedHex from '../../Charting/AnimatedHex'
import AnimatedText from '../../Charting/AnimatedText'

const getDone = entry => entry.isLeaf ? [entry.done] : _.flatMap(entry.entries, e => getDone(e))
const percentDone = t => _.mean(getDone(t))

class Tile extends Component {
    static defaultProps = {
        onClick: () => {},
    }

    constructor(props) {
        super(props)
        this.state = { selected: false }
    }

    select() {
        this.props.onClick()
        this.setState({ selected: !this.state.selected })
    }

    render() {
        const xScale = this.props.data.entries && scaleBand()
            .range([this.props.x - this.props.r * .8, this.props.x + this.props.r * .8])
            .domain(this.props.data.entries.map(e => e.label))
        const yScale = this.props.data.entries && scaleBand()
            .range([this.props.y - this.props.r / 2, this.props.y + this.props.r / 2])
            .domain(_.range(2))
        return <g className="animated" style={this.props.style} onClick={() => this.isLeaf || this.select()}>
            <AnimatedHex
                r={this.props.r} 
                x={this.props.x} 
                y={this.props.y}
                color={`rgba(0,${(1-percentDone(this.props.data))*200},0,${this.state.selected ? .1 : .6})`}
                label={this.props.data.label} />
            {this.props.data.entries && this.props.data.entries.map((e,i) =>
                <Tile
                    style={{opacity: this.state.selected ? 1 : 0}}
                    data={e}
                    r={xScale.bandwidth() / 2}
                    x={xScale(e.label) + xScale.bandwidth() / 2} 
                    y={yScale(i % 2) + yScale.bandwidth() / 2}
                />
            )}
        </g>
    }
}

export default Tile