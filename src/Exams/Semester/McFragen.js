import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const mcFragen = () => {
    const Infos = (props) => (
        <div className='col-4'>
            <div className='with-shadow'>
                <div className='font-weight-bold with-shadow'>
                    <span className='ml-1 py-1'>{props.title}</span>
                    <span className='ml-2'>{props.complete}</span>
                </div>
                <div className='ml-2'>
                    <div>
                        <span className='mr-2' style={{ color: 'green' }}><FontAwesomeIcon icon={faCheckCircle} /></span>
                        <span className='mr-3'>{props.difficult}</span>
                    </div>
                    <div>
                        <span className='mr-2' style={{ color: 'red' }}><FontAwesomeIcon icon={faTimesCircle} /></span>
                        <span className='mr-3'>{props.easy}</span>
                    </div>
                </div>
            </div>
        </div>
    )
    return <div>
            <h5>Gestelte Fragen:</h5>
        <div className=' row mt-3'>
            <Infos title='Schwer' complete='30' difficult='10' easy='20' />
            <Infos title='Mittel' complete='50' difficult='15' easy='35' />
            <Infos title='Leicht' complete='15' difficult='10' easy='5' />
        </div>
        <div className="mt-3">
            <Link to='1.%20Fachsemester/questions'>
                <button type="button" className="btn btn-primary mt-3">Details zu Fragen</button>
            </Link>
        </div>
    </div>
}

export default mcFragen