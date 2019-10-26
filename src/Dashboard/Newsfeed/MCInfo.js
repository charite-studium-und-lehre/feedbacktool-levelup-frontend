import React from 'react'
import SimpleBar from '../../Charting/SimpleBar'
import { withTranslation } from 'react-i18next'

const McInfo = withTranslation() ( ({ t, ...props }) =>
    <div className="d-flex h-100 flex-column">
        <div style={{fontSize: '.9rem'}}>{props.name}</div>
        <div className="flex-grow-1 d-flex align-items-center">
            <SimpleBar total={props.gesamtErgebnis.maximalPunktzahl} value={props.gesamtErgebnis.ergebnisPunktzahl} mean={props.gesamtErgebnis.durchschnittsPunktzahl}>
                {props.gesamtErgebnis.ergebnisPunktzahl} von {props.gesamtErgebnis.maximalPunktzahl} richtig
            </SimpleBar>
        </div>
    </div>
)
export default McInfo
