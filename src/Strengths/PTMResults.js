import React from 'react'
import _ from 'lodash'
import { scaleOrdinal } from 'd3-scale'
import { schemeGreens } from 'd3-scale-chromatic'
import { OrdinalChart } from '../Charting/Chart'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'
import PointGraph from '../Charting/PointGraph'
import Legend from '../Charting/Legend'
import LegendTexts from '../Core/LegendTexts'
const LegendText = LegendTexts.Strengths

const colors = scaleOrdinal(schemeGreens[3])
const labels = ['richtig', 'falsch', 'nicht beantwortet']
const confidence = ['sicher', 'wahrscheinlich', 'geraten']

const results = [
    _.sampleSize(_.range(10, 100), 3).sort(),
    _.sampleSize(_.range(10, 100), 3).sort(),
    [_.random(100)]
]
const data = [
    _.range(2).map((d, i) => ({x: labels[i], result: results[i][2], color: colors(2)})),
    _.range(2).map((d, i) => ({x: labels[i], result: results[i][1], color: colors(1)})),
    _.range(3).map((d, i) => ({x: labels[i], result: results[i][0], color: colors(0)})),
]

const PTMResults = props => (
    <div className="card">
        <div className="card-body">
            <Legend title={LegendText.PTMResults.title}>{LegendText.PTMResults.text}
                <div className="mt-2">{confidence.map((c, i) => 
                    <span className="d-inline-block mr-2" style={{height: '1.2rem', lineHeight: '1.2rem'}}>
                        <span className="d-inline-block mr-1" style={{width: '2rem', height: '100%', backgroundColor: colors(i)}}>&nbsp;</span>
                        {c}
                    </span>)}
                    <span className="d-inline-block mr-2" style={{height: '1.2rem', lineHeight: '1.2rem'}}>
                        <span className="d-inline-block mr-1" style={{borderRadius: '.6rem', width: '.6rem', height: '.6rem', backgroundColor: 'rgba(0,0,0,.6)'}}></span>
                        Durchschnitt in der Kohorte
                    </span>
                </div>
            </Legend>
            <div className="p-2">
                <OrdinalChart xDomain={labels} yDomain={[0,100]}>
                    <XAxis />
                    <YAxis />
                    {data.map(d => <BarGraph labels data={d.map(s => ({...s, y: s.result}))} />)}
                    <PointGraph color="rgba(0, 0, 0, .6)" data={labels.map(l => ({x: l, y: _.random(30, 85)}))} />
                </OrdinalChart>
            </div>
        </div>
    </div>
)

export default PTMResults