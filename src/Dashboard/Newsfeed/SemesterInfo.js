import React from 'react'
import SimpleBar from '../../Charting/SimpleBar'
import { withTranslation } from 'react-i18next'

const SemesterInfo = withTranslation() ( ({ t, ...props }) =>
    <div className="d-flex h-100 flex-column">
        <div style={{fontSize: '.9rem'}}>{props.name}</div>
        <div className="flex-grow-1 d-flex align-items-center">
            <SimpleBar total={props.ergebnis.gesamtPunktzahl} value={props.ergebnis.ergebnisPunkte} mean={props.ergebnis.durchschnitt}>
                {props.ergebnis.ergebnisPunkte} von {props.ergebnis.gesamtPunktzahl} richtig
            </SimpleBar>
        </div>
    </div>
)
export default SemesterInfo
