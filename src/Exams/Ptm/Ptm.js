import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import { withTranslation } from 'react-i18next'
import needsData from '../../Core/needsData'
import Legend from '../../Charting/Legend'
import LegendTexts from '../../Core/LegendTexts'
import Subjects from './Subjects'
import Results from './Results'
import Timeline from './Timeline'
import { selectors, actions } from './Store'

export const color = 'hsla(240, 50%, 50%, .75)'
const Ptm = ({ test, t }) => {
    const LegendText = LegendTexts.Exams.Ptm
    
    return test ?
        <div className="container-fluid mb-2">
            <div className="row">
                <div className="col">
                    <div className="p-2">
                        <h4 className="mr-auto">PTM - {test.zeitsemester}</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-2">
                    <div className="row">
                        <div className="col">
                            <Timeline />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col">
                            <Results id={test.id} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card p-3">
                        <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                        <Subjects id={test.id} />
                    </div>
                </div>
            </div>
        </div> :
        <div className="text-center">{t('Diese Prüfung scheint nicht zu existieren.')}</div>
}

const stateToProps = (state, ownProps) => ({ test: selectors.getById( state, ownProps.match.params.test )})
export default _.compose([withTranslation(), needsData(selectors.loaded, actions.load), connect(stateToProps)])(Ptm)