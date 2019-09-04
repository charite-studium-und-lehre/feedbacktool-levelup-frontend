import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import Results from './Data'
import BaseStore from '../Core/BaseStore'

export const identifier = 'progress'
const baseStore = BaseStore(identifier)

const traverse = p => e => e.entries ? _.sum(e.entries.map(traverse(p))) : p(e)
const getTotal = _.sumBy(traverse( () => 1 ))
const getDone = _.sumBy(traverse( e => e.done ))
const dashboardData = _.flow([
    _.over([ getTotal, getDone ]),
    ([ total, done ]) => ({ total, done })
])

export const selectors = baseStore.withLoadedSelector({
    getTree: state => baseStore.getItems(state),
    getDashboardData: _.flow([ baseStore.getItems, dashboardData ])
})

export const actions = baseStore.withLoadAction({}, Results)

export const reducer = combineReducers(baseStore.withLoadedReducer(( state = [], action ) => {
    switch(action.type) {
        default:
            return state
    }
}))