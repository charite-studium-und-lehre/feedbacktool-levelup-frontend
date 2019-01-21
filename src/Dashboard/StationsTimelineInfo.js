import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../Charting/HorizontalBarGraph'

const categories = ['Klinisch', 'Vorklinisch']
const StationsInfo = props =>
    (<div>
        <div>Dein Ergebnis:<span className="font-weight-bold"> {props.data.result} %</span></div>
        <div>Durchschnitt:<span className="font-weight-bold"> {props.data.mean} %</span></div>
        <div>geschrieben am <span className="font-weight-bold"> {props.data.x.toLocaleDateString()}</span></div>
        <span className="text-primary float-right" onClick={() => props.onClose()}>schließen</span>
        <Link to={`/exams/stations/${props.data.label}`}>
            <span className="text-primary">Details</span>
        </Link>
    </div>)

export default StationsInfo