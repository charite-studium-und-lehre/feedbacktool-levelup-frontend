import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import needsData from '../../Core/needsData'
import Filter from '../../Utils/Filter'
import Subject from './Subject'
import { selectors, actions } from './Store'
import css from './Subjects.module.css'

const stateToProps = (state, { semester }) => _.flow(selectors.getBySemester, selectors.getSubjects, _.sortBy( s => -s.richtig / s.gesamt ), r => ({ fächer: r}))(state, semester)
const Subjects = _.compose(needsData(selectors.loaded, actions.load), withTranslation(), connect(stateToProps))( ({ t, fächer, semester }) => {
    const categories = _.keys(_.groupBy( s => s.kategorie, fächer ))
    const [ categoryFilters, setCategoryFilters ] = useState( categories.map(c => ({label: c, pred: d => d.kategorie === c , selected: true, color: 'hsla(200, 50%, 50%, .8)' })) )
    const [ search, setSearch ] = useState('')

    const filtered = fächer.filter(
        _.overEvery([
            _.overSome(categoryFilters.filter( f => f.selected ).map( f => f.pred )), 
            s => s.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
        ]))
    return (
    <div className="w-100">
        <div className="d-flex">
            {/* {t('Filter')}:  */}
            <div className="">
                <Filter
                    filters={ categoryFilters } 
                    onUpdate={ setCategoryFilters } />
            </div>
            <div className="flex-grow-1 align-middle py-2">
                <input type="text" placeholder="suchen..." onKeyUp={e => setSearch(e.target.value)} className={`p-1 ${css.input}`}></input>
            </div>
        </div>
        {filtered.map((s, rank) =>
            <div className="w-100" key={s.name}>
                <Subject key={s.name} name={s.name} rank={parseInt(rank) + 1} semester={semester} />
            </div>
        )}
    </div>)
})

export default Subjects