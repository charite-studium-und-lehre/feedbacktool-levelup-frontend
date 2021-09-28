import React from 'react'
import { connect } from 'react-redux'
import needsData from '../../Core/needsData'
import { getScore, loaded, load } from '../Selectors'
import Level from './Level'
import ScoreWrapper from './ScoreWrapper'
import COLORS from '../../colors'
import { compose } from '../../Utils/utils.js'

const stateToProps = (state, ownProps) => getScore(state, ownProps.entryId)

export const withHeaderScore = WrappedComponent =>
    compose([needsData(loaded, load), connect(stateToProps)])(
    ({ done, confident, externalScore, ...props }) =>
    <WrappedComponent {...props} levels={[
        <div style={{color: COLORS.epas.done.value}}>
            <div>
                <span style={{fontSize: '1.3em'}} className='mr-2'>&#8960;</span>
                <Level
                    colorBackground={COLORS.epas.done.background}
                    color={COLORS.epas.done.value}
                    {...props}
                    value={done} />
            </div>
            <div className="font-weight-bold">
                Habe ich gemacht
            </div>
        </div>,
        <div style={{color: COLORS.epas.confident.value}}>
            <div style={{fontSize: '1.3em'}}>
                <span className='mr-2'>&#8960;</span>
                <Level
                    colorBackground={COLORS.epas.confident.background}
                    color={COLORS.epas.confident.value}
                    {...props}
                    value={confident} />
            </div>
            <div className="font-weight-bold">
                Traue ich mir zu
            </div>
        </div>,
        <div style={{color: COLORS.epas.externalAssessment.value}}>
            <div style={{fontSize: '1.3em'}}>
                <span className='mr-2'>&#8960;</span>
                <Level
                    colorBackground={COLORS.epas.externalAssessment.background}
                    color={COLORS.epas.externalAssessment.value}
                    {...props}
                    maxValue={Math.max(externalScore.total, 1)}
                    value={externalScore.value}/>
            </div>
            <div className="font-weight-bold">
                Wird mir zugetraut
            </div>
        </div>
    ]} />)

export default withHeaderScore(ScoreWrapper)
