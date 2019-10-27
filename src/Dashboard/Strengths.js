import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import SimpleBar from '../Charting/SimpleBar'
import needsData from '../Core/needsData'
import { selectors as mcSelectors, actions as mcActions } from '../Exams/MC/Store'
import { selectors as ptmSelectors, actions as ptmActions } from '../Exams/Ptm/Store'
import DashboardCard from './DashboardCard'

const loaded = _.overEvery([ mcSelectors.loaded, ptmSelectors.loaded ])
const load = () => _.over([ mcActions.load(), ptmActions.load ])
const ptmStrongestSubject = _.flow([ ptmSelectors.getLatest, _.defaults({}), ptmSelectors.strongestSubject ])
const stateToProps = state => ({ 
    mcStrongestSubject: mcSelectors.strongestSubject(state), 
    ptmStrongestSubject: ptmStrongestSubject(state),
})
const Strengths = _.compose([withTranslation(), needsData(loaded, load), connect(stateToProps)])(({ t, mcStrongestSubject, ptmStrongestSubject }) =>
    <div>
        {mcStrongestSubject && <div className="mb-3">
            <div style={{fontSize: '.8rem'}} className="text-secondary">{t('in deinen gesamten MCs')}</div>
            <div className="pt-2 pl-2">{mcStrongestSubject.titel}</div>
            <SimpleBar value={mcStrongestSubject.correct} total={mcStrongestSubject.total}></SimpleBar>
        </div>}
        {ptmStrongestSubject && <div className="">
            <div style={{fontSize: '.8rem'}} className="text-secondary">{t('im letzten PTM')}</div>
            <div className="pt-2 pl-2">{ptmStrongestSubject.titel}</div>
            <SimpleBar value={ptmStrongestSubject.correct} total={ptmStrongestSubject.total}></SimpleBar>
        </div>}
        {!ptmStrongestSubject && !mcStrongestSubject && 
            <div className="p3">{t('Es liegen noch keine Ergebnisse vor.')}</div>
        }
    </div>
)

const Wrapper = withTranslation()(({ t }) => <DashboardCard 
    header={Math.round(Math.random() * 100) + ' p'} 
    title={t(`Starke Fächer`)} >
            <Strengths />
</DashboardCard>)

export default Wrapper