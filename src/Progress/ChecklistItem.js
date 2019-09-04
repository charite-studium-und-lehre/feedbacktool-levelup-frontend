import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ChecklistItem = props => 
    <div className="mr-2 mb-2 p-1 card text-info">
        <div className="mr-2 text-nowrap">
            {props.link && props.done ? 
            <Link to={props.link} className="d-inline-block">
                <div style={{fontSize: '.75rem'}} >{props.label}
                    <FontAwesomeIcon style={{fontSize: '.5rem'}} className="text-info ml-1" icon={faExternalLinkAlt} />
                </div>
            </Link> :
            <span style={{fontSize: '.75rem'}} >{props.label}</span>
            }
            <FontAwesomeIcon className="ml-2" style={{color: props.done ? 'rgba(0,128,0,.6)' : 'lightgray'}} icon={props.done ? faCheckCircle : faTimesCircle} />
        </div>
    </div>

export default ChecklistItem