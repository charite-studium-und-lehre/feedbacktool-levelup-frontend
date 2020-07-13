import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'

export const identifier = 'progress'
const baseStore = BaseStore(identifier)

const isVisible = (d) => {
    console.log(d);
    return d.code < 200 || d.code >= 400
}

const getTotal = _.sumBy( () => 1 )
const getDone = _.sumBy( e => e.erfuellt )
const dashboardData = _.flow([
    _.over([ getTotal, getDone ]),
    ([ total, done ]) => ({ total, done })
])

export const selectors = baseStore.withLoadedSelector({
    getTree: state => baseStore.getItems(state),
    getDashboardData: _.flow([ baseStore.getItems, _.flatMap( d => d.entries ), _.filter( isVisible ), dashboardData ]),
})

export const actions = baseStore.withLoadAction(`studienfortschritt`)({})

const transform = _.flow([
    d => d.meilensteine,
    _.groupBy( d => d.fachsemester),
    _.map( g => ({
        label: g[0].fachsemester + '. Fachsemester',
        prereq: _.defaultTo({ erfuellt: true }, g.find( d => d.code === g[0].fachsemester + 300)).erfuellt,
        completed: g.find( d => d.code === g[0].fachsemester + 200 ).erfuellt,
        entries: g.filter( isVisible ).map( d => ({ ...d, link: d.format && `/exams/${d.format}s/${d.studiPruefungsId}` })),
    }))
])

export const reducer = combineReducers(baseStore.withLoadedReducer(
    (state = {}, action) => {
        switch(action.type) {
            case `${identifier.toUpperCase()}_DATA_FETCHED`:
                return transform(action.payload)
            default:
                return state
        }
    }
))
