import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import needsData from '../../Core/needsData'
import Filter from '../../Utils/Filter'
import Subject from './Subject'
import { selectors, actions } from './Store'
import css from './Subjects.module.css'
import { minQuestions } from '../../Utils/Constants'
import COLORS from "../../colors"

const stateToProps = (state, { id }) => _.flow(selectors.getById, selectors.getSubjects, _.sortBy( s => -s.ergebnisRichtigPunktzahl / s.maximalPunktzahl ), r => ({ faecher: r}))(state, id)
const Subjects = _.compose(needsData(selectors.loaded, actions.load), withTranslation(), connect(stateToProps))( ({ t, faecher, id }) => {
    const categories = _.keys(_.groupBy( s => s.gruppe, faecher ))
    const filterBgColor = COLORS.background.grey1
    const filterTextColor = COLORS.textBlack
    const [ filters, setFilters ] = useState(
        categories.map(c => ({label: c, pred: d => d.gruppe === c , selected: true, color: filterBgColor, group: 'categories'}))
        .concat({label: `mind. ${minQuestions} Fragen`, pred: s => s.maximalPunktzahl >= minQuestions , selected: true, color: filterBgColor })
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
        <div className="">
            <Filter className="w-100" filters={ filters } onUpdate={ setFilters } />
        </div>
        <div className="align-middle my-2 pr-1">
            <input type="text" placeholder={`${t('Fach suchen')}...`} onKeyUp={e => setSearch(e.target.value)} className={`p-1 ${css.input}`}></input>
        </div>
        <div className={css.subjects}>
        {filtered.map((s, rank) =>
            <div className={`w-100`} key={s.code}>
                <Subject extended={parseInt(rank) < 1} key={s.code}
                         titel={s.titel} gruppe={s.gruppe} rank={parseInt(rank) + 1} id={id}
                         filterBgColor={filterBgColor} filterTextColor={filterTextColor}/>
            </div>
        )}
        </div>
    </div>)
})

export default Subjects