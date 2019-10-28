import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import needsData from '../../Core/needsData'
import Filter from '../../Utils/Filter'
import Subject from './Subject'
import { selectors, actions } from './Store'
import css from './Subjects.module.css'
import { minQuestions } from '../../Utils/Constants';

const stateToProps = (state, { id }) => _.flow(selectors.getById, selectors.getSubjects, _.sortBy( s => -s.ergebnisPunktzahl / s.maximalPunktzahl ), r => ({ faecher: r}))(state, id)
const Subjects = _.compose(needsData(selectors.loaded, actions.load), withTranslation(), connect(stateToProps))( ({ t, faecher, id }) => {
    const categories = _.keys(_.groupBy( s => s.gruppe, faecher ))
    const [ filters, setFilters ] = useState( 
        categories.map(c => ({label: c, pred: d => d.gruppe === c , selected: true, color: 'hsla(200, 50%, 50%, .8)', group: 'categories'}))
        .concat({label: `mind. ${minQuestions} Fragen`, pred: s => s.maximalPunktzahl >= minQuestions , selected: true, color: 'hsla(200, 50%, 50%, .8)' })
    )
    const [ search, setSearch ] = useState('')

    const filtered = faecher.filter(
        _.overEvery([
            _.overSome(filters.filter( f => f.selected && f.group === 'categories').map( f => f.pred )), 
            s => s.titel.toLowerCase().indexOf(search.toLowerCase()) >= 0,
            _.overEvery([...filters.filter( f => f.selected && f.group !== 'categories' ).map( f => f.pred ), () => true]),
        ]))
    return (
    <div className="w-100">
        <div className="d-flex flex-column flex-lg-row">
            <div className="">
                <Filter filters={ filters } onUpdate={ setFilters } />
            </div>
            <div className="flex-grow-1 align-middle py-2">
                <input type="text" placeholder={`${t('Fach suchen')}...`} onKeyUp={e => setSearch(e.target.value)} className={`p-1 ${css.input}`}></input>
            </div>
        </div>
        <div className={css.subjects}>
        {filtered.map((s, rank) =>
            <div className={`w-100`} key={s.code}>
                <Subject extended={parseInt(rank) < 1} key={s.code} titel={s.titel} gruppe={s.gruppe} rank={parseInt(rank) + 1} id={id} />
            </div>
        )}
        </div>
    </div>)
})

export default Subjects