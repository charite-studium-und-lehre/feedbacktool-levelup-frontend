import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import tinycolor from 'tinycolor2'
import needsData from '../Core/needsData'
import { selectors, actions } from '../Exams/Ptm/Store'
import DashboardCard from './DashboardCard'
import { LinearChart } from '../Charting/Chart'
import LineGraph from '../Charting/LineGraph'
import AreaGraph from '../Charting/AreaGraph'
import { color } from '../Exams/Ptm/Ptm'
import { labels } from '../Exams/Ptm/Results'

const stateToProps = state => ({ latest: selectors.getLatest(state), ptms: selectors.getTimeline(state) })
const Ptm = _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps), withTranslation())(
    ({ t, latest, ptms }) => {
    return latest ? <div className="h-100" style={{minHeight: '5rem'}}>
        <Link to={`/exams/ptms/${latest.id}`}>
        <div className='h-100 w-100' id='PTMCard'  style={{position:'absolute', zIndex:'9'}}></div>
            <div className="h-100 position-relative">
                <div className="position-absolute pl-3" style={{fontSize: '.75rem', top: '.7rem'}}>
                    {labels.map( (l,i) => 
                        <div className="d-inline-block mr-4" key={i} style={{lineHeight: '1.9rem'}}>
                            <span style={{fontSize: `${(2-i)*.5+1.4}rem`, fontWeight: 500}} className="mr-1">{latest.results[i]}</span>
                            {l}
                        </div>
                    )}
                </div>
                <div className="w-100 h-100">
                    <LinearChart xDomain={[ptms.length === 1 ? -1 : 0, ptms.length - 1]} yDomain={[0,Math.max(...ptms.map( d => d.results[0] ))]}>
                        <AreaGraph color={tinycolor(color).setAlpha(.12).toString()} data={
                            ptms.map( (d, i) => ({ x: i, y0: 0, y1: d.results[0] }))
                                .concat(ptms.length === 1 ? [{ x: -1, y0: 0, y1: 0 }] : [])
                        } />
                        <LineGraph color={tinycolor(color).setAlpha(.27).toString()} data={
                            ptms.map( (d, i) => ({ x: i, y: d.results[0], selected: d.id === latest.id }))
                                .concat(ptms.length === 1 ? [{ x: -1, y: 0, size: .01 }] : [])
                        } />
                    </LinearChart>
                </div>
            </div>
        </Link>
    </div> : 
    <div className="p-3">{t('Es liegen noch keine PTM Ergebnisse vor.')}</div>
})

const Wrapper = withTranslation()(({ t }) => <DashboardCard 
        noPadding
        title={<div className="px-3 pt-3">{t(`PTM`)}</div>}>
            <Ptm />
</DashboardCard>)

export default Wrapper