import React from 'react'
import { scaleLinear } from 'd3-scale'
import { asChart, TimeScales } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis'

const day= 1000 * 60 * 60 * 24
const year = day * 365

class Chart extends React.Component {
    componentDidMount() {
        const years = scaleLinear().domain([300,950]).range([2,5])(this.props.width)
        !this.props.oldest && this.props.initTimerange(new Date(Date.now() - year * years))
    }

    render() {
        return (
            <TimeScales {...this.props} xDomain={[this.props.oldest || new Date(Date.now() - year * this.props.width / 100), this.props.newest]} yDomain={[0,100]}>
                <YAxis label="% richtig" />
                <XAxis ticks={{count: this.props.width / 100}} />
                {this.props.children}
            </TimeScales>
        )
    }
}

export default asChart(Chart)