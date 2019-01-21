import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../Charting/HorizontalBarGraph'

const labels = ['nicht beantwortet', 'falsch', 'richtig']
const PtmInfo = props =>
    (<div>
        <div>Deine Antworten:</div>
        <div className="mt-1" style={{height: '5.3rem'}}>
            <HorizontalBarChart noaxis yDomain={labels} data={new Array(3).fill(0).map((d,i) => ({y: labels[i], x: _.random(5,100) }))} />
        </div>
        <span className="text-primary float-right" onClick={() => props.onClose()}>schließen</span>
        <Link to={`/exams/ptm/${props.data.label}`}>
            <span className="text-primary">Details</span>
        </Link>
    </div>)

export default PtmInfo