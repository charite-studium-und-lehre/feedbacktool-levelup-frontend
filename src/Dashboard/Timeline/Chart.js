import React from 'react'
import { asChart, TimeScales } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis'

const day= 1000 * 60 * 60 * 24
const year = day * 365

class Chart extends React.Component {
    componentDidMount() {
        const years = this.props.width * 3 / 650 + 8 / 13
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