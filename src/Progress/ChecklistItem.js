import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ChecklistItem = props => 
    <div className="my-2 p-1 card text-info d-flex flex-row">
        <div className="flex-fill m-auto mr-2">
            {props.link && props.done ? 
            <Link to={props.link}>
                <div style={{fontSize: '.75rem'}} >{props.label}
                    <FontAwesomeIcon style={{fontSize: '.5rem'}} className="text-info ml-1" icon={faExternalLinkAlt} />
                </div>
            </Link> :
            <div style={{fontSize: '.75rem'}} >{props.label}</div>
            }
        </div>
        <div className="ml-1"><FontAwesomeIcon style={{color: props.done ? 'rgba(0,128,0,.6)' : 'lightgray'}} icon={props.done ? faCheckCircle : faTimesCircle} /></div>
    </div>

export default ChecklistItem