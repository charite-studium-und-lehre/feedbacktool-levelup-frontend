import React from 'react'
import {connect} from 'react-redux'
import {selectors, actions} from '../Store'
import ExternAssessingWithValue from './ExternAssessingValue'
import Level, { LevelWithEdit } from './Level'
import ScoreWrapper from './ScoreWrapper'
import COLORS from '../../colors'

const Score = ({ 
    confident, done, externalScore,
    levelUpDone, levelUpConfident, levelDownDone, levelDownConfident, 
    entryId, entry, ...props
}) =>
    <div>
        <ScoreWrapper levels={[
            <LevelWithEdit
                colorBackground={COLORS.epas.done.background}
                color={COLORS.epas.done.value}
                {...props}
                value={done}
                increment={() => levelUpDone(entry)}
                decrement={() => levelDownDone(entry)}/>,
            <LevelWithEdit
                colorBackground={COLORS.epas.confident.background}
                color={COLORS.epas.confident.value}
                {...props}
                value={confident}
                increment={() => levelUpConfident(entry)}
                decrement={() => levelDownConfident(entry)}/>,
            <Level
                colorBackground={COLORS.epas.externalAssessment.background}
                color={COLORS.epas.externalAssessment.value}
                {...props}
                maxValue={Math.max(externalScore.total, 1)}
                value={externalScore.value}/>
        ]} />
        <ExternAssessingWithValue entryId={entryId}/>
    </div>

const stateToProps = (state, ownProps) => ({
    entry: selectors.getById(state, ownProps.entryId),
    ...selectors.getScore(state, ownProps.entryId),
})
export default connect(stateToProps, actions)(Score)