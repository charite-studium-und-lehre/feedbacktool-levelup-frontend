
import React, {Component} from 'react';
import _ from 'lodash'

import { TimeChart } from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import { XAxis, YAxis } from '../Charting/Axis'

const createData = () => _.range(1,8).map(i => ({Semester: new Date(2018 - i, 6 + _.random(-1, 2), 15 + _.random(-10, 20)), tatig: _.random(0,6)}))

class PracticalsChart extends Component{
    constructor(props){
        super(props)
        this.state = { data : createData() }
    }

    render() {
        return (
            <div className="card p-3 h-100">
                <TimeChart yDomain={[0,6]} xDomain={[this.state.data[6].Semester, this.state.data[0].Semester]}>
                    <XAxis />
                    <YAxis ticks={{count: 3}} />
                    <LineGraph data={this.state.data.map(d => ({x: d.Semester, y: d.tatig}))} color="rgba(64,64,64,.3)"></LineGraph>
                </TimeChart>
            </div>
        )
    }
}

export default PracticalsChart















