import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import { ranking } from '../Subjects'
import needsData from '../../Core/needsData'
import Legend from '../../Charting/Legend'
import LegendTexts from '../../Core/LegendTexts'
import Ranking from '../../Strengths/Ranking'
import Subjects from './Subjects'
import Results from './Results'
import { selectors, actions } from './Store'

const stateToProps = (state, ownProps) => ({ data: selectors.getBySemester(state, ownProps.semester) })
const PtmRanking = _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps))
    ( props => <Ranking subjects={ranking(props.data.fächer)} {...props} /> )

const Ptm = ({ match }) => {
    const LegendText = LegendTexts.Exams.Ptm
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className="mr-auto">PTM - {match.params.test}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 mb-2">
                    <Results semester={match.params.test} />
                </div>
                <div className="col-lg-4 mb-2">
                    <PtmRanking title={LegendText.Strengths.title} text={LegendText.Strengths.text} semester={match.params.test} mean />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card p-3">
                        <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                        <Subjects semester={match.params.test} />
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col">
                <div className="card p-3">
                <Legend title={LegendText.Organsystem.title}>{LegendText.Organsystem.text}</Legend>
                <SubjectsTabs>
                {props.data.fächer.map(c => 
                    <div key={c.title} title={c.title} className="d-flex flex-wrap">
                    {_.sortBy(c.subjects, d => d.title).map(s => <SubjectAlt key={s.title} name={s.title} semester={match.params.test} />)}
                    </div>
                    )}
                    </SubjectsTabs>
                    </div>
                    </div>
                </div> */}
        </div>
    )
}

export default Ptm