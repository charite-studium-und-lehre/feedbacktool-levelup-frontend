import React from 'react'
import { connect } from 'react-redux'
import { OrdinalChart } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis'
import BarGraph from '../../Charting/BarGraph'
import PointGraph from '../../Charting/PointGraph'
import Legend from '../../Charting/Legend'
import AnimatedInteger from '../../Charting/AnimatedInteger'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import { selectors, actions } from './Store'
import { InlineKohortenMittelDot } from "../../Charting/KohortenMittelDot"
import AnimatedDiamond from "../../Charting/AnimatedDiamond"
import colors from '../../colors'
import {compose} from '../../Utils/utils'

export const labels = ['richtig', 'falsch', 'nicht beantwortet']
export const labelsAndColors = [
    {label: labels[0], color: 'var(--color-graphs-correct)'},
    {label: labels[1], color: 'var(--color-graphs-wrong)'},
    {label: labels[2], color: 'var(--color-graphs-missing-answer)'}
]

const stateToProps = (state, props) => ({ data: props.id ? selectors.getById(state, props.id) : selectors.getLatest(state) })
const Chart = compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])(({ data }) =>
    <OrdinalChart xDomain={labels} yDomain={[0,Math.max(...data.results, ...data.means)+10]}>
        <XAxis />
        <YAxis label="Anzahl Fragen" ticks={{count: 4}} />
        <BarGraph labels data={
            labelsAndColors.map((l,i) => ({
                x: l.label, y: data.results[i],
                label: <AnimatedInteger value={data.results[i]} />,
                color: l.color}))} />
        <PointGraph
            MarkerComponent={AnimatedDiamond}
            color={colors.textBlack}
            offset={.85}
            size={15}
            data={labels.map((l, i) => ({x: l, y: data.means[i], id: i+1}))}
        />
    </OrdinalChart>
)

const Results = props =>
    <div className="card">
        <div className="card-body">
            <Legend title={Legends.Strengths.PTMResults.title}>
                <p>{Legends.Strengths.PTMResults.text}</p>
            <div className="position-relative">
                    Der <InlineKohortenMittelDot /> kennzeichnet den Kohortenmittelwert.
            </div>
            </Legend>
            <div className="mt-3 p-2">
                <Chart {...props} />
            </div>
        </div>
    </div>

export default Results
