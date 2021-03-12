import BaseStore from '../BaseStore'
import {combineReducers} from 'redux'
import {stationsReducer, filter, toTimeline} from './StoreUtils'
import {compose} from '../../Utils/utils'

export const identifier = 'stations'
const baseStore = BaseStore(identifier)

const getTimeline = (state) => Object.values(baseStore.getItems(state)).map(toTimeline)
const getFilterState = (state) => baseStore.getStore(state).groupFilter

export const getFilters = state => groups => groups.map(g => ({
    label: `${g}. Fachsemester`,
    value: g,
    pred: e => e.fachsemester === g,
    selected: getFilterState(state).indexOf(g) >= 0
}))

const getGroupFilters = state => {
    let exams = Object.values(baseStore.getItems(state)).map(exam => exam.fachsemester);
    exams = [...new Set(exams)];
    exams = getFilters(state)(exams);
    return exams;
}

export const selectors = baseStore.withLoadedSelector({
    getItems: baseStore.getItems,
    getFilteredItems: state => filter(getGroupFilters(state))(Object.values(baseStore.getItems)),
    getTimeline,
    getGroupFilters,
})

export const actions = baseStore.withLoadAction({
    setGroupFilters: groups => ({
        type: 'STATIONS_FILTER_GROUPS',
        payload: groups
    }),
})

const groupFilter = (state = [], action) => {
    switch(action.type) {
        case 'EXAMS_SELECT':
            return identifier.startsWith(action.payload.format) ? [action.payload.fachsemester] : []
        case 'STATIONS_FILTER_GROUPS':
            return action.payload
        default:
            return state
    }
}

export const reducer = combineReducers({
    items: compose([
        baseStore.withSelectReducer,
        baseStore.withLoadedReducer()
    ])(stationsReducer),
    groupFilter
})
