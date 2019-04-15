import React from 'react'
import { connect } from 'react-redux'
import { TimeChart } from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import { XAxis, YAxis } from '../Charting/Axis'
import { selectors } from './Store'

const stateToProps = (state, ownProps) => ({ maxScore: selectors.getMaxScore(state, ownProps.entryId), done: selectors.getHistoricalScore(state, ownProps.entryId, 'done'), confident: selectors.getHistoricalScore(state, ownProps.entryId, 'confident') })

const ProgressChart = props =>
    <div className="card p-3 h-100">
        <TimeChart yDomain={[0,props.maxScore]} xDomain={[new Date(2012, 3, 1), new Date(2019, 1, 1)]}>
            <XAxis />
            <YAxis ticks={{count: 3}} />
            <LineGraph data={props.done.map(d => ({x: d.semester, y: d.level}))} color="rgba(255,0,0,.5)"></LineGraph>
            <LineGraph data={props.confident.map(d => ({x: d.semester, y: d.level}))} color="rgba(0,128,0,.5)"></LineGraph>
        </TimeChart>
    </div>

export default connect(stateToProps)(ProgressChart)















