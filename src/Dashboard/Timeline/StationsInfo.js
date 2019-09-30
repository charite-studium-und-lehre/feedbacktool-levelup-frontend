import React from 'react'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../../Charting/HorizontalBarGraph'
import { withTranslation } from 'react-i18next'
const bars = ['Durchschnitt', 'Dein Ergebnis']

const StationsInfo = ({t, ...props}) => {
    const data = bars.map((d, i) => ({y: d, x: i ? props.data.result : props.data.mean, label: i ? `${props.data.result} %` : `${props.data.mean} %` }))
    return (<div>
        <div className="mt-1" style={{height: '4.3rem'}}>
            <HorizontalBarChart noaxis yDomain={bars} data={data} />
        </div>
        <div>{(t`geschrieben am `)}<span className="font-weight-bold"> {props.data.x.toLocaleDateString()}</span></div>
        <span className="text-primary float-right" onClick={() => props.onClose()}>{t(`schließen`)}</span>
        <Link to={`/exams/stations/${props.data.id}`}>
            <span className="text-primary">{t(`Details`)}</span>
        </Link>
    </div>)
}

export default withTranslation() (StationsInfo)