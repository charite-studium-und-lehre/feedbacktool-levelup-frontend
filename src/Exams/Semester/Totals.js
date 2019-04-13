import React, { Component } from 'react'
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
import Legends from '../../Core/LegendTexts'
const LegendText = Legends.Exams.Semester.Totals

const respSwitch = (large, small) => <span><span className="d-none d-md-inline-block">{large}</span><span className="d-inline-block d-md-none">{small}</span></span>
class Totals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'graph',
        }
        this.histo = _.map(_.groupBy(props.data.map(d => d.y), d => Math.floor(d / 5)), (d, i) => ({x: +i*5, y: d.length, highlight: +i === Math.floor(props.ownMean / 5)}))
    }
    
    setMode(mode) {
        this.setState({ mode })
    }
    
    toAreaData(_data) {
        return _data.map(d => ({x: d.x, y0: 0, y1: d.y}))
    }
    
    percentileArea(from, to) {
        return this.toAreaData([{x: from, y: this.props.data.find(d => d.x >= from).y}]
                .concat(this.props.data.filter(d => d.x >= from && d.x <= to), [{x: to, y: this.props.data.find(d => d.x >= to).y}]))
    }

    render () {
        return (
            <div className="card p-4">
                <Legend title={LegendText.title}>{LegendText.text}</Legend>
                <div style={{textAlign: 'right'}}>
                    <label className="m-0 mr-2"><input type="radio" name="totals.mode" checked={this.state.mode === 'graph'} onChange={() => this.setMode('graph')} className="mx-2" />Graph</label>
                    <label><input type="radio" name="totals.mode" checked={this.state.mode === 'histo'} onChange={() => this.setMode('histo')} className="mx-2" />Histogramm</label>
                </div>
                <div className="mt-3">
                    {this.state.mode === 'graph' ? (
                    <LinearChart xDomain={[Math.max(...this.props.data.map(d => d.x)), 0]} yDomain={[0,80]}>
                        <YAxis ticks={{ count: 4 }} label="Mind. erreichte Punkte"/>
                        <AreaGraph curve={curveStep} data={this.percentileArea(90, 100)} color="hsla(120, 100%, 80%, .2)"></AreaGraph>
                        <AreaGraph curve={curveStep} data={this.percentileArea(75, 90)} color="hsla(120, 100%, 60%, .2)"></AreaGraph>
                        <AreaGraph curve={curveStep} data={this.percentileArea(50, 75)} color="hsla(120, 100%, 40%, .2)"></AreaGraph>
                        <AreaGraph curve={curveStep} data={this.percentileArea(0, 50)} color="hsla(120, 100%, 20%, .2)"></AreaGraph>
                        <LineGraph data={this.props.data} color="hsla(181, 100%, 41%, .9)" noPoints curve={curveStep}>
                            {/* <Tracker getY={ x => this.getY(x) } /> */}
                        </LineGraph>
                        <Marker extended={true} x={_.findLastIndex(this.props.data, d => d.y === this.props.ownMean)} y={_.round(this.props.ownMean)} label='Du' color="hsla(0, 100%, 30%, .6)" />
                        <LineMarker value={_.round(this.props.totalMean)} label='Durchschnitt' color="hsla(0, 100%, 30%, .6)" />
                        <XAxis label="% der Studierenden" />
                    </LinearChart>
                    ) : (
                    <div className="position-relative">
                        <div className="position-absolute" style={{right:0, fontSize: '.75rem'}}>
                            <div><span className="font-weight-bold">{respSwitch('Dein Ergebnis', 'Du')}: </span>{this.props.ownMean} Pkte</div>
                            <div><span className="font-weight-bold">{respSwitch('Durchschnitt', '∅')}: </span>{_.round(this.props.totalMean)} Pkte</div>
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
}

export default Totals