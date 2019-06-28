import React from 'react'
import _ from 'lodash'
import Subjects, { ranking } from '../Subjects'
import SubjectsTabs from '../../Core/Tabs'
import Subject from './Subject'
import Legend from '../../Charting/Legend'
import LegendTexts from '../../Core/LegendTexts'
import PTMResults from '../../Strengths/PTMResults'
import Ranking from '../../Strengths/Ranking'
import PtmResultsAlt from './ptmResultsAlt'
import SubjectAlt from './SubjectAlt'
import { Results as PtmResults } from './Data'

const Ptm = ({ match, ...props }) => {
    const ptmSample = Subjects(match.params.test)
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
                      { !props.data.alt ? <PTMResults data={props.data} />: <PtmResultsAlt/>}
                        </div>
                        <div className="m-2 flex-grow-1" style={{width: '20rem'}}>
                            <Ranking title={LegendText.Strengths.title} text={LegendText.Strengths.text} subjects={ranking(ptmSample)} mean /> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card p-3">
                        <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                        { !props.data.alt ?
                        <SubjectsTabs>
                            {ptmSample.map(c => 
                                <div key={c.title} title={c.title} className="d-flex flex-wrap">
                                    {_.sortBy(c.subjects, d => d.title).map(s => <Subject data={[s]} key={s.title} {...s} />)}
                                </div>
                            )}
                        </SubjectsTabs>
                        : 
                        <SubjectsTabs>
                        {ptmSample.map(c => 
                            <div key={c.title} title={c.title} className="d-flex flex-wrap">
                                {_.sortBy(c.subjects, d => d.title).map(s => <SubjectAlt data={[s]} key={s.title} {...s} />)}
                            </div>
                        )}
                    </SubjectsTabs>
                            }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card p-3">
                        <Legend title={LegendText.Organsystem.title}>{LegendText.Organsystem.text}</Legend>
                        { !props.data.alt ?
                        <SubjectsTabs>
                            {ptmSample.map(c => 
                                <div key={c.title} title={c.title} className="d-flex flex-wrap">
                                    {_.sortBy(c.subjects, d => d.title).map(s => <Subject data={[s]} key={s.title} {...s} />)}
                                </div>
                            )}
                        </SubjectsTabs>
                        : 
                        <SubjectsTabs>
                        {ptmSample.map(c => 
                            <div key={c.title} title={c.title} className="d-flex flex-wrap">
                                {_.sortBy(c.subjects, d => d.title).map(s => <SubjectAlt data={[s]} key={s.title} {...s} />)}
                            </div>
                        )}
                    </SubjectsTabs>
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default props => <Ptm data={PtmResults(props.match.params.test)} {...props} />