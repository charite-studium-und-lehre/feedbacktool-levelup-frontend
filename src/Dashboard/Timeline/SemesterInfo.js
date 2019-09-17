import React from 'react'
import { Link } from 'react-router-dom'
import { HorizontalBarChart } from '../../Charting/HorizontalBarGraph'
import { withTranslation } from 'react-i18next'

export default withTranslation() (function SemesterInfo ({ t, ...props }) {
    const data = [
        { y: 'Durchschnitt', x: props.data.mean, label: `${props.data.mean} %` },
        { y: 'Dein Ergebnis', x: props.data.result, label: `${props.data.result} %` },
    ]

    return (<div>
        <div className="mt-1" style={{height: '4.3rem'}}>
            <HorizontalBarChart noaxis yDomain={data.map(d => d.y)} data={data} />
        </div>
        <div className="row">
            <div className="col-4 pr-0">
                <Link to={`/exams/semester/${props.data.id}`}>
                    <span className="text-primary">{t(`Details`)}</span>
                </Link>
            </div>
            <div className="col-4 p-0 text-center">
                <Link to={`/exams/semester/${props.data.id}/questions`}>
                    <span className="text-primary">{t(`MC-Fragen`)}</span>
                </Link>
            </div>
            <div className="col-4 pl-0 text-right">
                <span className="text-primary" style={{cursor: 'pointer'}} onClick={() => props.onClose()}>{t(`schließen`)}</span>
            </div>
        </div>
    </div>)
}
)
