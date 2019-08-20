import React, { useState } from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import Checklist from './Checklist'
import { selectors, actions } from './Store'
import Legend from '../../Charting/Legend'
import needsData from '../../Core/needsData'
import SimpleDonut from '../../Charting/SimpleDonut'

const checklistStyle = {
    whiteSpace: 'nowrap',
    overflow: 'auto',
    margin: '0 -2.5rem',
}

const Progress = _.compose([withTranslation(), needsData(selectors.loaded, actions.load), connect(selectors.getDashboardData)])(({ t, ...props }) =>
    <div className="card progress-card with-border" style={{overflow: 'hidden'}}>
        <div className="card-body">
            <Legend title={t('Dein Studienfortschritt')}>{t('Hier siehst Du deinen Studienfortschritt und deine bereits erreichten Meilensteinen.')}</Legend>
            <div style={checklistStyle}>
                {/* {data.map(d => <Checklist key={d.label} className="d-inline-block align-top" data={d} /> )} */}
                <div className="m-auto" style={{width: '10rem', height: '10rem'}}>
                    <SimpleDonut value={ props.done / props.total * 100 } width=".9rem">
                        <div style={{fontSize: '1.8rem'}}>{ props.done / props.total * 100 } %</div>
                        <div style={{fontSize: '.8rem'}}>{ props.done } / { props.total }</div>
                    </SimpleDonut>
                </div>
            </div>
        </div>
    </div>
)

export default Progress