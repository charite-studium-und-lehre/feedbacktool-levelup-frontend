import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import SimpleBar from '../../Charting/SimpleBar'

const StationsInfo = ({t, ...props}) => 
    <div className="d-flex h-100 flex-column">
        <div className="font-weight-bold" style={{fontSize: '.8rem'}}>{props.label}</div>
        <div className="flex-grow-1 d-flex align-items-center">
            <SimpleBar value={props.result} mean={props.mean}>{props.result} %</SimpleBar>
        </div>
        <div className="row text-center " style={{fontSize: '.8rem'}}>
            <div className="col">
                <Link to={`/exams/stations/${props.id}`}>
                    <span className="text-primary">{t(`Details`)}</span>
                </Link>
            </div>
        </div>
    </div>

export default withTranslation() (StationsInfo)