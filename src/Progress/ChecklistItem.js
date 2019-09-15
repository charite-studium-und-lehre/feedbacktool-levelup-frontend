import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faCalendarAlt, faEdit } from '@fortawesome/free-regular-svg-icons'
import { faUserNurse, faStethoscope, faBookMedical, faMedkit, faBook, faFirstAid, faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const icons = id => {
    switch(id) {
        case 1:
            return faEdit
        case 10:
            return faBook
        case 20:
            return faFirstAid
        case 30:
            return faUserNurse
        case 40:
            return faStethoscope
        case 50:
            return faBookMedical
        case 60:
            return faNotesMedical
        case 70:
            return faMedkit
        default:
    }
    if(id > 100 && id < 110) return faCalendarAlt
    return null
}

const ChecklistItem = props => 
    <div className="mr-2 mb-2 p-1 card text-info">
        <div className="mr-2">
            {props.link && props.done ? 
            <Link to={props.link} className="d-inline-block">
                <div style={{fontSize: '.75rem'}} >
                    <FontAwesomeIcon style={{fontSize: '1.2rem'}} className="text-info mx-2" icon={icons(props.id)} />
                    {props.label}
                    <FontAwesomeIcon style={{fontSize: '.5rem'}} className="text-info ml-1" icon={faExternalLinkAlt} />
                </div>
            </Link> :
            <span style={{fontSize: '.75rem'}} >
                <FontAwesomeIcon style={{fontSize: '1.2rem'}} className="text-info mx-2" icon={icons(props.id)} />
                {props.label}
            </span>
            }
            <FontAwesomeIcon className="ml-2" style={{color: props.done ? 'rgba(0,128,0,.6)' : 'lightgray'}} icon={props.done ? faCheckCircle : faTimesCircle} />
        </div>
    </div>

export default ChecklistItem