import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { select } from 'd3-selection'

class Chart extends Component {
    constructor(props){
        super(props)
        this.node = React.createRef()
        this.state = { size: null }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                size: {
                    width: this.node.current.width.baseVal.value,
                    height: this.node.current.height.baseVal.value,
                },
            })
        })
    }

    renderContent() {
        const { width, height } = this.state.size

        const xScale = scaleLinear()
            .domain(this.props.xDomain)
            .range([0, width])
        
        const yScale = scaleLinear()
            .domain(this.props.yDomain)
            .range([height, 0])
        
        select(this.node.current)
            .attr("viewBox", "0 0 " + width + " " + height )
            .attr("preserveAspectRatio", "none")

        const childrenWithScales = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { xScale: xScale, yScale: yScale });
        });
        return <g>{childrenWithScales}</g>
    }

    render() {
        const size = this.state.size;
        return (<svg ref={this.node} width="100%" height="100%">
            { size && this.renderContent() }
        </svg>)
   }
}
export default Chart