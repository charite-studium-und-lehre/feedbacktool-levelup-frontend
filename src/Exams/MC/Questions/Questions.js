import React, { useState } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import { withTranslation } from 'react-i18next'
import Legend from '../../../Charting/Legend'
import Legends from '../../../Core/LegendTexts'
import needsData from '../../../Core/needsData'
import Question from './Question'
import Filters from './Filters'
import { selectors, actions } from '../Store'

const Questions = ({ t, questions }) => {
    const [ tagsFilters, setTagsFilters ] = useState(
        _.uniq(_.flatMap(q => q.tags, questions)).map(t => ({ label: t, pred: q => _.includes(t, q.tags) }))
    )
    const [ difficultyFilter, setDifficultyFilter ] = useState([
        { label: 'schwer', pred: q => q.durchschnittRichtig < .4 },
        { label: 'leicht', pred: q => q.durchschnittRichtig > .8 }
    ])
    const [ correctFilter, setCorrectFilter ] = useState([
        { label: 'richtig beantwortet', pred: q => q.antworten.some( a => a.richtig && a.ausgewählt )},
        { label: 'falsch beantwortet', pred: q => q.antworten.some( a => !a.richtig && a.ausgewählt )},
    ])

    const LegendText = Legends.Exams.MC.QuestionsDetails
    const filters = [ tagsFilters, difficultyFilter, correctFilter ]
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
                                <Legend title={LegendText.title}>{LegendText.text}</Legend>
                            </div>
                        </div>
                        <Filters filters={filters} setters={[ setTagsFilters, setDifficultyFilter, setCorrectFilter ]}>
                            <div className="font-weight-bold mt-2">{filteredQuestions.length} von {questions.length} {t(`Fragen angezeigt`)}</div>
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
const stateToProps = (state, ownProps) => ({ questions: selectors.getById( state, ownProps.match.params.test ).fragen })
export default _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps), withTranslation()) (Questions)