import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import { curveStep } from 'd3-shape'
import { scaleLinear } from 'd3-scale'
import tinycolor from 'tinycolor2'
import { LinearChart, OrdinalChart } from '../../Charting/Chart'
import LineGraph from '../../Charting/LineGraph'
import AreaGraph from '../../Charting/AreaGraph'
import BarGraph from '../../Charting/BarGraph'
import Marker from '../../Charting/Marker'
import LineMarker from '../../Charting/LineMarker'
import Legend from '../../Charting/Legend'
import { XAxis, YAxis } from '../../Charting/Axis'
import { mobileWidth } from '../../Charting/Utils'
import { selectors, actions } from './Store'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import AnimatedInteger from '../../Charting/AnimatedInteger'

const respSwitch = (large, small) => <span><span className="d-none d-md-inline-block">{large}</span><span className="d-inline-block d-md-none">{small}</span></span>
const Totals = ({ t, dist, ...props }) => {
    const [ mode, setMode ] = useState('histo')

    const scale = scaleLinear().domain([0,dist.length-1]).range([100,0])
    
    const percent = _.round(scale(dist.filter(d => d < props.result).length))

    const histo = _.flow(
        _.groupBy(d => Math.floor(d / 5)),
        _.map(d => ({x: Math.floor(d[0] / 5) * 5, y: d.length, highlight: 0 === Math.floor(props.resultMean / 5), label: <AnimatedInteger value={d.length} />}))
    )(dist)

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

    const domain = window.innerWidth <= mobileWidth ? histo.map(d => d.x) : _.range(0,20).map(d => d*5)
    const LegendText = Legends.Exams.Semester.Totals
    return (
        <div className="card p-4">
            <Legend title={LegendText.title}>{LegendText.text}</Legend>
            <div style={{textAlign: 'right'}}>
                <label className="m-0 mr-2"><input type="radio" name="totals.mode" checked={mode === 'graph'} onChange={() => setMode('graph')} className="mx-2" />{t('Graph')}</label>
                <label><input type="radio" name="totals.mode" checked={mode === 'histo'} onChange={() => setMode('histo')} className="mx-2" />{t('Histogramm')}</label>
            </div>
            <div className="mt-3">
                {mode === 'graph' ? (
                <LinearChart xDomain={[100, 0]} yDomain={[0,80]}>
                    <YAxis ticks={{ count: 4 }} label={t('Erreichte Punkte')} />
                    <PercentileArea data={dist.map( (d,i) => ({ x: scale(i), y0: 0, y1: d }))} percentiles={[[100, 50], [50,25], [25, 10], [10, 0]]} />
                    <LineGraph data={dist.map( (d,i) => ({ x: scale(i), y: d }))} color="hsla(181, 100%, 41%, .9)" noPoints curve={curveStep} />
                    <Marker extended={true} x={percent} y={props.result} label='Du' color="hsla(0, 100%, 30%, .6)" />
                    <LineMarker value={props.mean} label={t('Durchschnitt')} color="hsla(0, 100%, 30%, .6)" />
                    <LineMarker value={props.bestandenAb} label={t('Bestehensgrenze')} color="hsla(0, 100%, 30%, .6)" />
                    <XAxis label="% der Studierenden" />
                </LinearChart>
                ) : (
                <div className="position-relative text-right">
                    <div className="position-absolute" style={{right:0, fontSize: '.75rem'}}>
                        <div><span className="font-weight-bold">{respSwitch(t('Dein Ergebnis'), t('Du'))}: </span>{props.result} {t('Pkte')}</div>
                        <div><span className="font-weight-bold">{respSwitch(t('Durchschnitt'), '∅')}: </span>{props.mean} {t('Pkte')}</div>
                        <div><span className="font-weight-bold">{respSwitch(t('Bestanden ab'), t('Bst ab'))}: </span>{props.bestandenAb} {t('Pkte')}</div>
                    </div>
                    <OrdinalChart xDomain={domain} yDomain={[0,Math.max(...histo.map(d => d.y))]}>
                        <XAxis label={t('erreichte Punkte')} />
                        <YAxis label={t('Anzahl Studierender')} />
                        <BarGraph labels width={.75} data={histo} color="hsla(33, 100%, 20%, .5)" highlightColor="hsla(33, 100%, 20%, .8)" />
                    </OrdinalChart>
                </div>
                )}
            </div>
        </div>
    )
}

const stateToProps = (state, ownProps) => ( {...selectors.getById(state, ownProps.id)})
export default _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps), withTranslation())(Totals)