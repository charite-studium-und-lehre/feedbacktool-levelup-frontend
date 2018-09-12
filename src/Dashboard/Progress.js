import React from 'react'
import Chart from '../Charting/Chart'
import BarGraph from '../Charting/BarGraph'

export default function Progress(props) {
    return (<div className="card">
        <div className="card-body">
            <h5 className="card-title">Dein Fortschritt im Studium</h5>
            <div className="card-text">
            Hier kommt ein Fortschrittsbalken mit Meilensteinen.
            </div>
        </div>
        <div className="m-4">
            <Chart xDomain={[0, 17]} yDomain={[0,60]} ticks={{x:6}}>
                <BarGraph width=".75" data={new Array(16).fill(0).map(() => Math.random() * 50)}></BarGraph>
            </Chart>
        </div>
    </div>)
}