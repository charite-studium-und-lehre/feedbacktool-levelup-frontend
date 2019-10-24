import React from 'react'
import { withTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'

const Infos = props => (
    <div className='col-4 text-center text-nowrap'>
        <div>
            <span className='ml-1 font-weight-bold' style={{fontSize: '1.1rem'}}>{props.total}</span>
            <span className='ml-1'>{props.title}</span>
        </div>
        <div className="d-flex justify-content-center">
            <div className="text-center">
                <div style={{ color: 'green' }}><FontAwesomeIcon icon={faCheck} /></div>
                <div style={{ color: 'red' }}><FontAwesomeIcon icon={faTimes} /></div>
            </div>
            <div className="ml-1">
                <div>{props.correct}</div>
                <div>{props.wrong}</div>
            </div>
        </div>
    </div>
)

const Questions = ({ t, id }) => {
    const LegendText = Legends.Exams.MC.Questions
    return <div className='card p-3' style={{fontSize: '.9rem'}}>
        <Legend title={LegendText.title}>
            {LegendText.text}
        </Legend>
        <div className="row">
            <div className="col">
                {t('Dir wurden')} <span style={{fontSize: '1.1rem'}} className="font-weight-bold">{80}</span> {t('Fragen gestellt. Davon waren...')}
            </div>
        </div>
        <div className="row mt-3">
            <Infos title='schwer' total='30' correct='10' wrong='20' />
            <Infos title='mittel' total='50' correct='15' wrong='35' />
            <Infos title='leicht' total='15' correct='10' wrong='5' />
        </div>
        <div className="mt-3">
            <Link to={`${id}/questions`}>
                <button type="button" className="btn btn-primary">Details zu Fragen</button>
            </Link>
        </div>
    </div>
}

export default withTranslation()(Questions)