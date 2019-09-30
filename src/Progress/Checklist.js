import React from 'react'
import ChecklistItem from './ChecklistItem'
import { selectors } from './Store'

export const colors = ['rgba(0,158,0,.4)', 'rgba(168,168,168,.4)', 'rgba(255,0,0,.4)']
const percentDone = ({ entries }) => selectors.getDone(entries) / selectors.getTotal(entries)
const Checklist = props => {
    const color = colors[percentDone(props.data) === 1 ? 0 : percentDone(props.data) === 0 ? 2 : 1]
    return <div style={{borderLeft: `1rem solid ${color}`}}>
        <div className="p-2" style={{borderTop: '1px dashed rgba(0,0,0,.1)'}}>
            <div style={{fontSize: '.75rem'}} className="flex-fill mr-2 mb-1 font-italic">{props.data.label}</div>
            <div className="d-flex flex-row flex-wrap">
            {props.data.entries.map(e => <ChecklistItem key={e.label} {...e} /> )}
            </div>
        </div>
    </div>
}

export default Checklist