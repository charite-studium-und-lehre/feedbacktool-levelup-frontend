import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { selectors, actions } from './Store'
import { withTranslation } from 'react-i18next'
import Square from './Square'

export const colors = ['hsla(208, 51%, 27%, 1)', 'hsla(161, 100%, 25%, 1)', ' hsla(18, 100%, 25%, 1)']
const colorsRgb = ['hsla(208, 51%, 27%, .2)', 'hsla(161, 100%, 25%, .2)', ' hsla(18, 100%, 25%, .2)']

const Numbers = props => {
    const unit = (5 /  props.maxValue) * props.value
    const dev = _.range(0,5).map( i => {
        const cutoff = _.clamp(unit - i, 0, 1) * 100
        console.log(i)
        return <Square key={i} style={{ backgroundImage :` linear-gradient(to right, ${props.color} ${cutoff}%, ${props.colorsRgb} ${cutoff}%)`, border: `1px solid ${props.color}`}}/>
    })

    return <div>
        {props.edit &&
            <span style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faMinusCircle} className="text-muted mr-1" onClick={props.decrement} />
            </span>
        }
        {dev.map((e) => e)}
        {props.edit &&
            <span style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faPlusCircle} className="text-muted ml-1" onClick={props.increment} />
            </span>
        }
        <div>{props.value}/{props.maxValue}</div>
    </div>
}

const Score = ({ t, ...props }) => (
    <div className="row text-center">
        <div className="col-6 p-0 m" style={{ color: colors[0] }}>
            <Numbers
                colorsRgb={colorsRgb[0]}
                color={colors[0]}
                edit={props.edit}
                value={props.score('done')}
                maxValue={props.maxScore}
                increment={_.partial(props.levelUpDone, props.entryId)}
                decrement={_.partial(props.levelDownDone, props.entryId)} />
            {props.headings &&
                <div className="font-weight-bold">
                    <div >{t(`Habe ich gemacht`)}</div>
                </div>
            }
        </div>
        <div className="col-6 p-0" style={{ color: colors[1] }}>
            <Numbers
                colorsRgb={colorsRgb[1]}
                color={colors[1]}
                edit={props.edit}
                value={props.score('confident')}
                maxValue={props.maxScore}
                increment={_.partial(props.levelUpConfident, props.entryId)}
                decrement={_.partial(props.levelDownConfident, props.entryId)} />
            {props.headings &&
                <div className="font-weight-bold">
                    <div >{t(`Traue ich mir zu`)}</div>
                </div>
            }
        </div>
        <div className="col-12 p-0 mt-3" style={{ color: colors[2] }}>
            <Numbers
                colorsRgb={colorsRgb[2]}
                color={colors[2]}
                value={props.score('confident')}
                maxValue={props.maxScore} />
            {props.headings &&
                <div className="font-weight-bold">
                    <div >{t(`Traue ich dir zu`)}</div>
                    <div >{t(`(Fremdeinschätzung)`)}</div>
                </div>
            }
        </div>
    </div>
)

const stateToProps = (state, ownProps) => ({
    score: _.curry(selectors.getScore)(state, ownProps.entryId),
    maxScore: selectors.getMaxScore(state, ownProps.entryId),
})

export default withTranslation()(connect(stateToProps, actions)(Score))


// `linear-gradient( to right, ${props.color} ${unit}% ,${props.colorsRgb} 100%`