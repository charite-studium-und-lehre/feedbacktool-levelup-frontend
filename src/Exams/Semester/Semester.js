import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Totals from './Totals'
import Details from './Details'
import { randomNormal } from 'd3-random'

const moduleDists = _.range(4).map(() => randomNormal(50, 30))
const result = [64, 72, 89, 61]
const data = _.range(100).map(() => _.range(4).map(i => Math.floor(moduleDists[i]()))).concat([ result ]).sort((a,b) => _.mean(b)-_.mean(a))

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
                    <Totals data={data.map((d,i) => ({x: (i+1)/data.length*100, y: _.mean(d)}))} totalMean={_.mean(data.map(d => _.mean(d)))} ownMean={_.mean(result)} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Details result={result} data={_.zip(...data).map((d, i) => ({module: i+1, data: d, mean: _.mean(d)}))} totalMean={_.round(_.mean(data.map(d => _.mean(d))))} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Link to={`${match.url}/questions`}>
                        <button type="button" className="btn btn-outline-primary">Fragen und Antworten</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Semester