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
})
const getTimeline = _.flow([ baseStore.getItems, _.groupBy(e => e.group), _.map( toTimeline ) ])

export const selectors = baseStore.withLoadedSelector({
    getItems: baseStore.getItems,
    getBySemester: (state, semester) => _.flow([ baseStore.getItems, findBySemester(semester)])(state),
    getTimeline,
})

export const actions = baseStore.withLoadAction({}, Results)

export const reducer = combineReducers(baseStore.withLoadedReducer(( state = [], action ) => {
    switch (action.type) {
        default:
            return state
    }
}))