import React from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import ChecklistItem from './ChecklistItem'

const getDone = entry => entry.isLeaf ? [entry.done] : _.flatMap(entry.entries, e => getDone(e))
const percentDone = t => _.mean(getDone(t))

const Checklist = props => {
    return props.data.isLeaf ? 
        <ChecklistItem label={props.data.label} done={props.data.done} /> :
        <div className={`card m-2 p-2 with-shadow animated ${props.className}`} >
            <div className="d-flex">
                <div style={{fontSize: '.75rem'}} className="flex-fill mr-2 mb-1 font-weight-bold">{props.data.label}</div>
                <div><FontAwesomeIcon style={{color: percentDone(props.data) === 1 ? 'rgba(0,128,0,.6)' : 'lightgray'}} icon={percentDone(props.data) === 1 ? faCheckCircle : faTimesCircle} /></div>
            </div>
            {props.data.entries && props.data.entries.map((e,i) => <Checklist key={i} data={e} /> )}
        </div>
}

export default Checklist