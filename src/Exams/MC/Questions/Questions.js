import React, { Component } from 'react'
import _ from 'lodash'
import { withTranslation } from 'react-i18next'
import Question from './Question'
import DummyQuestions from '../DummyQuestions'
import Legend from '../../../Charting/Legend'
import Legends from '../../../Core/LegendTexts'
import Filter from '../../../Utils/Filter'

let filters = _.uniq(_.flatMap(DummyQuestions, q => q.tags)).map(t => ({label: t.label, pred: q => _.includes(q.tags, t)})).concat([
    { label: 'richtig beantwortet', pred: q => q.answers.some( a => a.correct && a.selected )},
    { label: 'falsch beantwortet', pred: q => q.answers.some( a => !a.correct && a.selected )},
    { label: 'schwer', pred: q => q.answers.find( a => a.correct ).percentage < 50 },
    { label: 'leicht', pred: q => q.answers.find( a => a.correct ).percentage > 70 }
])

class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = { filters }
    }
    
    render() {
        const { t } = this.props
        const LegendText = Legends.Exams.MC.QuestionsDetails
        const questions = DummyQuestions.filter(_.overEvery(this.state.filters.filter(f => f.selected).map(f => f.pred)))
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        {/* <h4 className="mr-auto">Semesterprüfung - {match.params.test}</h4> */}
                        <Legend title={LegendText.title}>{LegendText.text}</Legend>
                    </div>
                </div>
                <Filter showAll filters={ filters } onUpdate={ filters => this.setState( { filters } )} />
                <div className="row">
                    <div className="col">
                        <span className="font-weight-bold">{questions.length} von {DummyQuestions.length} {t(`angezeigt`)}</span>
                    </div>
                </div>
                {questions.map((question, i) => <Question {...question } key={i} />)}
            </div>
        )
    }
}

export default withTranslation() (Questions)