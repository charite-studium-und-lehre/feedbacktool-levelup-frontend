import React from 'react'
import { compose } from 'lodash/fp'
import { connect } from 'react-redux'
import Checklist, { colors } from './Checklist'
import { selectors, actions } from './Store'
import needsData from '../Core/needsData'
import Legend from '../Charting/Legend'

const LegendColor = ({ color }) => <span className="d-inline-block ml-2 mr-1" style={{ backgroundColor: color, width: '1rem', height: '.8rem' }}></span>
const stateToProps = state => ({ data: selectors.getTree(state) })

const Progress = compose([needsData(selectors.loaded, actions.load), connect(stateToProps)])
(
    ({ data }) =>
    <div className="container-fluid">
        <div className="row mb-1">
            <div className="col">
                <Legend title="Studienfortschritt">
                    <LegendColor color={colors[0]} />abgeschlossen
                    <LegendColor color={colors[1]} />offen
                    <LegendColor color={colors[2]} />Voraussetzungen nicht erfüllt
                </Legend>
            </div>
        </div>
        <div className="row">
            <div className="col">
                {data.map(d => <Checklist key={d.label} {...d} /> )}
            </div>
        </div>
    </div>
)

export default Progress
