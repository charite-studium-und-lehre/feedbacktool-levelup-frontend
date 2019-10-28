import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import SubjectsTabs from '../Core/Tabs'
import needsData from '../Core/needsData'
import Subject from './Subject'
import { selectors, actions } from './Store'

const Subjects = _.compose([needsData(selectors.loaded, actions.load), connect(selectors.getData)])( ({ subjects, flash }) => {
    const categories = _.groupBy( s => s.ptm ? s.ptm.gruppe : 'Andere' , subjects)
    const active = _.findKey( c => _.some( s => s.name === flash, c ), categories)
    return (
    <SubjectsTabs active={active}>
        {_.flow(_.entries, _.reverse, _.map(([cat, subs]) => 
            <div key={cat} title={cat} className="d-flex flex-wrap justify-content-around">{
                _.sortBy('titel', subs).map(
                    s =>
                        <Subject
                            data={[s.mc || {}, s.ptm || {}]}
                            key={s.titel}
                            titel={s.titel}
                            flash={s.titel === flash}
                        />)
                }
            </div>
        ))(categories)}
    </SubjectsTabs>
)})

export default Subjects