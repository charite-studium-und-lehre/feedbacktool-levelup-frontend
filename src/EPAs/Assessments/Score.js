import React from 'react'
import {connect} from 'react-redux'
import { getScore, loaded, load } from '../Selectors'
import {selectors as epaSelectors, actions} from '../Store'
import Assessments from './Externals/ForItem'
import Level, { LevelWithEdit } from './Level'
import ScoreWrapper from './ScoreWrapper'
import needsData from '../../Core/needsData'

export const colors = ['hsla(208, 51%, 27%)', 'hsl(188, 86%, 26%)', 'hsl(15, 100%, 25%)']
export const colorsBackground = ['hsla(208, 51%, 27%, .2)', 'hsl(188, 86%, 26%, .2)', ' hsl(15, 100%, 25%, .2)']

const Score = ({ 
    confident, done, externalScore,
    levelUpDone, levelUpConfident, levelDownDone, levelDownConfident, 
    entryId, entry, ...props
}) =>
    <div>
        <ScoreWrapper levels={[
            <LevelWithEdit
                colorBackground={colorsBackground[0]}
                color={colors[0]}
                {...props}
                value={done}
                increment={() => levelUpDone(entry)}
                decrement={() => levelDownDone(entry)}/>,
            <LevelWithEdit
                colorBackground={colorsBackground[1]}
                color={colors[1]}
                {...props}
                value={confident}
                increment={() => levelUpConfident(entry)}
                decrement={() => levelDownConfident(entry)}/>,
            <Level
                colorBackground={colorsBackground[2]}
                color={colors[2]}
                {...props}
                maxValue={Math.max(externalScore.total, 1)}
                value={externalScore.value}/>
        ]} />
        <Assessments entryId={entryId}/>
    </div>

const stateToProps = (state, ownProps) => ({
    entry: epaSelectors.getById(state, ownProps.entryId),
    ...getScore(state, ownProps.entryId),
})
export default needsData(loaded, load)(connect(stateToProps, actions)(Score))