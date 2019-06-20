import React from 'react'
import _ from 'lodash'
import Subjects, { ranking } from '../Subjects'
import Legend from '../../Charting/Legend'
import LegendTexts from '../../Core/LegendTexts'
import { withTranslation } from 'react-i18next'
import PTMResults from '../../Strengths/PTMResults'
import Ranking from '../../Strengths/Ranking'

const Ptm = ({ match, t }) => {
    const ptmSample = Subjects(match.params.test)
    const LegendText = LegendTexts(t).Exams.Ptm
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
                            <PTMResults />
                        </div>
                        <div className="m-2 flex-grow-1" style={{width: '20rem'}}>
                            <Ranking title={LegendText.Strengths.title} text={LegendText.Strengths.text} subjects={ranking(ptmSample)} mean /> 
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row mt-3">
                <div className="col">
                    <div className="card p-3">
                        <SubjectsTabs 
                            tabTitles={sample.map(c => c.title)}
                            tabContents={sample.map(c => 
                                <div className="d-flex flex-wrap">
                                    {c.subjects.map(s => <Subject key={s.title} {...s} />)}
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default withTranslation() (Ptm)