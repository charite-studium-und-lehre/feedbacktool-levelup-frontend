import React from 'react'
import { withTranslation } from 'react-i18next'
import needsData from '../Core/needsData'
import { selectors, actions } from '../EPAs/Store'
import EPAsScore from '../EPAs/assessmentViewComponents/Score'
import DashboardCard from './DashboardCard'

const EPAs = needsData(selectors.loaded, actions.load)(
    () => <div className="m-2 py-3 py-xl-5" style={{fontSize: '1rem'}}>
        <EPAsScore headings edit={false} width='1.3rem' height='1.3rem'  borderRadius='50%' />
    </div>
)

const Wrapper = withTranslation()(({ t }) => <DashboardCard 
    header={Math.round(Math.random() * 100) + ' %'} 
    title={t('Ärztliche Tätigkeiten')} >
            <EPAs />
</DashboardCard>)

export default Wrapper