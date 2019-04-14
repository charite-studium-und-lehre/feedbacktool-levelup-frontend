import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Totals from './Totals'
import Details from './Details'
import { TotalsData, DetailsData } from './Data'

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
                    <Totals />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Details semester={match.params.test.split(".")[0]} result={DetailsData.result} data={_.zip(...DetailsData.data).map((d, i) => ({module: i+1, data: d, mean: _.mean(d)}))} totalMean={_.round(_.mean(DetailsData.data.map(d => _.mean(d))))} />
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