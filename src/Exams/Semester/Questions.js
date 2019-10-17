import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'

const Infos = (props) => (
    <div className='col-4'>
        <div className='with-shadow'>
            <div className='font-weight-bold'>
                <span className='ml-1 py-1'>{props.title}</span>
                <span className='ml-2'>{props.complete}</span>
            </div>
            <div className='ml-2'>
                <div>
                    <span className='mr-2' style={{ color: 'green' }}><FontAwesomeIcon icon={faCheckCircle} /></span>
                    <span className='mr-3'>{props.correct}</span>
                </div>
                <div>
                    <span className='mr-2' style={{ color: 'red' }}><FontAwesomeIcon icon={faTimesCircle} /></span>
                    <span className='mr-3'>{props.wrong}</span>
                </div>
            </div>
        </div>
    </div>
)

const Questions = () => {
    const LegendText = Legends.Exams.Semester.Questions
    return <div className='card p-3'>
        <Legend title={LegendText.title}>
            {LegendText.text}
        </Legend>
        <div className=' row mt-3'>
            <Infos title='Schwer' complete='30' correct='10' wrong='20' />
            <Infos title='Mittel' complete='50' correct='15' wrong='35' />
            <Infos title='Leicht' complete='15' correct='10' wrong='5' />
        </div>
        <div className="mt-3">
            <Link to='1.%20Fachsemester/questions'>
                <button type="button" className="btn btn-primary mt-3">Details zu Fragen</button>
            </Link>
        </div>
    </div>
}

export default Questions