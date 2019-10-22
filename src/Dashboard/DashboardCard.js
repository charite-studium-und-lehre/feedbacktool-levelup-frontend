import React from 'react'

export default function DashboardCard(props) {
    return (
        <div className={`${props.color} card dashboard-card with-border overflow-hidden h-100 mt-2`}>
          <div className="card-body d-flex p-0">
            <div className={`${props.noPadding || 'p-3'} w-100 d-flex flex-column`}>
                <h5>{props.title}</h5>
                <div className="flex-grow-1">
                  {props.children}
                </div>
            </div>
          </div>
        </div>
    );
}