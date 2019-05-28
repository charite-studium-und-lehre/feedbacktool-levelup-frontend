import React from 'react'

export default function DashboardCard(props) {
    return (
        <div className={`${props.color} card dashboard-card with-border`}>
          <div className="card-body d-flex p-0">
            <div className="p-3 w-100">
                <h5 className="card-title">{props.title} {props.result && <span className="ml-3" style={{color: 'red'}}>{props.result}</span>}</h5>
                <p style={{fontSize: '.8rem'}} className="card-text">{props.text}</p>
                {props.children}
            </div>
          </div>
        </div>
    );
}