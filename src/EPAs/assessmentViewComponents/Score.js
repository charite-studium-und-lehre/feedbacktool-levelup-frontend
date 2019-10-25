import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { selectors, actions } from '../Store'
import { withTranslation } from 'react-i18next'
import makeExtendable from '../../Core/makeExtendable'
import ExternAssessingWithValue from './ExternAssessingValue'
import Numbers from './Numbers'

export const colors = ['hsla(208, 51%, 27%)','hsl(188, 86%, 26%)', 'hsl(15, 100%, 25%)']
const colorsRgb = ['hsla(208, 51%, 27%, .2)', 'hsl(188, 86%, 26%, .2)', ' hsl(15, 100%, 25%, .2)']

const Score = ({ t, values, externalScore, entryId, headings, ...props }) => <div>
    <div className="row text-center">
        {[t('Habe ich gemacht'), t('Traue ich mir zu')].map( (l, i) => 
            <div key={i} className="col-sm-4 p-0" style={{ color: colors[i] }}>
                <Numbers
                    colorsRgb={colorsRgb[i]}
                    color={colors[i]}
                    {...props}
                    value={values[i]}
                    increment={_.partial(props.levelUpDone, props.entryId)}
                    decrement={_.partial(props.levelDownDone, props.entryId)} />
                {headings &&
                    <div className="font-weight-bold">
                        <div>{l}</div>
                    </div>
                }
            </div>
        )}
        <div className="col-sm-4 p-0" style={{ color: colors[2] }}>
            <Numbers
                colorsRgb={colorsRgb[2]}
                color={colors[2]}
                {...props}
                edit={false}
                maxValue={Math.max(externalScore.total, 1)}
                value={externalScore.value} />
            {headings &&
                <div className="font-weight-bold">
                    <div>{t('Wird mir zugetraut')}</div>
                </div>
            }
        </div>
    </div>
    <ExternAssessingWithValue entryId={entryId} />
</div>

const stateToProps = (state, ownProps) => ({
    values: [ 
        selectors.getScore(state, ownProps.entryId, 'done'), 
        selectors.getScore(state, ownProps.entryId, 'confident'), 
    ],
    externalScore: selectors.getExternalScore(state, ownProps.entryId),
    maxValue: selectors.getMaxScore(state, ownProps.entryId),
})

export default withTranslation()(connect(stateToProps, actions)(Score))