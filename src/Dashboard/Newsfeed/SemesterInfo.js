import React from 'react'
import { Link } from 'react-router-dom'
import SimpleBar from '../../Charting/SimpleBar'
import { withTranslation } from 'react-i18next'

const SemesterInfo = withTranslation() ( ({ t, ...props }) =>
    <div className="d-flex h-100 flex-column">
        <div className="font-weight-bold" style={{fontSize: '.8rem'}}>{props.label}</div>
        <div className="flex-grow-1 d-flex align-items-center">
            <SimpleBar total={80} value={props.result} mean={props.mean}>
                {props.result} von 80 richtig
            </SimpleBar>
        </div>
        <div className="row text-center " style={{fontSize: '.8rem'}}>
            <div className="col-6 pr-0">
                <Link to={`/exams/semester/${props.id}`}>
                    <span className="text-primary">{t(`Details`)}</span>
                </Link>
            </div>
            <div className="col-6 p-0 text-center">
                <Link to={`/exams/semester/${props.id}/questions`}>
                    <span className="text-primary">{t(`MC-Fragen`)}</span>
                </Link>
            </div>
        </div>
    </div>
)
export default SemesterInfo
