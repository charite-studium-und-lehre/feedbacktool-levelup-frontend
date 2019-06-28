import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Subjects, { ranking } from '../Exams/Subjects'
import Subject from './Subject'
import Ranking from './Ranking'
import PTMResults from '../Exams/Ptm/ptmResultsAlt'
import SubjectsTabs from '../Core/Tabs'
import Legend from '../Charting/Legend'
import Legends from '../Core/LegendTexts'
import { selectors as ptmSelectors } from '../Exams/Ptm/Data'

const mcSample = Subjects('mc')

const Strengths = ({ match, ...props }) => {
    const LegendText = Legends.Strengths
    const active = Math.max(...mcSample.map((c,i) => _.includes(c.subjects.map(s => s.name), match.params.subject) ? i : -1), 0)
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <Legend title={LegendText.Main.title}>
                {LegendText.Main.text}
                </Legend>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-4 mb-2">
                <Ranking title={LegendText.Semester.title} text={LegendText.Semester.text} subjects={ranking(mcSample)} />
            </div>
            <div className="col-md-4 mb-2">
                <Ranking title={LegendText.PTM.title} text={LegendText.PTM.text} subjects={ranking(props.ptmData.fächer)} mean />
            </div>
            <div className="col-md-4 mb-2">
                <PTMResults results={props.ptmData.results} means={props.ptmData.means} />
            </div>
        </div>
        
        <div className="row">
            <div className="col">
                <div className="card p-3">
                    <Legend title={LegendText.Subjects.title}>{LegendText.Subjects.text}</Legend>
                    <SubjectsTabs active={active}>
                        {_.zip(mcSample, props.ptmData.fächer).map(([mcCat, ptmCat]) => 
                            <div key={mcCat.title} title={mcCat.title} className="d-flex flex-wrap">
                                {_.sortBy(_.zip(mcCat.subjects, ptmCat.subjects), d => d[0].name).map(([mcSub, ptmSub]) => <Subject data={[mcSub,ptmSub]} key={mcSub.name} {...mcSub} flash={mcSub.name === match.params.subject} />)}
                            </div>
                        )}
                    </SubjectsTabs>
                </div>
            </div>
        </div>
    </div>
)}

const stateToProps = state => ({ ptmData: ptmSelectors.getBySemester(state, '5. Fachsemester') })
export default connect(stateToProps)(Strengths)