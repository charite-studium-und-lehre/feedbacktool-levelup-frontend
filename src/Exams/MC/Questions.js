import React from 'react'
import _ from 'lodash/fp'
import { withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import { selectors, actions } from './Store'

const Infos = ({ questions, title }) => (
    <div className='col-4 text-center text-nowrap'>
        <div>
            <span className='ml-1 font-weight-bold' style={{fontSize: '1.1rem'}}>{questions.length}</span>
            <span className='ml-1'>{title}</span>
        </div>
        <div className="d-flex justify-content-center">
            <div className="text-center">
                <div style={{ color: 'green' }}><FontAwesomeIcon icon={faCheck} /></div>
                <div style={{ color: 'red' }}><FontAwesomeIcon icon={faTimes} /></div>
            </div>
            <div className="ml-1">
                <div>{_.sumBy( q => q.antworten.some( a => a.ausgewaehlt && a.richtig ), questions )}</div>
                <div>{_.sumBy( q => q.antworten.some( a => a.ausgewaehlt && !a.richtig ), questions )}</div>
            </div>
        </div>
    </div>
)

const stateToProps = (state, ownProps) => ({ questions: selectors.getById(state, ownProps.id).fragen })
const Questions = _.compose([needsData(selectors.loaded, actions.load), connect(stateToProps), withTranslation()])(({ t, id, questions }) => {
    const LegendText = Legends.Exams.MC.Questions
    return <div className='card p-3' style={{fontSize: '.9rem'}}>
        <Legend title={LegendText.title}>
            {LegendText.text}
        </Legend>
        <div className="row">
            <div className="col">
                {t('Dir wurden')} <span style={{fontSize: '1.1rem'}} className="font-weight-bold">{questions.length}</span> {t('Fragen gestellt. Davon waren...')}
            </div>
        </div>
        <div className="row mt-3">
            <Infos title='schwer' questions={questions.filter( q => q.durchschnittRichtig < .4 )} />
            <Infos title='mittel' questions={questions.filter( q => q.durchschnittRichtig >= .4 && q.durchschnittRichtig <= .8 )} />
            <Infos title='leicht' questions={questions.filter( q => q.durchschnittRichtig > .8 )} />
        </div>
        <div className="mt-3">
            <Link to={`${id}/questions`}>
                <button type="button" className="btn btn-primary">Details zu Fragen</button>
            </Link>
        </div>
    </div>
})

export default Questions