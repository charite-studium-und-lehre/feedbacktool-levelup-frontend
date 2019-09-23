import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import needsData from '../Core/needsData'
import SimpleBar from '../Charting/SimpleBar'
import { selectors, actions } from '../Exams/Stations/Store'
import DashboardCard from './DashboardCard'

const stateToProps = state => ({ stations: selectors.getItems(state) })
const Stations = needsData(connect(stateToProps)(({ stations }) => _.map(e => <div key={e.exam}>
    <span className="text-secondary" style={{fontSize: '.8rem'}}>{e.exam}</span>
    <SimpleBar value={e.result} >{e.result} %</SimpleBar>
</div>, stations)), selectors.loaded, actions.load)

const Wrapper = withTranslation()(({ t }) => <DashboardCard 
        header={Math.round(Math.random() * 100) + ' %'} 
        title={t(`Praktische Prüfungen`)} 
        text={t(`Dein Überblick zu den praktischen Prüfungen im Studium.`)}
        result="Gesamtnote 2,0">
            <Stations />
</DashboardCard>)

export default Wrapper