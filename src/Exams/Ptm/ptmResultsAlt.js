import React from 'react'
import { OrdinalChart } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis'
import BarGraph from '../../Charting/BarGraph'
import PointGraph from '../../Charting/PointGraph'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'

const labels = ['richtig', 'falsch', 'nicht beantwortet']
const color = 'rgb(49, 130, 189)'
const PtmResultsAlt = props =>
    <div className="card">
        <div className="card-body">
            <Legend title={Legends.Strengths.PTMResults.title}>
                {Legends.Strengths.PTMResults.text}
            </Legend>
            <div className="p-2">
                <OrdinalChart xDomain={labels} yDomain={[0,100]}>
                    <XAxis />
                    <YAxis ticks={{count: 4}} />
                    <BarGraph labels data={labels.map((l,i) => ({x: l, y: props.results[i][0], label: props.results[i][1], color: color}))} />
                    <PointGraph color="rgba(0, 0, 0, .6)" data={labels.map((l, i) => ({x: l, y: props.means[i]}))} />
                </OrdinalChart>
            </div>
        </div>
    </div>

export default PtmResultsAlt