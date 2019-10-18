import React from 'react'
import SimpleBar from '../../Charting/SimpleBar'
import { withTranslation } from 'react-i18next'

const SemesterInfo = withTranslation() ( ({ t, ...props }) =>
    <div className="d-flex h-100 flex-column">
        <div style={{fontSize: '.9rem'}}>{props.label}</div>
        <div className="flex-grow-1 d-flex align-items-center">
            <SimpleBar total={80} value={props.result} mean={props.mean}>
                {props.result} von 80 richtig
            </SimpleBar>
        </div>
    </div>
)
export default SemesterInfo
