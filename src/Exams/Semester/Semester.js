import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import needsData from '../../Core/needsData'
import Totals from './Totals'
import { withTranslation } from 'react-i18next'
import Details from './Details'
import { selectors, actions } from './Store'

export const color = 'hsla(120, 50%, 50%, .75)'

const Semester = ({ test, t }) => {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className="mr-auto">{t(`Semesterprüfung`)} - {test.semester}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Totals id={test.id} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Details id={test.id} />
                </div>
            </div>

            {/* <div className="row mt-3">
                <div className="col">
                    <Link to={`${match.url}/questions`}>
                        <button type="button" className="btn btn-outline-primary">{t(`Fragen und Antworten`)}</button>
                    </Link>
                </div>
            </div> */}

        </div>
    )
}

const stateToProps = (state, ownProps) => ({ test: selectors.getById( state, ownProps.match.params.test )})
export default _.compose([needsData(selectors.loaded, actions.load), withTranslation(), connect(stateToProps)])(Semester)