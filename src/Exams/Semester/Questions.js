import React, { Component } from 'react'
import _ from 'lodash'
import Question from './Question'
import { Link } from 'react-router-dom'
import DummyQuestions from './DummyQuestions'

let filters = _.uniq(_.flatMap(DummyQuestions, q => q.tags)).map(t => ({label: t.label, pred: q => _.includes(q.tags, t)})).concat([
    { label: 'richtig beantwortet', pred: q => q.answers.some( a => a.correct && a.selected )},
    { label: 'falsch beantwortet', pred: q => q.answers.some( a => !a.correct && a.selected )},
    { label: 'schwer', pred: q => q.answers.find( a => a.correct ).percentage < 50 },
    { label: 'leicht', pred: q => q.answers.some( a => a.correct ).percentage > 80 }
])

class Questions extends Component {
    constructor({ props, match }) {
        super(props)
        this.match = match
        this.state = { filters }
    }
    
    toggleFilter(filter) {
        filter.selected = !filter.selected
        this.setState({ filters: this.state.filters })
    }

    selectAll() {
        this.setState({ filters: this.state.filters.map(filter => ({ ...filter, selected: true })) })
    }

    selectNone() {
        this.setState({ filters: this.state.filters.map(filter => ({ ...filter, selected: false })) })
    }

    render() {
        const questions = DummyQuestions.filter(_.overSome(this.state.filters.filter(f => f.selected).map(f => f.pred)))
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        {/* <h4 className="mr-auto">Semesterprüfung - {match.params.test}</h4> */}
                        <h4 className="mr-auto">Fragen und Antworten</h4>
                    </div>
                </div>
                <div className="row mb-2 mt-1">
                    <div className="col">
                        <button className="btn btn-outline-primary mr-1 mt-1" onClick={ () => this.selectAll() }>alle</button>
                        <button className="btn btn-outline-primary mr-1 mt-1" onClick={ () => this.selectNone() }>keine</button>
                        {this.state.filters.map(filter => (<button key={filter.label} 
                            className={`mr-1 mt-1 btn ${filter.selected ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => this.toggleFilter(filter)}>
                            {filter.label}
                        </button>))}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="font-weight-bold">{questions.length} von {DummyQuestions.length} angezeigt</span>
                    </div>
                </div>
                {questions.map((question, i) => <Question {...question } key={i} />)}
                <div className="row mt-3">
                    <div className="col">
                        <Link to={`${this.match.url.replace('/questions', '')}`}>
                            <button type="button" className="btn btn-outline-primary mt-2">Details zur Prüfung</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Questions