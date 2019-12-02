import React from 'react'
import _ from 'lodash/fp'
import {connect} from 'react-redux'
import { selectors } from '../Store'
import {withTranslation} from 'react-i18next'
import Level from './Level'
import { colors, colorsBackground } from './Score'
import ScoreWrapper from './ScoreWrapper'

const stateToProps = (state, ownProps) => selectors.getScore(state, ownProps.entryId)

export const withHeaderScore = WrappedComponent => 
    _.compose([withTranslation(), connect(stateToProps)])(
    ({ t, done, confident, externalScore, ...props }) => 
    <WrappedComponent {...props} levels={[
        <div style={{color: colors[0]}}>
            <div>
                <span style={{fontSize: '1.3em'}} className='mr-2'>&#8960;</span>
                <Level
                    colorBackground={colorsBackground[0]}
                    color={colors[0]}
                    {...props}
                    value={done} />
            </div>
            <div className="font-weight-bold">
                {t('Habe ich gemacht')}
            </div>
        </div>,
        <div style={{color: colors[1]}}>
            <div style={{fontSize: '1.3em'}}>
                <span className='mr-2'>&#8960;</span>
                <Level
                    colorBackground={colorsBackground[1]}
                    color={colors[1]}
                    {...props}
                    value={confident} />
            </div>
            <div className="font-weight-bold">
                {t('Traue ich mir zu')}
            </div>
        </div>,
        <div style={{color: colors[2]}}>
            <div style={{fontSize: '1.3em'}}>
                <span className='mr-2'>&#8960;</span>
                <Level
                    colorBackground={colorsBackground[2]}
                    color={colors[2]}
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