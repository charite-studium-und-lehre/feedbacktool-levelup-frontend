import React from 'react'
import { LinearChart } from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph';

const Progress = props => (
    <div className="card progress-card">
        <div className="card-body">
            <h5 className="card-title">Dein Studienfortschritt</h5>
            <div className="card-text">
            Hier siehst Du deinen Studienfortschritt und deine bereits erreichten Meilensteinen.
            </div>
            <LinearChart xDomain={[1,10]} yDomain={[0,2]}>
                <LineGraph withLabels data={new Array(4).fill(1).map((d,i) => ({x: i+5, y: d, label: `${i+5}. Semester`}))} color="gray"></LineGraph>
                <LineGraph withLabels data={new Array(5).fill(1).map((d,i) => ({x: i+1, y: d, label: `${i+1}. Semester`}))} color="limegreen"></LineGraph>
            </LinearChart>
        </div>
    </div>
)

export default Progress
