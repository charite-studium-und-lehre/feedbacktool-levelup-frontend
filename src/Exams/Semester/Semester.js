import React from 'react'
import Totals from './Totals'
import { withTranslation } from 'react-i18next'
import Details from './Details'

const Semester = ({ match, t }) => {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className="mr-auto">{t(`Semesterprüfung`)} - {match.params.test}</h4>
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

            <div className="row mt-3">
                <div className="col">
                    <Link to={`${match.url}/questions`}>
                        <button type="button" className="btn btn-outline-primary">{t(`Fragen und Antworten`)}</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default withTranslation() (Semester)