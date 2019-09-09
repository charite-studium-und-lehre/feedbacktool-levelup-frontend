import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { selectors, actions } from './Store'
import { withTranslation } from 'react-i18next'
import { SlideDown } from 'react-slidedown'
import makeExtendable from '../Core/makeExtendable'
import ExternAssessingWithValue from './ExternAssessingValue'
import Numbers from './Numbers'
export const colors = ['hsla(208, 51%, 27%, 1)', '	hsl(280, 100%, 15%)', 'hsl(15, 100%, 25%)']
const colorsRgb = ['hsla(208, 51%, 27%, .2)', '	hsl(280, 100%, 15%, .2)', ' hsl(15, 100%, 25%, .2)']

const ExternalScore = props => <div className="col-4 p-0">
    <div  style={{ color: colors[2] }}>
        <Numbers
            colorsRgb={colorsRgb[2]}
            color={colors[2]}
            width={props.width}
            height={props.height}
            borderRadius= {props.borderRadius}
            average={props.average}
            value={props.external.length ? props.external[0].value : 0}
            maxValue={props.maxScore}
            onClick={props.toggleExtended} />
        {props.headings &&
            <div className="font-weight-bold">
                <div >{props.label}</div>
            </div>}
    </div>
    <div className='col-4'></div>
    <div className='col-8'>
        <SlideDown >
            {props.extended && 
            <div>
                <ExternAssessingWithValue values={props.external} />
            </div>
            }
        </SlideDown>
    </div>
</div>

const Score = makeExtendable( ({ t, ...props }) => (
    <div className="row text-center">
        <div className="col-4 p-0" style={{ color: colors[0] }}>
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
        <div className="col-4 p-0" style={{ color: colors[1] }}>
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
        <ExternalScore {...props} label={t(`Traue ich dir zu`)} />
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