import React from 'react'
import Legend from '../Charting/Legend'

export default function DashboardCard(props) {
    return (
        <div className={`${props.color} card dashboard-card with-border overflow-hidden h-100 mt-2`}>
          <div className="card-body d-flex p-0">
            <div className={`${props.noPadding || 'p-3'} w-100 d-flex flex-column`}>
                <div>
                  {(props.title || props.text) && <Legend title={props.title}>{props.text}</Legend>}
                </div>
                <div className="flex-grow-1">
                  {props.children}
                </div>
            </div>
          </div>
        </div>
    );
}