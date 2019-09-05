import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import ChecklistItem from './ChecklistItem'
import { selectors } from './Store'

const percentDone = ({ entries }) => selectors.getDone(entries) / selectors.getTotal(entries)
const Checklist = props => {
    const color = percentDone(props.data) === 1 ? 'rgba(0,158,0,.4)' : percentDone(props.data) === 0 ? 'rgba(255,0,0,.4)' : 'rgba(168,168,168,.4)'
    return <div style={{borderLeft: `1rem solid ${color}`}}>
        <div className="p-2" style={{borderTop: '1px dashed rgba(0,0,0,.1)'}}>
            {/* <div style={{height: '1rem', backgroundColor: color, backgroundImage: `linear-gradient(135deg, transparent 0 25%, rgba(255,255,255,1) 25% 50%, transparent 50% 75%, rgba(255,255,255,1) 75% 100%)`, backgroundSize: '2.5rem 2.5rem'}}>
            </div> */}
            <div className="d-flex">
                <div style={{fontSize: '.75rem'}} className="flex-fill mr-2 mb-1 font-italic">{props.data.label}</div>
                <div><FontAwesomeIcon style={{color: percentDone(props.data) === 1 ? 'rgba(0,128,0,.6)' : 'lightgray'}} icon={percentDone(props.data) === 1 ? faCheckCircle : faTimesCircle} /></div>
            </div>
            <div className="d-flex flex-row flex-wrap">
            {props.data.entries.map(e => <ChecklistItem key={e.label} label={e.label} done={e.done} link={e.link} /> )}
            </div>
        </div>
    </div>
}

export default Checklist