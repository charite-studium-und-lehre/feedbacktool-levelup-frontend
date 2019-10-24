import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import Ranking from './Ranking'
import Legends from '../Core/LegendTexts'
import needsData from '../Core/needsData'
import { selectors as ptmSelectors, actions as ptmActions } from '../Exams/Ptm/Store'
import { selectors as mcSelectors, actions as mcActions } from '../Exams/MC/Store'

const ptmProps = state => ({ faecher: _.flow(ptmSelectors.getLatest, ptmSelectors.getRanking)(state) })
const PtmRanking = _.compose(needsData(ptmSelectors.loaded, ptmActions.load), connect(ptmProps))(
    ({ faecher, ...props}) => <Ranking subjects={faecher} {...props} /> 
)

const mcProps = state => ({ faecher: mcSelectors.getRanking(state) })
const McRanking = _.compose(needsData(mcSelectors.loaded, mcActions.load), connect(mcProps))(
    ({ faecher, ...props}) => <Ranking subjects={faecher} {...props} /> 
)

const Rankings = () =>
    <div className="row">
        <div className="col-md-6 mb-2">
            <McRanking title={Legends.Strengths.MC.title} text={Legends.Strengths.MC.text} />
        </div>
        <div className="col-md-6 mb-2">
            <PtmRanking title={Legends.Strengths.PTM.title} text={Legends.Strengths.PTM.text} mean />
        </div>
    </div>

export default Rankings