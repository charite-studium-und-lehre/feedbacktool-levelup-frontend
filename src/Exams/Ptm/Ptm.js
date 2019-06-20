import React from 'react'
import _ from 'lodash'
import Subjects, { ranking } from '../Subjects'
import Legend from '../../Charting/Legend'
import LegendTexts from '../../Core/LegendTexts'
import { withTranslation } from 'react-i18next'
import PTMResults from '../../Strengths/PTMResults'
import { schemeGreens } from 'd3-scale-chromatic'
import { scaleOrdinal } from 'd3-scale'
import Ranking from '../../Strengths/Ranking'

const ptmSample = Subjects('ptm')

const colors = scaleOrdinal(schemeGreens[3])

const Ptm = ({ match, t }) => {
        const LegendText = LegendTexts(t).Exams.Ptm
        const sample = Subjects()
            .map(c => ({...c, subjects: c.subjects.map(s => ({ ...s, correct: Math.floor(Math.random() * s.questions)})).sort((a,b) => - a.correct / (a.questions+.1) + b.correct / (b.questions + .1)) }))
        return (
        <div className="container-fluid">
           <div className="row mt-3">
                <div className="col">
                    <div className="d-flex flex-wrap">
                        <div className="card m-2 flex-grow-1" style={{width: '60rem'}}>
                            <div className="card-body">
                            <PTMResults  colors={colors}/>
                            </div>
                        </div>
                        <div className="card m-2 flex-grow-1" style={{width: '20rem'}}>
                                <div className="card-body">
                                {/* <Ranking title={LegendText.Strengths.title} text={LegendText.Strengths.text} subjects={ranking(ptmSample)} mean /> */}
                                 <Legend title={LegendText.Strengths.title}>{LegendText.Strengths.text}</Legend>
                                <div>
                                    {_.take(_.flatMap(sample, c => c.subjects).sort((a,b) => -a.correct / a.questions + b.correct / b.questions), 3).map(s =>
                                        <div key={s.title} className="py-2">
                                            <h5>{s.title}</h5>
                                            <div className="my-1 text-center text-white question-bar" style={{backgroundImage: `linear-gradient(to right, rgba(51, 137, 51, 0.8) ${s.correct / s.questions * 100}%, rgba(51, 137, 51, 0.4) ${s.correct / s.questions * 100}%)`}}>
                                            {s.correct} von {s.questions} richtig
                                            </div>
                                        </div>
                                    )}
                                </div> 
                               </div>
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