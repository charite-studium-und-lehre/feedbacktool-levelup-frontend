import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import { selectors } from '../Store'
import {withTranslation} from 'react-i18next'
import Level from './Level'
import { colors, colorsBackground } from './Score'

const stateToProps = (state, ownProps) => selectors.getScore(state, ownProps.entryId)
export const HeaderScore = connect(stateToProps)(({ t, done, confident, externalScore, ...props }) => 
    <div className="container-fluid">
        <div className="row text-center">
            <div className="col-12 col-sm-4 p-0 pb-2" style={{color: colors[0]}}>
                <div>
                    <span className='mr-2'>&#8960;</span>
                    <Level
                        colorBackground={colorsBackground[0]}
                        color={colors[0]}
                        {...props}
                        value={done} />
                </div>
                <div className="font-weight-bold">
                    {t('Habe ich gemacht')}
                </div>
            </div>
            <div className="col-12 col-sm-4 p-0 pb-2" style={{color: colors[1]}}>
                <div>
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
            </div>
            <div className="col-12 col-sm-4 p-0 pb-2" style={{color: colors[2]}}>
                <div>
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
        </div>
    </div>)

export default withTranslation()(HeaderScore)