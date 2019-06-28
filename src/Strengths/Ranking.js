import React from 'react'
import _ from 'lodash'
import Legend from '../Charting/Legend'
import makeExtendable from '../Core/makeExtendable'
import SimpleBar from '../Charting/SimpleBar'
import { withTranslation } from 'react-i18next'

const Ranking = ({t, ...props}) => (
    <div className="card">
        <div className="card-body">
            <Legend title={props.title}>{props.text}</Legend>
            <div>
                {_.take(props.subjects, props.extended ? props.subjects.length : 3).map((s, i) =>
                    <div key={s.name} className="py-2">
                        <h5><span className="text-primary">#{i+1}</span> {s.name}</h5>
                        <SimpleBar value={s.richtig} total={s.gesamt} mean={props.mean && s.durchschnitt}>
                            {s.richtig} von {s.gesamt} {t(`richtig`)}
                        </SimpleBar>
                    </div>
                )}
            </div>
            <div className="text-right">
                <span className="text-primary" style={{cursor: 'pointer'}} onClick={props.toggleExtended}>
                    {props.extended ? t('weniger anzeigen') : t('mehr anzeigen')}
                </span>
            </div>
        </div>
    </div>
)

export default withTranslation()(makeExtendable(Ranking))