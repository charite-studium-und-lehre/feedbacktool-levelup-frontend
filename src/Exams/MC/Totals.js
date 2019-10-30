import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import { curveStep } from 'd3-shape'
import tinycolor from 'tinycolor2'
import { LinearChart, OrdinalChart } from '../../Charting/Chart'
import LineGraph from '../../Charting/LineGraph'
import AreaGraph from '../../Charting/AreaGraph'
import BarGraph from '../../Charting/BarGraph'
import LineMarker from '../../Charting/LineMarker'
import Legend from '../../Charting/Legend'
import { XAxis, YAxis } from '../../Charting/Axis'
import { mobileWidth } from '../../Charting/Utils'
import { selectors, actions } from './Store'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import AnimatedInteger from '../../Charting/AnimatedInteger'
import PointGraph from '../../Charting/PointGraph'

const respSwitch = (large, small) => <span><span className="d-none d-md-inline-block">{large}</span><span className="d-inline-block d-md-none">{small}</span></span>
const PercentileArea = ({ percentiles, ...props }) => {
    const id = 'areagraph'
    const color = tinycolor('hsla(120, 100%, 10%, .2)')
    const colors = _.range(0, percentiles.length).map( i => color.lighten(20).toString() )
    return <g>
        <clipPath id={id}>
            <AreaGraph {...props} curve={curveStep} ></AreaGraph>
        </clipPath>
        {percentiles.map( (p, i) => <rect key={i} x={props.xScale(p[0])} width={props.xScale(p[1]) - props.xScale(p[0])} height='100%' fill={colors[i]} clipPath={`url(#${id})`} /> )}
    </g>
}
const Totals = ({ t, ergebnisPunktzahl, durchschnittsPunktzahl, bestehensgrenzePunktzahl, kohortenPunktzahlen, maximalPunktzahl, percent, histogram, graphData }) => {
    const [ mode, setMode ] = useState('histo')

    const domain = window.innerWidth <= mobileWidth ? histogram.map(d => d.x) : _.range(0,Math.ceil(maximalPunktzahl / 5)).map(d => d*5)
    const LegendText = Legends.Exams.MC.Totals
    return (
        <div className="card p-4">
            <Legend title={LegendText.title}>{LegendText.text}</Legend>
            <div style={{textAlign: 'right'}}>
                <label className="m-0 mr-2"><input type="radio" name="totals.mode" checked={mode === 'graph'} onChange={() => setMode('graph')} className="mx-2" />{t('Graph')}</label>
                <label><input type="radio" name="totals.mode" checked={mode === 'histo'} onChange={() => setMode('histo')} className="mx-2" />{t('Histogramm')}</label>
            </div>
            <div className="mt-3">
                {mode === 'graph' ? (
                <div className="m-auto" style={{maxWidth: '40rem'}}>
                    <LinearChart xDomain={[100, 0]} yDomain={[Math.min(...kohortenPunktzahlen),maximalPunktzahl+3]}>
                        <YAxis ticks={{ count: 4 }} label={t('Erreichte Punkte')} />
                        <PercentileArea data={graphData.map( d => ({ x: d.x, y0: 0, y1: d.y }))} percentiles={[[100, 50], [50,25], [25, 10], [10, 0]]} />
                        <LineGraph data={graphData} color="hsla(181, 100%, 41%, .9)" noPoints curve={curveStep} />
                        <PointGraph labels data={[{id: 1, x: percent, y: ergebnisPunktzahl, label: 'Du' }]} color="hsla(0, 100%, 30%, .6)" />
                        <LineMarker value={Math.round(durchschnittsPunktzahl)} label={t('Durchschnitt')} color="hsla(0, 100%, 30%, .6)" />
                        <LineMarker value={bestehensgrenzePunktzahl} label={t('Bestehensgrenze')} color="hsla(0, 100%, 30%, .6)" />
                        <XAxis label="% der Studierenden" />
                    </LinearChart>
                </div>
                ) : (
                <div className="position-relative">
                    <div className="position-absolute" style={{top: '1rem', left:'1rem', fontSize: '.75rem'}}>
                        <div><span className="font-weight-bold">{respSwitch(t('Dein Ergebnis'), t('Du'))}: </span>{ergebnisPunktzahl} {t('Pkte')}</div>
                        <div><span className="font-weight-bold">{respSwitch(t('Durchschnitt'), '∅')}: </span>{Math.round(durchschnittsPunktzahl)} {t('Pkte')}</div>
                        <div><span className="font-weight-bold">{respSwitch(t('Bestanden ab'), t('Bst ab'))}: </span>{bestehensgrenzePunktzahl} {t('Pkte')}</div>
                        <div><span className="font-weight-bold">{respSwitch(t('Erreichbar'), t('max'))}: </span>{maximalPunktzahl} {t('Pkte')}</div>
                    </div>
                    <OrdinalChart xDomain={domain} yDomain={[0,Math.max(...histogram.map(d => d.y))]}>
                        <XAxis label={t('erreichte Punkte')} />
                        <YAxis label={t('Anzahl Studierender')} />
                        <BarGraph labels width={.75} data={histogram.map( d => ({ ...d, label: <AnimatedInteger value={d.y} />}))} color="hsla(33, 100%, 20%, .5)" highlightColor="hsla(33, 100%, 20%, .8)" />
                    </OrdinalChart>
                </div>
                )}
            </div>
        </div>
    )
}

const stateToProps = (state, ownProps) => ( {
    ...selectors.getTotalsData(state, ownProps.id),
})
export default _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps), withTranslation())(Totals)