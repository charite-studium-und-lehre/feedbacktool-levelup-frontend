import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import { minQuestions } from '../../Utils/Constants'
import BaseStore from '../Store'
import Results from './Data'

export const identifier = 'semester'
const baseStore = BaseStore(identifier)
const findById = _.curry((id, exams) => exams[id])

const toTimeline = exam => ({
    date: exam.date,
    result: exam.resultMean,
    mean: exam.distMean,
    label: exam.semester,
    id: exam.id,
})
const getTimeline = _.flow([ baseStore.getItems, _.map( toTimeline ) ])

const getSubjectsTotals = _.flow([ baseStore.getItems, _.flatMap( i => i.fächer ), _.groupBy(f => f.code), 
    _.map( g => ({ ...g[0], richtig: _.sumBy('richtig')(g), gesamt: _.sumBy('gesamt')(g) }))])

const getRanking = _.flow([ getSubjectsTotals, _.filter(s => s.gesamt >= minQuestions), _.sortBy(s => -s.richtig / s.gesamt) ])

export const selectors = baseStore.withLoadedSelector({
    getById: (state, id) => _.flow([ baseStore.getItems, findById(id)])(state),
    strongestSubject: _.flow([getRanking, _.first]),
    getRanking,
    getSubjectsTotals,
    getTimeline,
})

export const actions = baseStore.withLoadAction({}, Results)

export const reducer = combineReducers(baseStore.withLoadedReducer(( state = [], action ) => {
    switch (action.type) {
        default:
            return state
    }
}))