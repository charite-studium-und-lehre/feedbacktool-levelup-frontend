import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import AnimatedDonut from '../Charting/AnimatedDonut'
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
const Label = ({ title, children }) => 
    <div className="mt-2 w-100 d-flex flex-column">
        <div style={{fontSize: '.8rem'}} className="text-secondary">{title}</div>
        <div className="pt-2 d-flex align-items-end flex-grow-1 text-center" style={{lineHeight: '1.2em', fontWeight: 500}}>
            <div className="w-100">{children}</div>
        </div>
    </div>
const Donut = ({ value, total }) => 
    <div className="mt-2 w-100">
        <div style={{height: '5rem'}}>
            <AnimatedDonut animationTime={0} width={.22} data={[ value, total - value ]}>
                <span style={{fontSize: '.8rem', fontWeight: 500}}>{value} / {total}</span>
            </AnimatedDonut>
        </div>
    </div>
const Strengths = _.compose([needsData(loaded, load), connect(stateToProps)])(({ mcStrongestSubject, ptmStrongestSubject }) =>
    <div>
        { (mcStrongestSubject || ptmStrongestSubject) && 
        <div>
            <div className="d-flex">
                { mcStrongestSubject && <Label title='in deinen gesamten MCs'>{mcStrongestSubject.titel}</Label> }
                { ptmStrongestSubject && <Label title='im letzten PTM'>{ptmStrongestSubject.titel}</Label> }
            </div>
            <div className="d-flex">
                {mcStrongestSubject && <Donut total={mcStrongestSubject.maximalPunktzahl} value={mcStrongestSubject.ergebnisPunktzahl} /> }
                {ptmStrongestSubject && <Donut value={ptmStrongestSubject.ergebnisRichtigPunktzahl} total={ptmStrongestSubject.maximalPunktzahl} /> }
            </div>
        </div>}
        {!ptmStrongestSubject && !mcStrongestSubject && 
            <div className="p3">Es liegen noch keine Ergebnisse vor.</div>
        }
    </div>
)

const Wrapper = () => <DashboardCard 
    header={Math.round(Math.random() * 100) + ' p'} 
    title='Starke Fächer'
    id='StarkeFächerCard' >
            <Strengths />
</DashboardCard>

export default Wrapper