import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const mcFragen = (props) => {
const Infos = (props)=> (
<div>
    <div>
    <span>
        <span className='mr-3'>{props.resut}</span>
        <span className='mr-2' style={{ color: props.color }}><FontAwesomeIcon icon={props.icon} /></span>
        {<span className='mr-3'>{props.text}</span> }
        </span>
    </div>
</div>
)
   return <div>
        <div className='mt-3'>
        <Infos resut='50/80' text='Korrekt' color='green' icon={faCheckCircle}/>
        <Infos resut='30/80' text='Korrekt und schwer' color='green' icon={faCheckCircle}/>
        <Infos resut='30/80' text='Falsch' color='red' icon={faTimesCircle}/>
        <Infos resut='10/80' text='Falsch und schwer' color='red' icon={faTimesCircle}/>
        </div>
        <div className="mt-3">
            <Link to='1.%20Fachsemester/questions'>
                <button type="button" className="btn btn-primary mt-3">Details zu Fargen</button>
            </Link>
        </div>
    </div>
}

export default mcFragen