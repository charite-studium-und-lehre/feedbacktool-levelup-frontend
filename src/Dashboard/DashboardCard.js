import React from 'react'

export default function DashboardCard(props) {
    return (
        <div className={`${props.color} card dashboard-card with-border overflow-hidden h-100`}>
          <div className="card-body d-flex p-0">
            <div className={`${props.noPadding || 'p-3'} w-100`}>
                {props.title && <h5 className="card-title">{props.title}</h5>}
                {props.text && <p style={{fontSize: '.8rem'}} className="card-text">{props.text}</p>}
                {props.children}
            </div>
          </div>
        </div>
    );
}