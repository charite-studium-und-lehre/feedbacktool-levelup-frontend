import React from 'react'
import ChecklistItem from './ChecklistItem'

export const colors = ['var(--color-graphs-correct)', 'var(--color-graphs-missing-answer)', 'var(--color-graphs-wrong)']
const Checklist = ({ completed, prereq, label, entries }) => {
    const color = colors[ completed ? 0 : prereq ? 1 : 2]
    return <div style={{borderLeft: `1rem solid ${color}`}}>
        <div className="p-2" style={{borderTop: '1px solid rgba(0,0,0,.1)'}}>
            <div style={{fontSize: '.75rem'}} className="flex-fill mr-2 mb-1 font-italic">{label}</div>
            <div className="d-flex flex-row flex-wrap">
            {entries.map(e => <ChecklistItem key={e.code} {...e} /> )}
            </div>
        </div>
    </div>
}

export default Checklist