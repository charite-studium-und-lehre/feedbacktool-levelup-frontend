import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import { selectors, actions } from '../Progress/Store'
import needsData from '../Core/needsData'
import { animationTime } from '../Charting/Utils'
import AnimatedDonut from '../Charting/AnimatedDonut'
import AnimatedInteger from '../Charting/AnimatedInteger'
import DashboardCard from './DashboardCard'

const Aktuell = props =>
    <div className="m-auto" style={{width: '20rem', height: '10rem', fontSize:'1.3rem'}}>
      Wir suchen eine\einen Student Mittelalter\in
    </div>


export default () => <DashboardCard title='Aktuell :' ><Aktuell/></DashboardCard>