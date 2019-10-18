import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import SimpleBar from '../Charting/SimpleBar'
import needsData from '../Core/needsData'
import { selectors as semesterSelectors, actions as semesterActions } from '../Exams/Semester/Store'
import { selectors as ptmSelectors, actions as ptmActions } from '../Exams/Ptm/Store'
import DashboardCard from './DashboardCard'

const loaded = _.overEvery([ semesterSelectors.loaded, ptmSelectors.loaded ])
const load = () => _.over([ semesterActions.load(), ptmActions.load ])
const ptmStrongestSubject = _.flow([ ptmSelectors.getLatest, ptmSelectors.strongestSubject ])
const stateToProps = state => ({ mcStrongestSubject: semesterSelectors.strongestSubject(state), ptmStrongestSubject: ptmStrongestSubject(state), l: semesterSelectors.getRanking(state) })
const Strengths = _.compose([withTranslation(), needsData(loaded, load), connect(stateToProps)])(({ t, mcStrongestSubject, ptmStrongestSubject }) =>
    <div>
        <div className="mb-3">
            <div style={{fontSize: '.8rem'}} className="text-secondary">{t('Stärkstes Fach in deinen gesamten MCs')}</div>
            {mcStrongestSubject.name}
            <SimpleBar value={mcStrongestSubject.richtig} total={mcStrongestSubject.gesamt}>{mcStrongestSubject.richtig} von {mcStrongestSubject.gesamt}</SimpleBar>
        </div>
        <div className="">
            <div style={{fontSize: '.8rem'}} className="text-secondary">{t('Stärkstes Fach im letzten PTM')}</div>
            {ptmStrongestSubject.name}
            <SimpleBar value={ptmStrongestSubject.richtig} total={ptmStrongestSubject.gesamt}>{ptmStrongestSubject.richtig} von {ptmStrongestSubject.gesamt}</SimpleBar>
        </div>
    </div>
)

const Wrapper = withTranslation()(({ t }) => <DashboardCard 
    header={Math.round(Math.random() * 100) + ' p'} 
    title={t(`Deine Stärken`)} 
    text={t(`Dein Überblick zu deinen fächerorientierten Stärken im PTM und den Semesterprüfungen über das gesamte Studium.`)}>
            <Strengths />
</DashboardCard>)

export default Wrapper