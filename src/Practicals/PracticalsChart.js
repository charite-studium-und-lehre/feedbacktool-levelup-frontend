
import React, {Component} from 'react';
import _ from 'lodash'

import { OrdinalChart } from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import { XAxis, YAxis } from '../Charting/Axis'

const createData = () => _.range(1,8).map(i => ({Semester: `Semester${i}`, tatig: _.random(0,6)}))

class PracticalsChart extends Component{
    constructor(props){
        super(props)
        this.state = { data : [createData(), createData()] }
    }

    render(){
        let LineGraphs = this.state.data.filter((d,i) => this.props.graphs.indexOf(i) >= 0).map((d, i) => <LineGraph key={i} data={d.map(d => ({x: d.Semester, y: d.tatig}))} color="rgba(64,64,64,.3)"></LineGraph>)
        return (
            <div className="card p-3 h-100">
                <OrdinalChart yDomain={[0,6]} xDomain={this.state.data[0].map(s => s.Semester)}>
                    <XAxis />
                    <YAxis ticks={{count: 3}} />
                    {LineGraphs}
                </OrdinalChart>
            </div>
        )
    }
}

export default PracticalsChart















