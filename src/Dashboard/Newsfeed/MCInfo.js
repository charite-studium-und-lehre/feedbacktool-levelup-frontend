import React from 'react'
import SimpleBar from '../../Charting/SimpleBar'
import * as defs from '../../Exams/MC/MC'

const McInfo =  (props) =>
    <div className="d-flex h-100 flex-column" >
        <div style={{fontSize: '.9rem'}} id='MC'>{props.kurzName}</div>
        <div className="flex-grow-1 d-flex align-items-center">
            <SimpleBar
                colorTotal={defs.colorTotal}
                colorPartOfTotal={defs.colorPartOfTotal}
                total={props.gesamtErgebnis.maximalPunktzahl}
                value={props.gesamtErgebnis.ergebnisPunktzahl} >
                {props.gesamtErgebnis.ergebnisPunktzahl} von {props.gesamtErgebnis.maximalPunktzahl} richtig
            </SimpleBar>
        </div>
    </div>
export default McInfo
