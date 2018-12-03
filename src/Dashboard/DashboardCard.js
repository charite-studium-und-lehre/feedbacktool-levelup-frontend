import React from 'react'

export default function DashboardCard(props) {
    return (
        <div className={`${props.color} card dashboard-card with-border`}>
          <div className="card-body d-flex p-0">
            {/* <div className="text-white text-center p-2" style={{backgroundColor:'gray', width: '6rem', whiteSpace: "nowrap"}}>
                <h3 className="my-auto">{props.header}</h3>
            </div> */}
            <div className="p-3 w-100">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                {props.children}
            </div>
          </div>
        </div>
    );
}