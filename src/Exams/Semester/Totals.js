import React, { useState } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { curveStep } from 'd3-shape'
import { LinearChart } from '../../Charting/Chart'
import LineGraph from '../../Charting/LineGraph'
import AreaGraph from '../../Charting/AreaGraph'
import BarGraph from '../../Charting/BarGraph'
import Marker from '../../Charting/Marker'
import LineMarker from '../../Charting/LineMarker'
import Legend from '../../Charting/Legend'
import { XAxis, YAxis } from '../../Charting/Axis'
import { selectors, actions } from './Store'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'

const respSwitch = (large, small) => <span><span className="d-none d-md-inline-block">{large}</span><span className="d-inline-block d-md-none">{small}</span></span>
const Totals = props => {
    const [ mode, setMode ] = useState('histo')

    function percentileArea (from, to) {
        const toAreaData = _data => _data.map(d => ({x: d.x, y0: 0, y1: d.y}))
        return toAreaData([{x: from, y: props.dist.find(d => d.x <= from).y}]
        .concat(props.dist.filter(d => d.x < from && d.x > to), [{x: to, y: props.dist.find(d => d.x <= to).y}]))
    }
    
    const histo = _.map(_.groupBy(props.dist.map(d => d.y), d => Math.floor(d / 5)), (d, i) => ({x: +i*5, y: d.length, highlight: +i === Math.floor(props.resultMean / 5)}))
    const LegendText = Legends.Exams.Semester.Totals
    return (
        <div className="card p-4">
            <Legend title={LegendText.title}>{LegendText.text}</Legend>
            <div style={{textAlign: 'right'}}>
                <label className="m-0 mr-2"><input type="radio" name="totals.mode" checked={mode === 'graph'} onChange={() => setMode('graph')} className="mx-2" />Graph</label>
                <label><input type="radio" name="totals.mode" checked={mode === 'histo'} onChange={() => setMode('histo')} className="mx-2" />Histogramm</label>
            </div>
            <div className="mt-3">
                {mode === 'graph' ? (
                <LinearChart xDomain={[100, 0]} yDomain={[0,80]}>
                    <YAxis ticks={{ count: 4 }} label=" Erreichte Punkte"/>
                    <AreaGraph curve={curveStep} data={percentileArea(10, 0)} color="hsla(120, 100%, 80%, .2)"></AreaGraph>
                    <AreaGraph curve={curveStep} data={percentileArea(25, 10)} color="hsla(120, 100%, 60%, .2)"></AreaGraph>
                    <AreaGraph curve={curveStep} data={percentileArea(50, 25)} color="hsla(120, 100%, 40%, .2)"></AreaGraph>
                    <AreaGraph curve={curveStep} data={percentileArea(100, 50)} color="hsla(120, 100%, 20%, .2)"></AreaGraph>
                    <LineGraph data={props.dist} color="hsla(181, 100%, 41%, .9)" noPoints curve={curveStep} />
                    <Marker extended={true} x={props.resultPercent} y={props.resultMean} label='Du' color="hsla(0, 100%, 30%, .6)" />
                    <LineMarker value={props.distMean} label='Durchschnitt' color="hsla(0, 100%, 30%, .6)" />
                    <XAxis label="% der Studierenden" />
                </LinearChart>
                ) : (
                <div className="position-relative text-right">
                    <div className="position-absolute" style={{right:0, fontSize: '.75rem'}}>
                        <div><span className="font-weight-bold">{respSwitch('Dein Ergebnis', 'Du')}: </span>{props.resultMean} Pkte</div>
                        <div><span className="font-weight-bold">{respSwitch('Durchschnitt', '∅')}: </span>{props.distMean} Pkte</div>
                    </div>
                    <LinearChart xDomain={[Math.min(...histo.map(d => d.x)) - 5, Math.max(...histo.map(d => d.x)) + 5]} yDomain={[0,Math.max(...histo.map(d => d.y))]}>
                        <XAxis label="erreichte Punkte" />
                        <YAxis label="Anzahl Studierender" />
                        <BarGraph labels width={.75} data={histo} color="hsla(33, 100%, 20%, .5)" highlightColor="hsla(33, 100%, 20%, .8)" />
                    </LinearChart>
                </div>
                )}
            </div>
        </div>
    )
}

const stateToProps = (state, ownProps) => ( {...selectors.getById(state, ownProps.id)})
export default needsData(connect(stateToProps)(Totals), selectors.loaded, actions.load)