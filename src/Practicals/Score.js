import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { selectors, actions } from './Store'

const Numbers = props => (
    <span>
        {props.edit &&
        <FontAwesomeIcon icon={faMinusCircle} className="text-muted mr-1" onClick={ props.decrement }/>
        }
        <span className="font-weight-bold">{props.value} / {props.maxValue}</span>
        {props.edit &&
        <FontAwesomeIcon icon={faPlusCircle} className="text-muted ml-1" onClick={ props.increment }/>
        }
    </span>
)
const Score = props => (
    <div className="row text-center">
        <div className="col-6 pr-0 text-danger">
            <Numbers 
                edit={props.edit}
                value={props.score('done')}
                maxValue={props.maxScore}
                increment={_.partial(props.levelUpDone, props.entryId)}
                decrement={_.partial(props.levelDownDone, props.entryId)} />
            {props.headings && 
            <div >Habe ich gemacht</div>
            }
        </div>
        <div className="col-6 pl-0 text-success">
            <Numbers
                edit={props.edit}
                value={props.score('confident')}
                maxValue={props.maxScore} 
                increment={_.partial(props.levelUpConfident, props.entryId)}
                decrement={_.partial(props.levelUpConfident, props.entryId)} />
            {props.headings && 
            <div >Traue ich mir zu</div>
            }
        </div>
    </div>
)

const stateToProps = (state, ownProps) => ({
    score: _.curry(selectors.getScore)(state, ownProps.entryId),
    maxScore: selectors.getMaxScore(state, ownProps.entryId),
})

export default connect(stateToProps, actions)(Score)