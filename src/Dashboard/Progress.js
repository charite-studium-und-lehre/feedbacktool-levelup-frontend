import React from 'react'
import Chart from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph';

export default function Progress(props) {
    return (<div className="card progress-card">
        <div className="card-body">
            <h5 className="card-title">Dein Fortschritt im Studium</h5>
            <div className="card-text">
            Hier kommt ein Fortschrittsbalken mit Meilensteinen.
            </div>
            <Chart xDomain={[1,8]} yDomain={[0,2]} noAxis>
                <LineGraph labels data={new Array(4).fill(1).map((d,i) => ({x: i+5, y: d}))} color="gray"></LineGraph>
                <LineGraph labels data={new Array(5).fill(1).map((d,i) => ({x: i+1, y: d}))} color="limegreen"></LineGraph>
            </Chart>
        </div>
    </div>)
}