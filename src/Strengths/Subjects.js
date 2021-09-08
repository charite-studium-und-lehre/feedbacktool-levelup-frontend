import React from 'react'
import { connect } from 'react-redux'
import SubjectsTabs from '../Utils/Tabs'
import needsData from '../Core/needsData'
import Subject from './Subject'
import { selectors, actions } from './Store'

const Sub = ({subjects, flash}) => {

    let categories = subjects.reduce((map, elm) => {
        let titel = elm.ptm ? elm.ptm.gruppe : 'Andere'
        if (Array.isArray(map.get(titel))) map.get(titel).push(elm)
        else map.set(titel, new Array(elm))
        return map
    }, new Map())

    categories = Object.fromEntries(categories)

    const active = Array.from(categories).find(cat => cat.find(subject => subject.name === flash))

    return (<SubjectsTabs active={active}>
        {
            Object.entries(categories).reverse().map(([cat, subs]) =>
                <div key={cat} title={cat} className="d-flex flex-wrap justify-content-around">
                {
                    subs.sort((a, b) => ('' + a.titel).localeCompare(b.titel)).map(s =>
                        <Subject
                            data={[s.mc || {}, s.ptm || {}]}
                            key={s.titel}
                            titel={s.titel}
                            flash={s.titel === flash}
                        />
                    )
                }
                </div>
            )
        }
    </SubjectsTabs>)
}

export default needsData(selectors.loaded, actions.load)(connect(selectors.getData)(Sub))
