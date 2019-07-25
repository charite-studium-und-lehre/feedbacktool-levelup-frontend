import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import BaseStore from '../Store'
import Results from './Data'

export const identifier = 'semester'
const baseStore = BaseStore(identifier)
const findBySemester = _.curry((semester, exams) => exams[semester])

const toTimeline = exam => ({
    x: exam.date,
    result: exam.resultMean,
    mean: exam.distMean,
    label: exam.semester,
})
const getTimeline = _.flow([ baseStore.getItems, _.map( toTimeline ) ])

const ranking = _.flow([ baseStore.getItems, _.flatMap( i => i.fächer ), _.groupBy(f => f.code), 
    _.map( g => ({ ...g[0], result: _.sumBy('richtig')(g), total: _.sumBy('gesamt')(g) })), 
    _.filter(s => s.total > 4), 
    _.sortBy(s => s.total ? s.result / s.total : 0) ])

export const selectors = baseStore.withLoadedSelector({
    getBySemester: (state, semester) => _.flow([ baseStore.getItems, findBySemester(semester)])(state),
    strongestSubject: _.flow([ranking, _.last]),
    getTimeline,
})

export const actions = baseStore.withLoadAction({}, Results)

export const reducer = combineReducers(baseStore.withLoadedReducer(( state = [], action ) => {
    switch (action.type) {
        default:
            return state
    }
}))