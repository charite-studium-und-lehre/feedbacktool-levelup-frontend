import React from 'react'
import BaseChart from './BaseChart'
import LineGraph from './LineGraph'

export default function DashboardCard(props) {
    return (
        <div className="card" style={{maxWidth: props.width || '100%'}}>
          <div className="card-body d-flex p-0">
            <div className="bg-primary text-white text-center p-2" style={{whiteSpace: "nowrap"}}>
                <h3 className="my-auto">{props.header}</h3>
            </div>
            <div className="p-2">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <div className="m-3">
                    <BaseChart yDomain={[0,100]} xDomain={[0,9]}>
                        <LineGraph data={new Array(10).fill(0).map(() => Math.random() * 100)} color="rgba(64,64,64,.3)"></LineGraph>
                    </BaseChart>
                </div>
            </div>
          </div>
        </div>
    );
}