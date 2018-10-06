import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Totals from './Totals'
import Details from './Details'
import { randomNormal } from 'd3-random'

function mean(x) {
    return Math.round(x.reduce((s, d) => s+d, 0) / x.length)
}

const moduleDists = new Array(4).fill(0).map(() => randomNormal(Math.floor(Math.random() * 10) + 50, 13))
const result = new Array(4).fill(0).map(() => Math.floor(Math.random() * 60 + 25))
const data = new Array(100).fill(0).map(() => new Array(4).fill(0).map((d,i) => Math.floor(moduleDists[i]()))).concat([ result ]).sort((a,b) => mean(a)-mean(b))

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
                    <Totals data={data.map((d,i) => ({x: (i+1)/data.length*100, y: mean(d)}))} totalMean={mean(data.map(d => mean(d)))} ownMean={mean(result)} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Details result={result} data={_.zip(...data).map((d, i) => ({module: i+1, data: d, mean: mean(d)}))} totalMean={mean(data.map(d => mean(d)))} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Link to={`${match.url}/questions`}>
                        <button type="button" className="btn btn-outline-primary mt-2">Fragen und Antworten</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Semester