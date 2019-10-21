import _ from 'lodash/fp'
import BaseStore from '../BaseStore'
import Results from './Data'
import { combineReducers } from 'redux'

export const identifier = 'stations'
const baseStore = BaseStore(identifier)
const findBySemester = _.curry((semester, exams) => exams[semester])

const toTimeline = exams => ({
    result: _.meanBy('result', exams),
    mean: _.meanBy('mean', exams),
    label: exams[0].group,
    link: `stations/${exams[0].id}`,
    ...exams[0]
})
const getTimeline = _.flow([ baseStore.getItems, _.groupBy(e => e.group), _.map( toTimeline ) ])

const getFilterState = _.flow(baseStore.getStore, s => s.groupFilter)
const getGroups = _.flow(_.map( d => d.group ), _.uniq)
const getFilters = state => groups => groups.map(g => ({ label: g, pred: e => e.group === g, selected: getFilterState(state).indexOf(g) >= 0 }))

const filter = filters => data => data.filter(_.overSome(filters.filter(f => f.selected).map(f => f.pred)))
const getGroupFilters = state => _.flow(baseStore.getItems, getGroups, getFilters(state))(state)

export const selectors = baseStore.withLoadedSelector({
    getItems: baseStore.getItems,
    getFilteredItems: state => _.flow(baseStore.getItems, filter(getGroupFilters(state))),
    getBySemester: (state, semester) => _.flow([ baseStore.getItems, findBySemester(semester)])(state),
    getTimeline,
    getGroupFilters,
})

export const actions = {
    ...baseStore.withLoadAction({}, Results),
    setGroupFilters: groups => ({ type: 'STATIONS_FILTER_GROUPS', payload: groups }),
}

const groupFilter = ( state = [], action ) => {
    switch(action.type) {
        case 'STATIONS_FILTER_GROUPS':
            return action.payload
        default:
            return state
    }
}

const stationsReducer = ( state = [], action ) => {
    switch (action.type) {
        default:
            return state
    }
}

export const reducer = combineReducers({ ..._.compose([baseStore.withLoadedReducer, baseStore.withSelectReducer])(stationsReducer), groupFilter })