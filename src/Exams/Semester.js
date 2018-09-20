import React, { Component } from 'react'
import Chart from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import AreaGraph from '../Charting/AreaGraph'
import _ from 'lodash'
import Marker from '../Charting/Marker';
import BarGraph from '../Charting/BarGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

function randn_bm() {
    var u = 0, v = 0
    while(u === 0) u = Math.random()
    while(v === 0) v = Math.random()
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
}

const result = Math.floor(Math.random() * 60 + 25)
const data = new Array(100).fill(0).map(d => Math.floor(randn_bm() * 13 + 50)).concat([ result ]).sort((a,b) => a-b).map((d,i) => ({x: (i+1)/1.01, y: d}))
const histo = _.map(_.groupBy(data, d => Math.floor(d.y / 5)), (d, i) => ({x: +i*5, y: d.length, highlight: +i === Math.floor(result / 5)}))
const mean = Math.round(data.reduce((s, d) => s + d.y, 0) / data.length)

function toAreaData(_data) {
    return _data.map(d => ({x: d.x, y0: Math.min(...data.map(d => d.y)), y1: d.y}))
}

function percentileArea(from, to) {
    return toAreaData([{x: from, y: data.find(d => d.x >= from).y}]
            .concat(data.filter(d => d.x >= from && d.x <= to), [{x: to, y: data.find(d => d.x >= to).y}]))
}

class Semester extends Component {
    constructor({ props, match }) {
        super(props)
        this.match = match
        this.state = {
            mode: 'graph'
        }
    }

    setMode(mode) {
        this.setState({ mode })
    }

    render() {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card p-4">
                        <div className="p-2 mb-2">
                            <div className="d-flex flex-wrap">
                                <h4 className="mr-auto">Semesterprüfung - {this.match.params.test}</h4>
                                <div className=""><FontAwesomeIcon onClick={() => this.toggleHelp()} className={this.state.showHelp ? 'text-primary' : 'text-muted'} style={{fontSize: '1.3rem'}} icon={faInfoCircle} /></div>
                            </div>
                            <div ref={this.legend} className="animated row m-2" style={{overflow: 'hidden'}}>
                                Legend
                            </div>
                            <div style={{textAlign: 'right'}}>
                                <label className="m-0 mr-2"><input type="radio" name="mode" checked={this.state.mode === 'graph'} onChange={() => this.setMode('graph')} className="mx-2" />Graph</label>
                                <label><input type="radio" name="mode" checked={this.state.mode === 'histo'} onChange={() => this.setMode('histo')} className="mx-2" />Histogramm</label>
                            </div>
                            <div className="mt-3">
                                {this.state.mode === 'graph' ? (
                                <Chart ticks={{y:4}} xDomain={[0,100]} yDomain={[Math.min(...data.map(d => d.y)), Math.max(...data.map(d => d.y))]}>
                                    <AreaGraph noSmooth data={percentileArea(90, 100)} color="hsla(217, 100%, 81%, .3)"></AreaGraph>
                                    <AreaGraph noSmooth data={percentileArea(75, 90)} color="hsla(217, 100%, 63%, .3)"></AreaGraph>
                                    <AreaGraph noSmooth data={percentileArea(50, 75)} color="hsla(217, 100%, 43%, .3)"></AreaGraph>
                                    <LineGraph data={data} color="hsla(181, 100%, 41%, .6)" noPoints noSmooth/>
                                    <Marker x={_.findLastIndex(data, d => d.y === result)} y={result} label='Du' color="hsla(0, 100%, 30%, .6)" />
                                    <Marker x={_.findIndex(data, d => d.y >= mean)} y={mean} label='Mittelwert' color="hsla(0, 100%, 30%, .6)" />
                                </Chart>
                                ) : (
                                <Chart xDomain={[0,100]} yDomain={[0,Math.max(...histo.map(d => d.y))]}>
                                    <BarGraph width={3.5} data={histo} />
                                </Chart>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default Semester