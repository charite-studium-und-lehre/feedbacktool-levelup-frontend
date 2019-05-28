import React from 'react'
import Totals from './Totals'
import Details from './Details'

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
                    <Totals semester={match.params.test} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Details semester={match.params.test} />
                </div>
            </div>
        </div>
    )
}

export default Semester