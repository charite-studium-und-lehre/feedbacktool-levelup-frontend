import _ from 'lodash/fp'
import BaseStore from '../BaseStore'
import Results from './Data'
import { combineReducers } from 'redux'

export const identifier = 'stations'
const baseStore = BaseStore(identifier)
const findBySemester = _.curry((semester, exams) => exams[semester])

const toTimeline = exams => ({
    date: exams[0].date,
    result: _.meanBy('result', exams),
    mean: _.meanBy('mean', exams),
    label: exams[0].group,
    id: exams[0].id,
    timesemester: exams[0].timesemester,
    group: exams[0].group
})
const getTimeline = _.flow([ baseStore.getItems, _.groupBy(e => e.group), _.map( toTimeline ) ])

const getFilterState = _.flow(baseStore.getStore, s => s.groupFilter)
const getGroups = _.flow(_.map( d => d.group ), _.uniq)
const getFilters = state => groups => groups.map(g => ({ label: g, pred: e => e.group === g, selected: getFilterState(state).indexOf(g) >= 0 }))

export const selectors = baseStore.withLoadedSelector({
    getItems: baseStore.getItems,
    getBySemester: (state, semester) => _.flow([ baseStore.getItems, findBySemester(semester)])(state),
    getTimeline,
    getGroupFilters: state => _.flow(baseStore.getItems, getGroups, getFilters(state))(state)
})

export const actions = {
    ...baseStore.withLoadAction({}, Results),
    setGroupFilters: groups => ({ type: 'STATIONS_FILTER_GROUPS', payload: groups }),
}

const groupFilter = ( state = [], action ) => {
    switch(action.type) {
        case 'EXAMS_SELECT':
            return action.payload.value && action.payload.value.group ? [action.payload.value.group] : state
        case 'STATIONS_FILTER_GROUPS':
            return action.payload
        default:
            return state
    }
}

export const reducer = combineReducers({...baseStore.withLoadedReducer(( state = [], action ) => {
    switch (action.type) {
        default:
            return state
    }
}), groupFilter})