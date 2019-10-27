import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import Legend from '../Charting/Legend'
import Ranking from './Ranking'
import Legends from '../Core/LegendTexts'
import needsData from '../Core/needsData'
import { selectors as ptmSelectors, actions as ptmActions } from '../Exams/Ptm/Store'
import { selectors as mcSelectors, actions as mcActions } from '../Exams/MC/Store'

const ptmProps = state => ({ faecher: _.flow(ptmSelectors.getLatest, ptmSelectors.getRanking)(state) })
const PtmRanking = _.compose(needsData(ptmSelectors.loaded, ptmActions.load), connect(ptmProps))(
    ({ faecher }) => <Ranking subjects={faecher} /> 
)

const mcProps = state => ({ faecher: mcSelectors.getRanking(state) })
const McRanking = _.compose(needsData(mcSelectors.loaded, mcActions.load), connect(mcProps))(
    ({ faecher }) => <Ranking subjects={faecher} /> 
)

const Rankings = () =>
    <div className="row">
        <div className="col-md-6 mb-2">
            <div className="card">
                <div className="card-body">
                    <Legend title={Legends.Strengths.MC.title}>{Legends.Strengths.MC.text}</Legend>
                    <McRanking />
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="card">
                <div className="card-body">
                    <Legend title={Legends.Strengths.PTM.title}>{Legends.Strengths.PTM.text}</Legend>
                    <PtmRanking mean />
                </div>
            </div>
        </div>
    </div>

export default Rankings