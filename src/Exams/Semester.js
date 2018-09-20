import React, { Component } from 'react'
import Chart from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import AreaGraph from '../Charting/AreaGraph'
import _ from 'lodash'
import Marker from '../Charting/Marker';
import BarGraph from '../Charting/BarGraph';
import HorizontalBarGraph from '../Charting/HorizontalBarGraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

function randn_bm() {
    var u = 0, v = 0
    while(u === 0) u = Math.random()
    while(v === 0) v = Math.random()
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
}

function mean(x) {
    return Math.round(x.reduce((s, d) => s+d, 0) / x.length)
}

const result = new Array(4).fill(0).map(() => Math.floor(Math.random() * 60 + 25))
const data = new Array(100).fill(0).map(() => new Array(4).fill(0).map(() => Math.floor(randn_bm() * 13 + 50))).concat([ result ]).sort((a,b) => mean(a)-mean(b))
const graphData = data.map((d,i) => ({x: (i+1)/1.01, y: mean(d)}))
const histo = _.zip(...data).map((m,module) => _.map(_.groupBy(m, d => Math.floor(d / 5)), (d, i) => ({x: +i*5, y: d.length, highlight: +i === Math.floor(result[module] / 5)})))
console.log(histo)
function toAreaData(_data) {
    return _data.map(d => ({x: d.x, y0: Math.min(...graphData.map(d => d.y)), y1: d.y}))
}

function percentileArea(from, to) {
    return toAreaData([{x: from, y: graphData.find(d => d.x >= from).y}]
            .concat(graphData.filter(d => d.x >= from && d.x <= to), [{x: to, y: graphData.find(d => d.x >= to).y}]))
}

class Semester extends Component {
    constructor({ props, match }) {
        super(props)
        this.match = match
        this.state = {
            mode: 'histo'
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
                                <Chart ticks={{y:4}} xDomain={[0,100]} yDomain={[Math.min(...graphData.map(d => d.y)), Math.max(...graphData.map(d => d.y))]}>
                                    <AreaGraph noSmooth data={percentileArea(90, 100)} color="hsla(120, 100%, 80%, .2)"></AreaGraph>
                                    <AreaGraph noSmooth data={percentileArea(75, 90)} color="hsla(120, 100%, 60%, .2)"></AreaGraph>
                                    <AreaGraph noSmooth data={percentileArea(50, 75)} color="hsla(120, 100%, 40%, .2)"></AreaGraph>
                                    <AreaGraph noSmooth data={percentileArea(0, 50)} color="hsla(120, 100%, 20%, .2)"></AreaGraph>
                                    <LineGraph data={graphData} color="hsla(181, 100%, 41%, .6)" noPoints noSmooth/>
                                    <Marker x={_.findLastIndex(graphData, d => d.y === mean(result))} y={mean(result)} label='Du' color="hsla(0, 100%, 30%, .6)" />
                                    <Marker x={_.findIndex(graphData, d => d.y >= mean(graphData.map(d => d.y)))} y={mean(graphData.map(d => d.y))} label='Mittelwert' color="hsla(0, 100%, 30%, .6)" />
                                </Chart>
                                ) : (
                                <Chart xDomain={[0,100]} yDomain={[0,Math.max(...histo.map(d => Math.max(...d.map(y => y.y))))]}>
                                    <BarGraph offset={-1.5} width={1} data={histo[0]} color="hsla(33, 100%, 20%, .5)" highlightColor="hsla(33, 100%, 20%, .8)" />
                                    <BarGraph offset={-0.5} width={1} data={histo[1]} color="hsla(33, 100%, 40%, .5)" highlightColor="hsla(33, 100%, 40%, .8)" />
                                    <BarGraph offset={0.5} width={1} data={histo[2]} color="hsla(33, 100%, 60%, .5)" highlightColor="hsla(33, 100%, 60%, .8)" />
                                    <BarGraph offset={1.5} width={1} data={histo[3]} color="hsla(33, 100%, 80%, .5)" highlightColor="hsla(33, 100%, 80%, .8)" />
                                </Chart>
                                )}
                            </div>
                            <div className="mt-3">
                                <Chart horizontal xDomain={[0,100]} yDomain={[0,5]} ticks={{x: 11, y: 6, yFormat: d => 'M0' + d }}>
                                    <HorizontalBarGraph data={result} />
                                </Chart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default Semester