import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'

const ChecklistItem = props => 
    <div className="my-2 p-1 card text-info d-flex flex-row">
        <div style={{fontSize: '.75rem'}} className="flex-fill m-auto mr-2">{props.label}</div>
        <div><FontAwesomeIcon style={{color: props.done ? 'rgba(0,128,0,.6)' : 'lightgray'}} icon={props.done ? faCheckCircle : faTimesCircle} /></div>
    </div>

export default ChecklistItem