import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import { OrdinalChart } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis'
import BarGraph from '../../Charting/BarGraph'
import PointGraph from '../../Charting/PointGraph'
import Legend from '../../Charting/Legend'
import AnimatedInteger from '../../Charting/AnimatedInteger'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import SimpleDot from '../../Charting/SimpleDot'
import { selectors, actions } from './Store'
import { color } from './Ptm'

export const labels = ['richtig', 'falsch', 'nicht beantwortet']

const stateToProps = (state, props) => ({ data: props.id ? selectors.getById(state, props.id) : selectors.getLatest(state) })
const Chart = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({ data }) => 
    <OrdinalChart xDomain={labels} yDomain={[0,Math.max(..._.flatten(data.results))+10]}>
        <XAxis />
        <YAxis label="Anzahl Fragen" ticks={{count: 4}} />
        <BarGraph labels data={
            labels.map((l,i) => ({
                x: l, y: data.results[i],
                label: <AnimatedInteger value={data.results[i]} />,
                color: color}))} />
        <PointGraph color="rgba(0, 0, 0, .6)" data={labels.map((l, i) => ({x: l, y: data.means[i], id: i+1}))} />
    </OrdinalChart>
)

const Results = props =>
    <div className="card">
        <div className="card-body">
            <Legend title={Legends.Strengths.PTMResults.title}>
                {Legends.Strengths.PTMResults.text}
            <div className="position-relative">
                    Der <SimpleDot style={{ position: 'relative', display: 'inline-block', marginLeft: '.75rem' }} size={.7} value={0} /> kennzeichnet den Kohortenmittelwert
            </div>
            </Legend>
            <div className="mt-3 p-2">
                <Chart {...props} />
            </div>
        </div>
    </div>

export default Results