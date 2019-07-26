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
        {_.flow(_.groupBy(f => f.kategorie), _.map(c => 
            <div key={c[0].kategorie} title={c[0].kategorie} className="d-flex flex-wrap">
                {_.sortBy(s => s.title, c).map(s => <Subject key={s.name} name={s.name} semester={semester} />)}
            </div>
        ))(fächer)}
    </SubjectsTabs>
)
export default Subjects