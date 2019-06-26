import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../Charting/HorizontalBarGraph'
import { withTranslation } from 'react-i18next'

const categories = ['Klinisch', 'Vorklinisch']
const StationsInfo = (t , ...props ) =>
    (<div>
        <div>{t(`Dein Ergebnis:`)}<span className="font-weight-bold"> {props.data.result} %</span></div>
        <div>{t(`Durchschnitt:`)}<span className="font-weight-bold"> {props.data.mean} %</span></div>
        <div>{t(`geschrieben am `)}<span className="font-weight-bold"> {props.data.x.toLocaleDateString()}</span></div>
        <div className="my-2" style={{height: '5rem'}}>
            <HorizontalBarChart yDomain={categories} data={[{y: categories[0], x: _.random(5,100)}, {y: categories[1], x: _.random(5,100)}]} />
        </div>
        <Link to={`/exams/stations/${props.data.label}`}>
            <button type="button" className="btn btn-outline-primary my-2 w-100">{t(`Details`)}</button>
        </Link>
        <button type="button" className="btn btn-outline-info mt-2 w-100" onClick={() => props.onClose()}>{t(`schließen`)}</button>
    </div>)

export default withTranslation() (StationsInfo)