import React from 'react'
import _ from 'lodash'
import { scaleOrdinal } from 'd3-scale'
import { schemeBlues } from 'd3-scale-chromatic'
import { OrdinalChart } from '../Charting/Chart'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'
import PointGraph from '../Charting/PointGraph'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'

const labels = ['richtig', 'falsch', 'nicht beantwortet']
const confidence = ['geraten', 'wahrscheinlich', 'sicher']

const colors = scaleOrdinal(schemeBlues[3])

const PTMResults = ({ data }) =>
    <div className="card">
        <div className="card-body">
            <Legend title={Legends.Strengths.PTMResults.title}>
                <p>{Legends.Strengths.PTMResults.text}</p>
                <div className="mt-2">{confidence.map((c, i) => 
                    <span key={i} className="d-inline-block mr-2" style={{height: '1.2rem', lineHeight: '1.2rem'}}>
                        <span className="d-inline-block mr-1" style={{width: '2rem', height: '100%', backgroundColor: colors(i)}}>&nbsp;</span>
                        {c}
                    </span>)}
                    <span className="d-inline-block mr-2" style={{height: '1.2rem', lineHeight: '1.2rem'}}>
                        <span className="d-inline-block mr-1" style={{borderRadius: '.6rem', width: '.6rem', height: '.6rem', backgroundColor: 'rgba(0,0,0,.6)'}}></span>
                        {t(`Durchschnitt in der Kohorte`)}
                    </span>
                </div>
            </Legend>
            <div className="p-2">
                <OrdinalChart xDomain={labels} yDomain={[0,100]}>
                    <XAxis />
                    <YAxis ticks={{count: 4}} />
                    <BarGraph labels data={labels.map((l,i) => ({x: l, y: data.results[i][0], label: data.results[i][1], color: _.range(0,3).map(i => colors(i))}))} />
                    <PointGraph color="rgba(0, 0, 0, .6)" data={labels.map((l, i) => ({x: l, y: data.means[i], id: i+1}))} />
                </OrdinalChart>
            </div>
        </div>
    </div>

export default PTMResults