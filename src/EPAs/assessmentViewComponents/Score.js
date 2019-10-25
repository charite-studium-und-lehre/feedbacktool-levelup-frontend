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

const Score = makeExtendable( ({ t, ...props }) => (
    <div className="row text-center">
        <div className="col-sm-4 p-0" style={{ color: colors[0] }}>
            <Numbers
                colorsRgb={colorsRgb[0]}
                color={colors[0]}
                width={props.width}
                height={props.height}
                borderRadius= {props.borderRadius}
                edit={props.edit}
                average={props.average}
                value={props.done}
                maxValue={props.maxScore}
                increment={_.partial(props.levelUpDone, props.entryId)}
                decrement={_.partial(props.levelDownDone, props.entryId)} />
            {props.headings &&
                <div className="font-weight-bold">
                    <div >{t(`Habe ich gemacht`)}</div>
                </div>
            }
        </div>
        <div className="col-sm-4 p-0" style={{ color: colors[1] }}>
            <Numbers
                colorsRgb={colorsRgb[1]}
                color={colors[1]}
                width={props.width}
                height={props.height}
                borderRadius= {props.borderRadius}
                edit={props.edit}
                average={props.average}
                value={props.confident}
                maxValue={props.maxScore}
                increment={_.partial(props.levelUpConfident, props.entryId)}
                decrement={_.partial(props.levelDownConfident, props.entryId)} />
            {props.headings &&
                <div className="font-weight-bold">
                    <div >{t(`Traue ich mir zu`)}</div>
                </div>
            }
        </div>
        <div className="col-sm-4 p-0"  style={{ color: colors[2] }}>
        <Numbers
            colorsRgb={colorsRgb[2]}
            color={colors[2]}
            width={props.width}
            height={props.height}
            borderRadius= {props.borderRadius}
            average={props.average}
            value={props.external ? props.external.length ? props.external[0].value : props.external.value : 0}
            maxValue={props.maxScore}/>
        {props.headings &&
            <div className="font-weight-bold">
                <div>{t(`Wird mir zugetraut`)}</div>
            </div>}
            { props.datum && <div>
                  { props.external.length ? 
                    <div onClick={props.toggleExtended}>
                        <div  style={{cursor:'pointer'}}>{new Date().toLocaleDateString()}</div>
                        <span  style={{cursor:'pointer'}}><FontAwesomeIcon icon={props.extended? faMinus : faPlus}/></span>  
                    </div>
                   : null}
            </div>}
    </div>
    <div className="col-8 m-auto " style={{minWidth:'17rem', maxWidth:'26rem'}} >
        <SlideDown >
            {props.extended && 
            <div>
                <ExternAssessingWithValue values={props.external} onClick={props.toggleExtended} />
            </div>
            }
        </SlideDown>
    </div>
    </div>
)
)
const stateToProps = (state, ownProps) => ({
    done: selectors.getScore(state, ownProps.entryId, 'done'),
    confident: selectors.getScore(state, ownProps.entryId, 'confident'),
    external: selectors.getExternalScore(state, ownProps.entryId),
    maxScore: selectors.getMaxScore(state, ownProps.entryId),
})

export default withTranslation()(connect(stateToProps, actions)(Score))