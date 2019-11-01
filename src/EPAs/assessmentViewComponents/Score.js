import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import {selectors, actions} from '../Store'
import ExternAssessingWithValue from './ExternAssessingValue'
import Level, { LevelWithEdit } from './Level'

export const colors = ['hsla(208, 51%, 27%)', 'hsl(188, 86%, 26%)', 'hsl(15, 100%, 25%)']
export const colorsBackground = ['hsla(208, 51%, 27%, .2)', 'hsl(188, 86%, 26%, .2)', ' hsl(15, 100%, 25%, .2)']

const Score = ({ 
    confident, done, externalScore, l, 
    levelUpDone, levelUpConfident, levelDownDone, levelDownConfident, 
    entryId, entry, ...props
}) =>
    <div className="container-fluid">
        <div className="row text-center">
            <div className="col-12 col-sm-4 p-0 pb-2">
                <LevelWithEdit
                    colorBackground={colorsBackground[0]}
                    color={colors[0]}
                    {...props}
                    value={done}
                    increment={() => levelUpDone(entry)}
                    decrement={() => levelDownDone(entry)}/>
            </div>
            <div className="col-12 col-sm-4 p-0 pb-2">
                <LevelWithEdit
                    colorBackground={colorsBackground[1]}
                    color={colors[1]}
                    {...props}
                    value={confident}
                    increment={() => levelUpConfident(entry)}
                    decrement={() => levelDownConfident(entry)}/>
            </div>
            <div className="col-12 col-sm-4 p-0 pb-2">
                <Level
                    colorBackground={colorsBackground[2]}
                    color={colors[2]}
                    {...props}
                    maxValue={Math.max(externalScore.total, 1)}
                    value={externalScore.value}/>
            </div>
        </div>
        <ExternAssessingWithValue entryId={entryId}/>
    </div>

const stateToProps = (state, ownProps) => ({
    entry: selectors.getById(state, ownProps.entryId),
    ...selectors.getScore(state, ownProps.entryId),
})
export default connect(stateToProps, actions)(Score)