import React, {useState} from 'react'
import {connect} from 'react-redux'
import needsData from '../../Core/needsData'
import Filter from '../../Utils/Filter'
import Subject from './Subject'
import {selectors, actions} from './Store'
import css from './Subjects.module.css'
import {minQuestions} from '../../Utils/Constants'
import COLORS from "../../colors"
import {compose, overSome, overEvery} from '../../Utils/utils'

const stateToProps = (state, {id}) => {

    let subjects = selectors.getSubjects(
        selectors.getById(state, id)
    );

    subjects.sort((a, b) =>
        b.ergebnisRichtigPunktzahl / b.maximalPunktzahl -
        a.ergebnisRichtigPunktzahl / a.maximalPunktzahl
    );

    return {faecher: subjects};
}

const Subjects = compose(
    needsData(selectors.loaded, actions.load),
    connect(stateToProps)
)(({faecher, id}) => {

    let categories = {}

    for (let i = 0; i < faecher.length; i++)
        if (!categories[faecher[i].gruppe]) categories[faecher[i].gruppe] = [];
        else categories[faecher[i].gruppe].push(faecher[i]);

    categories = Object.keys(categories);

    const filterColors = {
        background: COLORS.background.grey5,
        line: COLORS.background.grey6,
        text: COLORS.background.base
    }

    const [filters, setFilters] = useState(
        categories.map(c => ({
            label: c,
            pred: d => d.gruppe === c ,
            selected: true,
            color: filterColors.background,
            group: 'categories'
        }))
        .concat({
            label: `mind. ${minQuestions} Fragen`,
            pred: s => s.maximalPunktzahl >= minQuestions ,
            selected: true,
            color: filterColors.background
        })
    )

    const [search, setSearch] = useState('')

    let Filters = [
        overSome(filters.filter(f => f.selected && f.group === 'categories').map(f => f.pred)),
        s => s.titel.toLowerCase().indexOf(search.toLowerCase()) >= 0,
        overEvery(...filters.filter(f => f.selected && f.group !== 'categories').map(f => f.pred)),
    ];

    const filtered = faecher.filter(overEvery(Filters))

    return (
    <div className="w-100">
        <div className="">
            <Filter className="w-100" filters={ filters } onUpdate={ setFilters } colors={filterColors}/>
        </div>
        <div className="align-middle my-2 pr-1">
            <input type="text" placeholder='Fach suchen...' id='Fach suchen' onKeyUp={e => setSearch(e.target.value)} className={`p-1 ${css.input}`}></input>
        </div>
        <div className={css.subjects}>
        {filtered.map((s, rank) =>
            <div className={`w-100`} key={rank}>
                <Subject extended={parseInt(rank) < 1} key={s.code}
                         titel={s.titel} gruppe={s.gruppe} rank={parseInt(rank) + 1} id={id}
                         filterColors={filterColors}/>
            </div>
        )}
        </div>
    </div>)
})

export default Subjects
