import React from 'react'
import { withTranslation } from 'react-i18next'
import needsData from '../Core/needsData'
import { selectors, actions } from '../Practicals/Store'
import PracticalsScore from '../Practicals/Score'
import DashboardCard from './DashboardCard'

const Practicals = needsData(
    () => <div className="m-2">
        <PracticalsScore headings />
    </div>
, selectors.loaded, actions.load)

const Wrapper = withTranslation()(({ t }) => <DashboardCard 
    header={Math.round(Math.random() * 100) + ' %'} 
    title={t('Ärztliche Tätigkeiten')} 
    text={t('Dein Überblick zur Entwicklung deiner praktischen Fähigkeiten im Studienverlauf.')}>
            <Practicals />
</DashboardCard>)

export default Wrapper