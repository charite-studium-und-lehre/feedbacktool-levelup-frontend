import React from 'react'
import _ from 'lodash/fp'
import { withTranslation } from 'react-i18next'
import needsData from '../Core/needsData'
import { selectors, actions } from '../EPAs/Store'
import { withHeaderScore } from '../EPAs/assessmentViewComponents/HeaderScore'
import DashboardCard from './DashboardCard'


const EPAs = _.compose([needsData(selectors.loaded, actions.load), withHeaderScore])(({ levels }) => 
    <div className="m-2 pt-3 py-xl-5 d-flex flex-wrap" style={{fontSize: '1rem'}}>
        {levels.map( (l, i) => <div key={i} className="flex-grow-1 m-2 text-center">{l}</div>)}
    </div>)

const Wrapper = withTranslation()(({ t }) => <DashboardCard 
    header={Math.round(Math.random() * 100) + ' %'} 
    title={t('Ärztliche Tätigkeiten')} >
            <EPAs width='1.3rem' height='1.3rem' borderRadius='50%' />
</DashboardCard>)

export default Wrapper