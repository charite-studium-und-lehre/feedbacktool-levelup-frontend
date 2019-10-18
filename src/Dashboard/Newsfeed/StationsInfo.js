import React from 'react'
import { withTranslation } from 'react-i18next'
import SimpleBar from '../../Charting/SimpleBar'

const StationsInfo = ({t, ...props}) => 
    <div className="d-flex h-100 flex-column">
        <div style={{fontSize: '.9rem'}}>{props.label}</div>
        <div className="flex-grow-1 d-flex align-items-center">
            <SimpleBar value={props.result} mean={props.mean}>{props.result} %</SimpleBar>
        </div>
    </div>

export default withTranslation() (StationsInfo)