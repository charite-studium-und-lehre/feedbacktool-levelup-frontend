import React from 'react'
import _ from 'lodash'
import Subjects from '../Exams/Subjects'
import Subject from './Subject'
import SubjectsTabs from '../Core/Tabs'
import Legend from '../Charting/Legend';
import LegendTexts from '../Core/LegendTexts'
const LegendText = LegendTexts.Strengths

const Strengths = ({ match }) => {
    const sample = Subjects()
        .map(c => ({...c, subjects: c.subjects.map(s => ({ ...s, correct: Math.floor(Math.random() * s.questions)})).sort((a,b) => - a.correct / (a.questions+.1) + b.correct / (b.questions + .1)) }))
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <Legend title={LegendText.Main.title}>{LegendText.Main.text}</Legend>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-6">
                <div className="card m-2">
                    <div className="card-body">
                        <Legend title={LegendText.Semester.title}>{LegendText.Semester.text}</Legend>
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
            <div className="col-md-6">
                <div className="card m-2">
                    <div className="card-body">
                        <Legend title={LegendText.PTM.title}>{LegendText.PTM.text}</Legend>
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
        <div className="row mt-3">
            <div className="col">
                <div className="card p-3">
                    <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                    <SubjectsTabs 
                        tabTitles={sample.map(c => c.title)}
                        tabContents={sample.map(c => 
                            <div className="d-flex flex-wrap">
                                {c.subjects.map(s => <Subject key={s.title} {...s} flash={s.title === match.params.subject} />)}
                            </div>
                        )}
                        active={sample.reduce((r, c) => c.subjects.some(s => s.title === match.params.subject) ? c.title : r, "")}
                    />
                </div>
            </div>
        </div>
    </div>
)}

export default Strengths