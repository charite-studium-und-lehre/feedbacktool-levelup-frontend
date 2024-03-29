import React from 'react'
import {connect} from 'react-redux'
import {selectors, actions} from '../Progress/Store'
import needsData from '../Core/needsData'
import {animationTime} from '../Charting/Utils'
import AnimatedDonut from '../Charting/AnimatedDonut'
import AnimatedInteger from '../Charting/AnimatedInteger'
import DashboardCard from './DashboardCard'
import {compose} from '../Utils/utils'

const Progress = compose([needsData(selectors.loaded, actions.load), connect(selectors.getDashboardData)])(props =>
    <div className="m-auto" style={{width: '10rem', height: '10rem'}}>
        <AnimatedDonut data={[props.done, props.total - props.done]} animationTime={animationTime * 4}>
            <div style={{fontSize: '1.8rem'}}><AnimatedInteger initial={0} value={ Math.round(props.done / props.total * 100) } animationTime={animationTime * 4} /> %</div>
            <div style={{fontSize: '.8rem'}}>{props.done} / {props.total}</div>
        </AnimatedDonut>
    </div>
)

export default () => <DashboardCard title='Studienfortschritt' id='StudienfortschrittCard' ><Progress /></DashboardCard>
