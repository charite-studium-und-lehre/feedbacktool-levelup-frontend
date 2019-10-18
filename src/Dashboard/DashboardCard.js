import React from 'react'
import Legend from '../Charting/Legend'

export default function DashboardCard(props) {
    return (
        <div className={`${props.color} card dashboard-card with-border overflow-hidden h-100`}>
          <div className="card-body d-flex p-0">
            <div className={`${props.noPadding || 'p-3'} w-100`}>
                {(props.title || props.text) && <Legend title={props.title}>{props.text}</Legend>}
                {props.children}
            </div>
          </div>
        </div>
    );
}