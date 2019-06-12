import React from 'react'
import _ from 'lodash'
import Legend from '../Charting/Legend'
import makeExtendable from '../Core/makeExtendable'
import SimpleBar from '../Charting/SimpleBar'
import { withTranslation } from 'react-i18next'

const Ranking = (props, {t}) =>
    <div className="card">
        <div className="card-body">
            <Legend title={props.title}>{props.text}</Legend>
            <div>
                {_.take(props.subjects, props.extended ? props.subjects.length : 3).map((s, i) =>
                    <div key={s.title} className="py-2">
                        <h5><span className="text-primary">#{i+1}</span> {s.title}</h5>
                        <SimpleBar value={s.correct} total={s.questions} mean={props.mean && s.mean}>
                            {s.correct} von {s.questions} {t(`richtig`)}
                        </SimpleBar>
                    </div>
                )}
            </div>
            <div className="text-right">
                <span className="text-primary" style={{cursor: 'pointer'}} onClick={props.toggleExtended}>
                    {props.extended ? 'weniger anzeigen' : 'mehr anzeigen'}
                </span>
            </div>
        </div>
    </div>

export default withTranslation() (makeExtendable(Ranking))