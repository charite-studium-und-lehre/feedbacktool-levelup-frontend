import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
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
import { TotalsData as Data } from './Data'
import Legends from '../../Core/LegendTexts'

const respSwitch = (large, small) => <span><span className="d-none d-md-inline-block">{large}</span><span className="d-inline-block d-md-none">{small}</span></span>
const Totals = withTranslation() (class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'graph',
        }
        this.histo = _.map(_.groupBy(this.props.dist.map(d => d.y), d => Math.floor(d / 5)), (d, i) => ({x: +i*5, y: d.length, highlight: +i === Math.floor(this.props.resultMean / 5)}))
    }
    
    setMode(mode) {
        this.setState({ mode })
    }
    
    percentileArea(from, to) {
        const toAreaData = _data => _data.map(d => ({x: d.x, y0: 0, y1: d.y}))
        
        return toAreaData([{x: from, y: this.props.dist.find(d => d.x <= from).y}]
        .concat(this.props.dist.filter(d => d.x < from && d.x > to), [{x: to, y: this.props.dist.find(d => d.x <= to).y}]))
    }
    
    render () {
        const LegendText = Legends(this.props.t).Exams.Semester.Totals
        return (
            <div className="card p-4">
                <Legend title={LegendText.title}>{LegendText.text}</Legend>
                <div style={{textAlign: 'right'}}>
                    <label className="m-0 mr-2"><input type="radio" name="totals.mode" checked={this.state.mode === 'graph'} onChange={() => this.setMode('graph')} className="mx-2" />Graph</label>
                    <label><input type="radio" name="totals.mode" checked={this.state.mode === 'histo'} onChange={() => this.setMode('histo')} className="mx-2" />Histogramm</label>
                </div>
                <div className="mt-3">
                    {this.state.mode === 'graph' ? (
                    <LinearChart xDomain={[100, 0]} yDomain={[0,80]}>
                        <YAxis ticks={{ count: 4 }} label=" Erreichte Punkte"/>
                        <AreaGraph curve={curveStep} data={this.percentileArea(10, 0)} color="hsla(120, 100%, 80%, .2)"></AreaGraph>
                        <AreaGraph curve={curveStep} data={this.percentileArea(25, 10)} color="hsla(120, 100%, 60%, .2)"></AreaGraph>
                        <AreaGraph curve={curveStep} data={this.percentileArea(50, 25)} color="hsla(120, 100%, 40%, .2)"></AreaGraph>
                        <AreaGraph curve={curveStep} data={this.percentileArea(100, 50)} color="hsla(120, 100%, 20%, .2)"></AreaGraph>
                        <LineGraph data={this.props.dist} color="hsla(181, 100%, 41%, .9)" noPoints curve={curveStep}>
                            {/* <Tracker getY={ x => this.getY(x) } /> */}
                        </LineGraph>
                        <Marker extended={true} x={this.props.resultPercent} y={this.props.resultMean} label='Du' color="hsla(0, 100%, 30%, .6)" />
                        <LineMarker value={this.props.distMean} label='Durchschnitt' color="hsla(0, 100%, 30%, .6)" />
                        <XAxis label="% der Studierenden" />
                    </LinearChart>
                    ) : (
                    <div className="position-relative text-right">
                        <div className="position-absolute" style={{right:0, fontSize: '.75rem'}}>
                            <div><span className="font-weight-bold">{respSwitch('Dein Ergebnis', 'Du')}: </span>{this.props.resultMean} Pkte</div>
                            <div><span className="font-weight-bold">{respSwitch('Durchschnitt', '∅')}: </span>{this.props.distMean} Pkte</div>
                        </div>
                        <LinearChart xDomain={[Math.min(...this.histo.map(d => d.x)) - 5, Math.max(...this.histo.map(d => d.x)) + 5]} yDomain={[0,Math.max(...this.histo.map(d => d.y))]}>
                            <XAxis label="erreichte Punkte" />
                            <YAxis label="Anzahl Studierender" />
                            <BarGraph labels width={.75} data={this.histo} color="hsla(33, 100%, 20%, .5)" highlightColor="hsla(33, 100%, 20%, .8)" />
                        </LinearChart>
                    </div>
                    )}
                </div>
            </div>
        )
    }
})

export default props => <Totals {...Data(props.semester)} />