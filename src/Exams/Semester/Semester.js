import React from 'react'
import _ from 'lodash'
import Totals from './Totals'
import Modules from './Modules'

function randn_bm() {
    var u = 0, v = 0
    while(u === 0) u = Math.random()
    while(v === 0) v = Math.random()
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
}

function mean(x) {
    return Math.round(x.reduce((s, d) => s+d, 0) / x.length)
}

const moduleMeans = new Array(4).fill(0).map(() => Math.floor(Math.random() * 10) + 50)
const result = new Array(4).fill(0).map(() => Math.floor(Math.random() * 60 + 25))
const data = new Array(100).fill(0).map(() => new Array(4).fill(0).map((d,i) => Math.floor(randn_bm() * 13 + moduleMeans[i]))).concat([ result ]).sort((a,b) => mean(a)-mean(b))
//const histo = _.zip(...data).map((m,module) => _.map(_.groupBy(m, d => Math.floor(d / 5)), (d, i) => ({x: +i*5, y: d.length, highlight: +i === Math.floor(result[module] / 5)})))

const Semester = ({ match }) => {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className="mr-auto">Semesterprüfung - {match.params.test}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Totals data={data.map((d,i) => ({x: (i+1)/1.01, y: mean(d)}))} totalMean={mean(data.map(d => mean(d)))} ownMean={mean(result)} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Modules result={result} moduleMeans={_.zip(...data).map((d, i) => ({x: i+1, y: mean(d)}))} totalMean={mean(data.map(d => mean(d)))} />
                </div>
            </div>
        </div>
    )
}

export default Semester