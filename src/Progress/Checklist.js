import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import ChecklistItem from './ChecklistItem'
import { selectors } from './Store'

const percentDone = ({ entries }) => selectors.getDone(entries) / selectors.getTotal(entries)

const Checklist = props =>
    <div style={{borderLeft: `1rem solid ${percentDone(props.data) === 1 ? 'rgba(0,128,0,.2)' : percentDone(props.data) > 0 ? 'rgba(255,0,0,.2)' : 'rgba(0,0,0,.2)'}`}}>
        <div className="p-2" style={{borderTop: '1px dashed rgba(0,0,0,.1)'}}>
            <div className="d-flex">
                <div style={{fontSize: '.75rem'}} className="flex-fill mr-2 mb-1 font-italic">{props.data.label}</div>
                <div><FontAwesomeIcon style={{color: percentDone(props.data) === 1 ? 'rgba(0,128,0,.6)' : 'lightgray'}} icon={percentDone(props.data) === 1 ? faCheckCircle : faTimesCircle} /></div>
            </div>
            <div className="d-flex flex-row flex-wrap">
            {props.data.entries.map(e => <ChecklistItem key={e.label} label={e.label} done={e.done} link={e.link} /> )}
            </div>
        </div>
    </div>

export default Checklist