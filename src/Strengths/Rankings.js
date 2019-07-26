import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import Ranking from './Ranking'
import Legends from '../Core/LegendTexts'
import needsData from '../Core/needsData'
import { selectors as ptmSelectors, actions as ptmActions } from '../Exams/Ptm/Store'
import { selectors as semesterSelectors, actions as semesterActions } from '../Exams/Semester/Store'

const ptmProps = state => ({ fächer: _.flow(ptmSelectors.getLatest, ptmSelectors.getRanking)(state) })
const PtmRanking = _.compose(needsData(ptmSelectors.loaded, ptmActions.load), connect(ptmProps))(
    ({ fächer, ...props}) => <Ranking subjects={fächer} {...props} /> 
)

const mcProps = state => ({ fächer: semesterSelectors.getRanking(state) })
const McRanking = _.compose(needsData(semesterSelectors.loaded, semesterActions.load), connect(mcProps))(
    ({ fächer, ...props}) => <Ranking subjects={fächer} {...props} /> 
)

const Rankings = () =>
    <div className="row">
        <div className="col-md-6 mb-2">
            <McRanking title={Legends.Strengths.Semester.title} text={Legends.Strengths.Semester.text} />
        </div>
        <div className="col-md-6 mb-2">
            <PtmRanking title={Legends.Strengths.PTM.title} text={Legends.Strengths.PTM.text} mean />
        </div>
    </div>

export default Rankings