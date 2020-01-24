import React from 'react'
import {connect} from 'react-redux'
import { getScore, loaded, load } from '../Selectors'
import { actions } from './Store'
import Assessments from './Externals/ForItem'
import Level, { LevelWithEdit } from './Level'
import ScoreWrapper from './ScoreWrapper'
import COLORS from '../../colors'

const Score = ({ 
    confident, done, externalScore,
    levelUpDone, levelUpConfident, levelDownDone, levelDownConfident, 
    entryId, ...props
}) =>
    <div>
        <ScoreWrapper levels={[
            <LevelWithEdit
                colorBackground={COLORS.epas.done.background}
                color={COLORS.epas.done.value}
                {...props}
                value={done}
                increment={() => levelUpDone(entryId)}
                decrement={() => levelDownDone(entryId)}/>,
            <LevelWithEdit
                colorBackground={COLORS.epas.confident.background}
                color={COLORS.epas.confident.value}
                {...props}
                value={confident}
                increment={() => levelUpConfident(entryId)}
                decrement={() => levelDownConfident(entryId)}/>,
            <Level
                colorBackground={COLORS.epas.externalAssessment.background}
                color={COLORS.epas.externalAssessment.value}
                {...props}
                maxValue={Math.max(externalScore.total, 1)}
                value={externalScore.value}/>
        ]} />
        <Assessments entryId={entryId}/>
    </div>

const stateToProps = (state, ownProps) => getScore(state, ownProps.entryId)

export default needsData(loaded, load)(connect(stateToProps, actions)(Score))