import React from 'react'
import _ from 'lodash'
import Subjects, { ranking } from '../Exams/Subjects'
import Subject from './Subject'
import Ranking from './Ranking'
import PTMResults from './PTMResults'
import SubjectsTabs from '../Core/Tabs'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'
import { withTranslation } from 'react-i18next'
import { useTranslation } from 'react-i18next';
// const LegendText = LegendTexts.Strengths

const mcSample = Subjects('mc')    
const ptmSample = Subjects('ptm')
const Strengths = ({ match, t}) => {
    // const {t} = useTranslation();
    const active = Math.max(...mcSample.map((c,i) => _.includes(c.subjects.map(s => s.title), match.params.subject) ? i : -1), 0)
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <Legend title={Legends.LegendsTree.Strengths.Main.map(e => e.title)}>{Legends.LegendsTree.Strengths.Main.map(e => e.text)}</Legend>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-4 mb-2">
                <Ranking title={Legends(t).Strengths.Semester.title} text={Legends(t).Strengths.Semester.text} subjects={ranking(mcSample)} />
            </div>
            <div className="col-md-4 mb-2">
                <Ranking title={Legends(t).Strengths.PTM.title} text={Legends(t).Strengths.PTM.text} subjects={ranking(ptmSample)} mean />
            </div>
            <div className="col-md-4 mb-2">
                <PTMResults />
            </div>
        </div>
        
        <div className="row">
            <div className="col">
                <div className="card p-3">
                    <Legend title={Legends(t).Strengths.Subjects.title}>{Legends(t).Strengths.Subjects.text}</Legend>
                    <SubjectsTabs active={active}>
                        {_.zip(mcSample, ptmSample).map(([mcCat, ptmCat]) => 
                            <div key={mcCat.title} title={mcCat.title} className="d-flex flex-wrap">
                                {_.sortBy(_.zip(mcCat.subjects, ptmCat.subjects), d => d[0].title).map(([mcSub, ptmSub]) => <Subject data={[mcSub,ptmSub]} key={mcSub.title} {...mcSub} flash={mcSub.title === match.params.subject} />)}
                            </div>
                        )}
                    </SubjectsTabs>
                </div>
            </div>
        </div>
    </div>
)}

export default withTranslation() (Strengths)