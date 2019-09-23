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
const Ptm = _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps))(
    ({ latest, ptms }) => <Link to={`/exams/ptm/${latest.id}`}>
    <div>
        <div className="row">
            <div className="col">
                <div className="position-absolute pl-2" style={{fontSize: '.75rem'}}>
                    <div><span className="font-weight-bold">{labels[0]}: </span>{latest.results[0][0]}</div>
                    <div><span className="font-weight-bold">{labels[1]}: </span>{latest.results[1][0]}</div>
                    <div><span className="font-weight-bold">{labels[2]}: </span>{latest.results[2][0]}</div>
                </div>
                <div className="w-100" style={{height: '4rem'}}>
                    <LinearChart xDomain={[0, ptms.length - 1]} yDomain={[0,Math.max(..._.flatten(latest.results))]}>
                        <AreaGraph labels color={tinycolor(color).setAlpha(.08).toString()} data={ptms.map( (d, i) => ({ x: i, y0: 0, y1: d.result }))} />
                        <LineGraph labels color={tinycolor(color).setAlpha(.23).toString()} data={ptms.map( (d, i) => ({ x: i, y: d.result }))} />
                    </LinearChart>
                </div>
            </div>
        </div>
    </div>
    </Link>
)

const Wrapper = withTranslation()(({ t }) => <DashboardCard 
        noPadding
        header={Math.round(Math.random() * 100) + ' %'} 
        title={<div className="px-3 pt-3">{t(`PTM`)}</div>}>
            <Ptm />
</DashboardCard>)

export default Wrapper