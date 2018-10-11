import React, { Component } from 'react'
import _ from 'lodash'
import Chart, { OrdinalScales, LinearScales } from '../Charting/Chart'
import Legend from '../Charting/Legend'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'
import Subjects from './Subjects'

const n = _.sumBy(Subjects, cat => cat.subjects.length)
const offsets = Subjects.map((cat, i) => _.chain(Subjects).slice(0, i).sumBy( s => s.subjects.length ) / n )
const max = Math.max( ..._.flatMap(Subjects, cat => cat.subjects ).map( s => s.questions ))

class Summery extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <Legend title={this.props.graph}>Legende</Legend>
                    <div className="m-3" style={{paddingBottom: '12rem'}}>
                        <Chart>
                            <LinearScales yDomain={[0,max]}>
                                <YAxis />
                            </LinearScales>
                            {Subjects.map((cat, i) => (
                                <OrdinalScales key={i} offset={offsets[i]} scale={ cat.subjects.length / n } xDomain={cat.subjects.map( s => s.title )} yDomain={[0,max]}>
                                    <BarGraph labels data={cat.subjects.map( s => ({ x: s.title, y: s.questions }))} color={`hsla(${32 + i/n*360}, 100%, 56%, .4)`}/>
                                    <BarGraph labels data={cat.subjects.map( s => ({ x: s.title, y: s.questions - Math.floor(Math.random() * s.questions) }))} color={`hsla(${32 + i/n*360}, 100%, 56%, 1)`} />
                                    <XAxis rotateLabels label={ cat.title } />
                                </OrdinalScales>
                            ))}
                        </Chart>
                    </div>
                </div>
            </div>
        )
    }
}

export default Summery