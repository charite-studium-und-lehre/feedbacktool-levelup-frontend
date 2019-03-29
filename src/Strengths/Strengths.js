import React from 'react'
import _ from 'lodash'
import Subjects from '../Exams/Subjects'
import Subject from './Subject'
import Ranking from './Ranking'
import PTMResults from './PTMResults'
import SubjectsTabs from '../Core/Tabs'
import Legend from '../Charting/Legend'
import LegendTexts from '../Core/LegendTexts'
const LegendText = LegendTexts.Strengths

const Strengths = ({ match }) => {
    const mcSample = Subjects()
        .map(c => ({...c, subjects: c.subjects.map(s => ({ ...s, correct: _.random(1, s.questions)})).sort((a,b) => - a.correct / (a.questions+.1) + b.correct / (b.questions + .1)) }))
    const ptmSample = Subjects()
        .map(c => ({...c, subjects: c.subjects.map(s => ({ ...s, correct: Math.floor(Math.random() * s.questions)})).sort((a,b) => - a.correct / (a.questions+.1) + b.correct / (b.questions + .1)) }))
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <Legend title={LegendText.Main.title}>{LegendText.Main.text}</Legend>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-4 mb-2">
                <Ranking title={LegendText.Semester.title} text={LegendText.Semester.text} subjects={_.flatMap(mcSample, c => c.subjects)} />
            </div>
            <div className="col-md-4 mb-2">
                <Ranking title={LegendText.PTM.title} text={LegendText.PTM.text} subjects={_.flatMap(ptmSample, c => c.subjects).map(s => ({...s, mean: _.random(1, s.questions)}))} />
            </div>
            <div className="col-md-4 mb-2">
                <PTMResults />
            </div>
        </div>
        
        <div className="row">
            <div className="col">
                <div className="card p-3">
                    <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                    <SubjectsTabs 
                        tabTitles={mcSample.map(c => c.title)}
                        tabContents={mcSample.map(c => 
                            <div className="d-flex flex-wrap">
                                {_.sortBy(c.subjects, 'title').map(s => <Subject key={s.title} {...s} flash={s.title === match.params.subject} />)}
                            </div>
                        )}
                        active={mcSample.reduce((r, c) => c.subjects.some(s => s.title === match.params.subject) ? c.title : r, "")}
                    />
                </div>
            </div>
        </div>
    </div>
)}

export default Strengths