
import React from 'react'
import _ from 'lodash'

import { TimeChart } from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import { XAxis, YAxis } from '../Charting/Axis'

const createData = () => _.range(1,8).map(() => _.random(0,6)).sort().map((d, i) => ({Semester: new Date(2012 + i, 6 + _.random(-1, 2), 15 + _.random(-10, 20)), tatig: d}))

const ProgressChart = props =>
    <div className="card p-3 h-100">
        <TimeChart yDomain={[0,6]} xDomain={[new Date(2012, 3, 1), new Date(2019, 1, 1)]}>
            <XAxis />
            <YAxis ticks={{count: 3}} />
            <LineGraph data={createData().map(d => ({x: d.Semester, y: d.tatig}))} color="rgba(255,0,0,.5)"></LineGraph>
            <LineGraph data={createData().map(d => ({x: d.Semester, y: d.tatig}))} color="rgba(0,128,0,.5)"></LineGraph>
        </TimeChart>
    </div>

export default ProgressChart















