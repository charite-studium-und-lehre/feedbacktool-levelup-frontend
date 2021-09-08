import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import SubjectsTabs from '../Utils/Tabs'
import needsData from '../Core/needsData'
import Subject from './Subject'
import { selectors, actions } from './Store'
import { compose, flow } from '../Utils/utils.js'

const Subjects = compose([needsData(selectors.loaded, actions.load), connect(selectors.getData)])(({subjects, flash}) => {
    let categories = subjects.reduce((map, elm) => {
        let titel = elm.ptm ? elm.ptm.gruppe : 'Andere'
        if (Array.isArray(map.get(titel))) map.get(titel).push(elm)
        else map.set(titel, new Array(elm))
        return map
    }, new Map())
    categories = Object.fromEntries(categories)
    return (
    <SubjectsTabs>
        {flow(_.entries, _.reverse, _.map(([cat, subs]) =>
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
