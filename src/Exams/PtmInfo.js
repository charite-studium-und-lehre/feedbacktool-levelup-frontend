import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../Charting/HorizontalBarGraph'

const labels = ['richtig', 'falsch', 'weiß nicht']
const PtmInfo = props =>
    (<div>
        <div>Dein Antworten:</div>
        <div className="my-2" style={{height: '10rem'}}>
            <HorizontalBarChart yDomain={labels} data={_.range(0,3).map(i => ({y: labels[i], x: _.random(5,100) }))} />
        </div>
        <Link to={`/exams/ptm/${props.data.label}`}>
            <button type="button" className="btn btn-outline-primary my-2 w-100">Details</button>
        </Link>
        <button type="button" className="btn btn-outline-info mt-2 w-100" onClick={() => props.onClose()}>schließen</button>
    </div>)

export default PtmInfo