import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import tinycolor from 'tinycolor2'
import { OrdinalChart } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis'
import BarGraph from '../../Charting/BarGraph'
import PointGraph from '../../Charting/PointGraph'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import { selectors, actions } from './Store'
import { color } from './Ptm'

export const labels = ['richtig', 'falsch', 'nicht beantwortet']

const stateToProps = (state, props) => ({ data: props.id ? selectors.getById(state, props.id) : selectors.getLatest(state) })
const Chart = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({ data }) => 
    <OrdinalChart xDomain={labels} yDomain={[0,Math.max(..._.flatten(data.results))+10]}>
        <XAxis />
        <YAxis label="Anzahl Fragen" ticks={{count: 4}} />
        <BarGraph labels data={labels.map((l,i) => ({x: l, y: data.results[i][0], label: data.results[i][1], color: tinycolor(color).setAlpha(.9).toString()}))} />
        <PointGraph color="rgba(0, 0, 0, .6)" data={labels.map((l, i) => ({x: l, y: data.means[i]}))} />
    </OrdinalChart>
)

const Results = props =>
    <div className="card">
        <div className="card-body">
            <Legend title={Legends.Strengths.PTMResults.title}>
                {Legends.Strengths.PTMResults.text}
            </Legend>
            <div className="p-2">
                <Chart {...props} />
            </div>
        </div>
    </div>

export default Results