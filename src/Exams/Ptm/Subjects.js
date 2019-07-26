import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import SubjectsTabs from '../../Core/Tabs'
import needsData from '../../Core/needsData'
import Subject from './Subject'
import { selectors, actions } from './Store'

const stateToProps = (state, { semester }) => selectors.getBySemester(state, semester)
const Subjects = _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps))( ({ fächer, semester }) => 
    <SubjectsTabs>
        {fächer.map(c => 
            <div key={c.title} title={c.title} className="d-flex flex-wrap">
                {_.sortBy(s => s.title, c.subjects).map(s => <Subject key={s.name} name={s.name} semester={semester} />)}
            </div>
        )}
    </SubjectsTabs>
)
export default Subjects