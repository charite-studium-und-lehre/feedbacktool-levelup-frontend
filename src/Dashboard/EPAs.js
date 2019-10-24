import React from 'react'
import { withTranslation } from 'react-i18next'
import needsData from '../Core/needsData'
import { selectors, actions } from '../EPAs/Store'
import EPAsScore from '../EPAs/Score'
import DashboardCard from './DashboardCard'

const EPAs = needsData(
    () => <div className="m-2">
        <EPAsScore headings   width='1rem' height='1rem'  borderRadius='50%' />
    </div>
, selectors.loaded, actions.load)

const Wrapper = withTranslation()(({ t }) => <DashboardCard 
    header={Math.round(Math.random() * 100) + ' %'} 
    title={t('Ärztliche Tätigkeiten')} >
            <EPAs />
</DashboardCard>)

export default Wrapper