import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Legend from '../../../Charting/Legend'
import Legends from '../../../Core/LegendTexts'
import needsData from '../../../Core/needsData'
import Question from './Question'
import Filters from './Filters'
import { selectors, actions } from './Store'
import { filterType, filterDifficulty, filterCorrectness, bakeFilters, filterAll } from './QuestionsUtils'
import { compose } from '../../../Utils/compose'


const Questions = ({questions}) => {

    const LegendText = Legends.Exams.MC.QuestionsDetails

    const [ subjectsFilters, setSubjectsFilters ] = useState(filterType(questions, 'fach'))
    const [ modulesFilters, setModulesFilters ] = useState(filterType(questions, 'modul'))
    const [ difficultyFilter, setDifficultyFilter ] = useState(filterDifficulty)
    const [ correctnessFilter, setCorrectFilter ] = useState(filterCorrectness)

    const filters = [
        subjectsFilters,
        modulesFilters,
        difficultyFilter,
        correctnessFilter
    ]

    const bakedFilters = bakeFilters(filters)

    const filteredQuestions = questions.filter(question => filterAll(question, bakedFilters))

    return (
        <div className="container-fluid">
            <div className="row mt-2">
                <div className="col">
                    <div className="card p-3">
                        <div className="row">
                            <div className="col">
                                <Legend title={LegendText.title}><p>{LegendText.text}</p></Legend>
                            </div>
                        </div>
                        <Filters filters={filters} setters={[
                            setSubjectsFilters,
                            setModulesFilters,
                            setDifficultyFilter,
                            setCorrectFilter
                        ]}>
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

export default compose(needsData(loadedById, loadById), connect(stateToProps))(Questions)
