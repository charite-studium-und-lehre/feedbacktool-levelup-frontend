import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { selectors, actions } from '../Progress/Store'
import needsData from '../Core/needsData'
import { animationTime } from '../Charting/Utils'
import AnimatedDonut from '../Charting/AnimatedDonut'
import AnimatedInteger from '../Charting/AnimatedInteger'
import DashboardCard from './DashboardCard'

const Progress = _.compose([withTranslation(), needsData(selectors.loaded, actions.load), connect(selectors.getDashboardData)])(({ t, ...props }) =>
    <DashboardCard title={t('Studienfortschritt')} >
        <div className="m-auto" style={{width: '10rem', height: '10rem'}}>
            <AnimatedDonut data={[ props.done, props.total - props.done ]} animationTime={animationTime * 4}>
                <div style={{fontSize: '1.8rem'}}><AnimatedInteger initial={0} value={ _.round(props.done / props.total * 100) } animationTime={animationTime * 4} /> %</div>
                <div style={{fontSize: '.8rem'}}>{ props.done } / { props.total }</div>
            </AnimatedDonut>
        </div>
    </DashboardCard>
)

export default Progress