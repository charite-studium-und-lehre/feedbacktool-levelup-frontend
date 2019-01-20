import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { HorizontalBarChart } from '../../Charting/HorizontalBarGraph'

const labels = ['richtig', 'falsch', 'nicht beantwortet']
const Subject = props => (
    <div className="card m-2 flex-grow-1" style={{width: '20rem'}}>
        <div className="card-body">
            <h4>{props.title}</h4>
            <div className="p-2 pl-5" style={{height: '6rem'}} >
                <HorizontalBarChart yDomain={labels} data={new Array(3).fill(0).map((d,i) => ({y: labels[i], x: _.random(5,100)}))} />
            </div>
            <Link to={`/strengths/${(props.title)}`} className="mt-2 float-right text-primary" style={{fontSize:".8rem", textDecoration:"underline"}}>zu deiner Entwicklung in diesem Fach</Link>
        </div>
    </div>
)

export default Subject