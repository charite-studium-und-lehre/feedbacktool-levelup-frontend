import React from 'react'
import _ from 'lodash/fp'
import {connect} from 'react-redux'
import { selectors } from '../Store'
import {withTranslation} from 'react-i18next'
import Level from './Level'
import ScoreWrapper from './ScoreWrapper'
import COLORS from '../../colors'

const stateToProps = (state, ownProps) => selectors.getScore(state, ownProps.entryId)

export const withHeaderScore = WrappedComponent => 
    _.compose([withTranslation(), connect(stateToProps)])(
    ({ t, done, confident, externalScore, ...props }) => 
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
                {t('Habe ich gemacht')}
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
                {t('Traue ich mir zu')}
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
                {t('Wird mir zugetraut')}
            </div>
        </div>
    ]} />)

export default withHeaderScore(ScoreWrapper)