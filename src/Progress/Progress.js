import React from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import Checklist from './Checklist'
import { selectors, actions } from './Store'
import needsData from '../Core/needsData'

const stateToProps = state => ({ data: selectors.getTree(state) })
const Progress = _.compose([withTranslation(), needsData(selectors.loaded, actions.load), connect(stateToProps)])(({ data, ...props }) =>
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                {data.map(d => <Checklist key={d.label} data={d} /> )}
            </div>
        </div>
    </div>
)

export default Progress