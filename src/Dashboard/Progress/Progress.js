import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import Checklist from './Checklist'
import { selectors, actions } from './Store'
import Legend from '../../Charting/Legend'
import needsData from '../../Core/needsData'

const checklistStyle = {
    whiteSpace: 'nowrap',
    overflow: 'auto',
    margin: '0 -2.5rem',
}

const stateToProps = state => ({ data: selectors.getTree(state) })
const Progress = _.compose([withTranslation(), needsData(selectors.loaded, actions.load), connect(stateToProps)])(({ t, data }) =>
    <div className="card progress-card with-border" style={{overflow: 'hidden'}}>
        <div className="card-body">
            <Legend title={t('Dein Studienfortschritt')}>{t('Hier siehst Du deinen Studienfortschritt und deine bereits erreichten Meilensteinen.')}</Legend>
            <div style={checklistStyle}>
                <div style={{margin: '0 2.5rem'}}>
                {data.map(d => <Checklist key={d.label} className="d-inline-block align-top" data={d} /> )}
                </div>
            </div>
        </div>
    </div>)

export default Progress