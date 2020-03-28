import React from 'react'
import { withTranslation } from 'react-i18next'
import needsData from '../Core/needsData'
import { selectors, actions } from '../EPAs/Store'
import { withHeaderScore } from '../EPAs/Assessments/HeaderScore'
import DashboardCard from './DashboardCard'

const loaded = state => [ selectors.loaded ].reduce( (f,g) => g(state) && f, true )
const load = () => (...params) => [ actions.load() ].reduce( (f,g) => g(...params), null )
const EPAs = [needsData(loaded, load), withHeaderScore].reduce( (f,g) => g(f), ({ levels }) => 
    <div className="m-2 pt-3 py-xl-5 d-flex flex-wrap" style={{fontSize: '1rem'}}>
        {levels.map( (l, i) => <div key={i} className="flex-grow-1 m-2 text-center">{l}</div>)}
    </div>)

const Wrapper = withTranslation()(({ t }) => <DashboardCard 
    header={Math.round(Math.random() * 100) + ' %'} 
    title={t('Ärztliche Tätigkeiten')}
    id='Epas' >
            <EPAs width='1.3rem' height='1.3rem' borderRadius='50%' />
</DashboardCard>)

export default Wrapper