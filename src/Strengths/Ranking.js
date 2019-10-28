import React from 'react'
import _ from 'lodash'
import makeExtendable from '../Core/makeExtendable'
import SimpleBar from '../Charting/SimpleBar'
import { withTranslation } from 'react-i18next'
import COLORS from "../colors";

const Ranking = ({t, ...props}) =>
    props.subjects.length ? 
    <div>
        <div>
            {_.take(props.subjects, props.extended ? props.subjects.length : 3).map((s, i) =>
                <div key={s.code} className="py-2">
                    <h5><span >#{i+1}</span> {s.titel}</h5>
                    <SimpleBar
                        colorTotal={COLORS.progress.lighter2}
                        colorPartOfTotal={COLORS.progress.base}
                        value={s.ergebnisPunktzahl}
                        total={s.maximalPunktzahl}
                        mean={props.mean && s.durchschnittsPunktzahl}>
                        {s.ergebnisPunktzahl} von {s.maximalPunktzahl} {t(`richtig`)}
                    </SimpleBar>
                </div>
            )}
        </div>
        <div className="text-right">
            <span className="color-navigation" style={{cursor: 'pointer'}} onClick={props.toggleExtended}>
                {props.extended ? t('weniger anzeigen') : t('mehr anzeigen')}
            </span>
        </div>
    </div> :
    <div className="text-center">{t('Noch keine Ergebnisse gefunden.')}</div>

export default withTranslation()(makeExtendable(Ranking))