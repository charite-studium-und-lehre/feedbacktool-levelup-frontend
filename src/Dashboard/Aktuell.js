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
    <div className=" mt-3" style={{width: '30rem', height: '6rem', fontSize:'1rem'}}>
     Wir suchen eine*n studentische*n Mitarbeiter*in zur Unterstützung der Evaluation der Lehre, weiter Infos unter dann 
       <a className="color-navigation font-weight-bold"  href='https://www.charite.de/service/stellenangebot/angebot/detailinfo/studentischer_mitarbeiterin_stud_hk_082107_fpfsl/'> Link </a>
       , wir freuen uns auf deine Bewerbung!
    </div>


export default () => <DashboardCard title='Aktuelles :' ><Aktuell/></DashboardCard>