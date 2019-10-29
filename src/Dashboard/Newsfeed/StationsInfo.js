import React from 'react'
import { withTranslation } from 'react-i18next'
import SimpleBar from '../../Charting/SimpleBar'
import * as defs from "../../Exams/Stations/Stations";

const StationsInfo = ({t, name, gesamtErgebnis }) => 
    <div className="d-flex h-100 flex-column">
        <div style={{fontSize: '.9rem'}}>{name}</div>
        <div className="flex-grow-1 d-flex align-items-center">
            <SimpleBar
                colorTotal={defs.colorTotal}
                colorPartOfTotal={defs.colorPartOfTotal}
                value={gesamtErgebnis.ergebnisProzentzahl}
                mean={gesamtErgebnis.durchschnittProzentzahl}
                total={1}>
                {Math.round(gesamtErgebnis.ergebnisProzentzahl * 100)} %
            </SimpleBar>
        </div>
    </div>

export default withTranslation() (StationsInfo)