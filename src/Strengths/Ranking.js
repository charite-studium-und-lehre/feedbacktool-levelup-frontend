import React from 'react'
import _ from 'lodash'
import makeExtendable from '../Core/makeExtendable'
import SimpleBar from '../Charting/SimpleBar'
import { withTranslation } from 'react-i18next'

const Ranking = ({t, ...props}) =>
    props.subjects.length ? 
    <div>
        <div>
            {_.take(props.subjects, props.extended ? props.subjects.length : 3).map((s, i) =>
                <div key={s.code} className="py-2">
                    <h5><span className="text-primary">#{i+1}</span> {s.titel}</h5>
                    <SimpleBar value={s.correct} total={s.total} mean={props.mean && s.durchschnittPunktzahl}>
                        {s.correct} von {s.total} {t(`richtig`)}
                    </SimpleBar>
                </div>
            )}
        </div>
        <div className="text-right">
            <span className="text-primary" style={{cursor: 'pointer'}} onClick={props.toggleExtended}>
                {props.extended ? t('weniger anzeigen') : t('mehr anzeigen')}
            </span>
        </div>
    </div> :
    <div className="text-center">{t('Noch keine Ergebnisse gefunden.')}</div>

export default withTranslation()(makeExtendable(Ranking))