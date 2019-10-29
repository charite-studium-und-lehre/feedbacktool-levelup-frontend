import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { selectors, actions } from '../Store'
import { withTranslation } from 'react-i18next'
import ExternAssessingWithValue from './ExternAssessingValue'
import Numbers from './Numbers'

export const colors = ['hsla(208, 51%, 27%)','hsl(188, 86%, 26%)', 'hsl(15, 100%, 25%)']
const colorsRgb = ['hsla(208, 51%, 27%, .2)', 'hsl(188, 86%, 26%, .2)', ' hsl(15, 100%, 25%, .2)']

const Score = ({ t, values, externalScore, l, levelUpDone, levelUpConfident, levelDownDone, levelDownConfident, entryId, entry, headings, ...props }) => {
    const uppers = [levelUpDone, levelUpConfident]
    const downers = [levelDownDone, levelDownConfident]
    return <div>
        <div className="row text-center">
            {[t('Habe ich gemacht'), t('Traue ich mir zu')].map( (l, i) => 
                <div key={i} className="col-sm-4 p-0 pt-2" style={{ color: colors[i] }}>
                    <Numbers
                        colorsRgb={colorsRgb[i]}
                        color={colors[i]}
                        {...props}
                        value={values[i]}
                        increment={_.partial(uppers[i], entry)}
                        decrement={_.partial(downers[i], entry)} />
                    {headings &&
                        <div className="font-weight-bold pb-2">
                            <div>{l}</div>
                        </div>
                    }
                </div>
            )}
            <div className="col-sm-4 p-0 pt-2" style={{ color: colors[2] }}>
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
}

const stateToProps = (state, ownProps) => ({
    entry: selectors.getById(state, ownProps.entryId),
    values: [ 
        selectors.getScore(state, ownProps.entryId, 'done'), 
        selectors.getScore(state, ownProps.entryId, 'confident'), 
    ],
    externalScore: selectors.getExternalScore(state, ownProps.entryId),
    maxValue: selectors.getMaxScore(state, ownProps.entryId),
})

export default withTranslation()(connect(stateToProps, actions)(Score))