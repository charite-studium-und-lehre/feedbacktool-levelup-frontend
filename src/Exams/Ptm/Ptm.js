import React from 'react'
import _ from 'lodash'
import { ranking } from '../Subjects'
import SubjectsTabs from '../../Core/Tabs'
import Legend from '../../Charting/Legend'
import LegendTexts from '../../Core/LegendTexts'
import Ranking from '../../Strengths/Ranking'
import PtmResultsAlt from './ptmResultsAlt'
import SubjectAlt from './SubjectAlt'
import { selectors } from './Data'

const Ptm = ({ match, ...props }) => {
    const LegendText = LegendTexts.Exams.Ptm
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className="mr-auto">PTM - {match.params.test}</h4>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <div className="d-flex flex-wrap">
                        <div className="m-2 flex-grow-1" style={{width: '60rem'}}>
                            <PtmResultsAlt results={props.data.results} means={props.data.means} />
                        </div>
                        <div className="m-2 flex-grow-1" style={{width: '20rem'}}>
                            <Ranking title={LegendText.Strengths.title} text={LegendText.Strengths.text} subjects={ranking(props.data.fächer)} mean /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card p-3">
                        <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                        <SubjectsTabs>
                        {props.data.fächer.map(c => 
                            <div key={c.title} title={c.title} className="d-flex flex-wrap">
                                {_.sortBy(c.subjects, s => s.title).map(s => <SubjectAlt key={s.name} name={s.name} semester={match.params.test} />)}
                            </div>
                        )}
                        </SubjectsTabs>
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

const stateToProps = (state, ownProps) => ({ data: selectors.getBySemester(state, ownProps.match.params.test) })
export default props => <Ptm {...stateToProps(null, props)} {...props} />