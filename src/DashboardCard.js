import React from 'react'

export default function DashboardCard(props) {
    return (
        <div className="card">
          <div className="card-body d-flex p-0">
            <div className="bg-primary text-white text-center p-2" style={{width: '6rem', whiteSpace: "nowrap"}}>
                <h3 className="my-auto">{props.header}</h3>
            </div>
            <div className="p-2 w-100">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                {props.children}
            </div>
          </div>
        </div>
    );
}