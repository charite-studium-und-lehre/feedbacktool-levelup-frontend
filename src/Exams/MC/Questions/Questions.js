import React, { useState } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import Legend from '../../../Charting/Legend'
import Legends from '../../../Core/LegendTexts'
import needsData from '../../../Core/needsData'
import Question from './Question'
import Filters from './Filters'
import { selectors, actions } from './Store'

const Questions = ({questions }) => {
    const [ subjectsFilters, setSubjectsFilters ] = useState(
        _.compose([_.map(s => ({ label: s.titel, pred: q => s.code === q.fach.code })), _.uniqBy( q => q.code ), _.map( q => q.fach )])(questions)
    )
    const [ modulesFilters, setModulesFilters ] = useState(
        _.compose([_.map(m => ({ label: m.titel, pred: q => m.code === q.modul.code })), _.uniqBy( m => m.code ), _.map( q => q.modul )])(questions)
    )
    const [ difficultyFilter, setDifficultyFilter ] = useState([
        { label: 'schwer', pred: q => q.durchschnittRichtig < .4 },
        { label: 'mittel', pred: q => q.durchschnittRichtig >= .4 && q.durchschnittRichtig <= .8 },
        { label: 'leicht', pred: q => q.durchschnittRichtig > .8 }
    ])
    const [ correctFilter, setCorrectFilter ] = useState([
        { label: 'richtig beantwortet', pred: q => q.antworten.some( a => a.richtig && a.ausgewaehlt )},
        { label: 'falsch beantwortet', pred: q => q.antworten.some( a => !a.richtig && a.ausgewaehlt )},
    ])

    const LegendText = Legends.Exams.MC.QuestionsDetails
    const filters = [ subjectsFilters, modulesFilters, difficultyFilter, correctFilter ]
    const filteredQuestions = questions.filter(
        _.overEvery(filters.map( 
            f => _.overSome([ ...f.filter(f => f.selected).map(f => f.pred), () => f.filter(f => f.selected).length === 0 ])
        ))
    )
    
    return (
        <div className="container-fluid">
            <div className="row mt-2">
                <div className="col">
                    <div className="card p-3">
                        <div className="row">
                            <div className="col">
                                {/* <h4 className="mr-auto">Semesterprüfung - {match.params.test}</h4> */}
                                <Legend title={LegendText.title}><p>{LegendText.text}</p></Legend>
                            </div>
                        </div>
                        <Filters filters={filters} setters={[ setSubjectsFilters, setModulesFilters, setDifficultyFilter, setCorrectFilter ]}>
                            <div className="font-weight-bold mt-2">{filteredQuestions.length} von {questions.length} Fragen angezeigt</div>
                        </Filters>
                        <div className="row mt-2">
                            <div className="col">
                                {filteredQuestions.map((question, i) => <Question {...question } key={question.id} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const stateToProps = (state, ownProps) => ({ questions: selectors.getById( state, ownProps.match.params.test ) })
const loadedById = (state, ownProps) => selectors.loaded(state, ownProps.match.params.test)
const loadById = ownProps => actions.load(ownProps.match.params.test)
export default _.compose(needsData(loadedById, loadById), connect(stateToProps))(Questions)