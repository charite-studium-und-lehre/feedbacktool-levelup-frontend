import React from 'react'
import _ from 'lodash/fp'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import { selectors, actions } from './Questions/Store'

const Infos = ({ questions, title }) => (
    <div className='col-4 text-center text-nowrap'>
        <div>
            <span className='ml-1 font-weight-bold' style={{fontSize: '1.1rem'}}>{questions.length}</span>
            <span className='ml-1'>{title}</span>
        </div>
        <div className="d-flex justify-content-center">
            <div className="text-center">
                <div style={{ color: 'var(--color-graphs-correct-small-icon)' }}><FontAwesomeIcon icon={faCheck} /></div>
                <div style={{ color: 'var(--color-graphs-wrong)' }}><FontAwesomeIcon icon={faTimes} /></div>
            </div>
            <div className="ml-1">
                <div>{_.sumBy( q => q.antworten.some( a => a.ausgewaehlt && a.richtig ), questions )}</div>
                <div>{_.sumBy( q => q.antworten.some( a => a.ausgewaehlt && !a.richtig ), questions )}</div>
            </div>
        </div>
    </div>
)

const stateToProps = (state, ownProps) => ({ questions: selectors.getById(state, ownProps.id) })
const loadedById = (state, ownProps) => selectors.loaded(state, ownProps.id)
const loadById = ownProps => actions.load(ownProps.id)
const Questions = _.compose([needsData(loadedById, loadById), connect(stateToProps),])(({ id, questions }) =>
    questions.length ? <div>
        <div className="row">
            <div className="col">
                Auswertung für 
                <span style={{fontSize: '1.1rem'}} className="font-weight-bold mr-1"> {questions.length}</span>
                Fragen:
            </div>
        </div>
        <div className="row mt-3">
            <Infos title='schwer' questions={questions.filter( q => q.durchschnittRichtig < .4 )} />
            <Infos title='mittel' questions={questions.filter( q => q.durchschnittRichtig >= .4 && q.durchschnittRichtig <= .8 )} />
            <Infos title='leicht' questions={questions.filter( q => q.durchschnittRichtig > .8 )} />
        </div>
        <div className="mt-2" style={{fontSize: '.7rem'}}>
            {Legends.Exams.MC.Questions.text}
        </div>
        <div className="mt-3">
            <Link to={`${id}/questions`}>
                <button type="button" className="btn color-button-color"id='Button-> Details zu Fragen'>Details zu Fragen</button>
            </Link>
        </div>
    </div> : 
    <div className="text-center">Zu dieser Prüfung liegen uns leider keine Fragen und Antworten vor.</div>
)

export default props => 
    <div className='card p-3' style={{fontSize: '.9rem'}}>
        <Legend title={Legends.Exams.MC.Questions.title} />
        <Questions {...props} />
    </div>