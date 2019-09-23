import React from 'react'

export default function DashboardCard(props) {
    return (
        <div className={`${props.color} card dashboard-card with-border overflow-hidden`}>
          <div className="card-body d-flex p-0">
            <div className={`${props.noPadding || 'p-3'} w-100`}>
                <h5 className="card-title">{props.title} {props.result && <span className="mr-3 float-right" style={{color: 'red'}}>{props.result}</span>}</h5>
                {props.text && <p style={{fontSize: '.8rem'}} className="card-text">{props.text}</p>}
                {props.children}
            </div>
          </div>
        </div>
    );
}