import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'

export const identifier = 'progress'
const baseStore = BaseStore(identifier)
export const actions = baseStore.withLoadAction(`studienfortschritt`)({})

const moduleIsVisible = module => module.code < 200 || module.code >= 400

const dashboardData = () => {

    let getTotal = (array) => array.length

    let getErfuellt = (array) => array.reduce((acc, el) => {
        if (el.erfuellt) return acc + 1;
    })

    let obj = _.over([getTotal, getErfuellt])

    return {total: obj[0], done: obj[1]};
}

export const selectors = baseStore.withLoadedSelector({
    getTree: state => baseStore.getItems(state),
    getDashboardData: _.flow([ baseStore.getItems, _.flatMap( d => d.entries ), _.filter( moduleIsVisible ), dashboardData ]),
})


const transform = _.flow([
    d => d.meilensteine,
    _.groupBy( d => d.fachsemester),
    _.map( g => ({
        label: g[0].fachsemester + '. Fachsemester',
        prereq: _.defaultTo({ erfuellt: true }, g.find( d => d.code === g[0].fachsemester + 300)).erfuellt,
        completed: g.find( d => d.code === g[0].fachsemester + 200 ).erfuellt,
        entries: g.filter( moduleIsVisible ).map( d => ({ ...d, link: d.format && `/exams/${d.format}s/${d.studiPruefungsId}` })),
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
