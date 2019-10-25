import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { selectors, actions } from '../Store'
import { withTranslation } from 'react-i18next'
import { SlideDown } from 'react-slidedown'
import makeExtendable from '../../Core/makeExtendable'
import ExternAssessingWithValue from './ExternAssessingValue'
import Numbers from './Numbers'

export const colors = ['hsla(208, 51%, 27%)','hsl(188, 86%, 26%)', 'hsl(15, 100%, 25%)']
const colorsRgb = ['hsla(208, 51%, 27%, .2)', 'hsl(188, 86%, 26%, .2)', ' hsl(15, 100%, 25%, .2)']

const labels = t => [t('Habe ich gemacht'), t('Traue ich mir zu')]

const Score = makeExtendable( ({ t, values, external, headings, extended, toggleExtended, ...props }) => <div>
    <div className="row text-center">
        {labels(t).map( (l, i) => 
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
                value={external ? external.length ? external[0].value : external.value : 0} />
            {headings &&
                <div className="font-weight-bold">
                    <div>{t('Wird mir zugetraut')}</div>
                </div>
            }
            { !!external.length &&
                <div>
                    <div onClick={toggleExtended}>
                        <div style={{cursor:'pointer'}}>{new Date().toLocaleDateString()}</div>
                        <span style={{cursor:'pointer'}}><FontAwesomeIcon icon={extended? faMinus : faPlus}/></span>  
                    </div>
                </div>
            }
        </div>
    </div>
    <div className="col-8 m-auto " style={{minWidth:'17rem', maxWidth:'26rem'}} >
        <SlideDown >
            {extended && 
            <div>
                <ExternAssessingWithValue values={external} onClick={toggleExtended} />
            </div>
            }
        </SlideDown>
    </div>
</div>)

const stateToProps = (state, ownProps) => ({
    values: [ 
        selectors.getScore(state, ownProps.entryId, 'done'), 
        selectors.getScore(state, ownProps.entryId, 'confident'), 
    ],
    external: selectors.getExternalScore(state, ownProps.entryId),
    maxValue: selectors.getMaxScore(state, ownProps.entryId),
})

export default withTranslation()(connect(stateToProps, actions)(Score))