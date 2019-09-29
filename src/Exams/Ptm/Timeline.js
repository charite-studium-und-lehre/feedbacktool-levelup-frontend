import React from 'react'
import { connect } from 'react-redux'
import tinycolor from 'tinycolor2'
import _ from 'lodash/fp'
import needsData from '../../Core/needsData'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'
import { OrdinalChart } from '../../Charting/Chart'
import LineGraph from '../../Charting/LineGraph'
import { XAxis, YAxis } from '../../Charting/Axis'
import { color } from './Ptm'
import { selectors, actions } from './Store'

const stateToProps = state => ({ ptms: selectors.getTimeline(state) })
const Chart = _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps))(({ ptms = [] }) => <div>
    <OrdinalChart xDomain={ptms.map( p => p.timesemester )} yDomain={[0,100]}>
        <XAxis />
        <YAxis />
        <LineGraph labels color={tinycolor(color).setAlpha(.23).toString()} data={ptms.map( d => ({ x: d.timesemester, y: d.result }))} />
    </OrdinalChart>
</div>)

const Timeline = props =>
    <div className="card">
        <div className="card-body">
            <Legend title={Legends.Exams.Ptm.Timeline.title}>
                {Legends.Exams.Ptm.Timeline.text}
            </Legend>
            <div className="p-2">
                <Chart {...props} />
            </div>
        </div>
    </div>

export default Timeline