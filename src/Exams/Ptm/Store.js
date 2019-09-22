import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import { minQuestions } from '../../Utils/Constants'
import BaseStore from '../BaseStore'
import Results from './Data'

export const identifier = 'ptms'
const baseStore = BaseStore(identifier)

const findById = _.curry((id, ptms) => ptms[id])
const findSubject = subject => _.flow([_.find({'name': subject}), _.defaultTo({})])
const getFächer = ptm => ptm.fächer
const getSubjects = _.flow([ getFächer ])
const getSubject = subject => _.flow([ getSubjects, findSubject(subject) ])
const getRanking = _.flow([ getSubjects, _.filter(s => s.gesamt >= minQuestions), _.sortBy(s => -s.richtig / s.gesamt) ])

const toTimeline = ptm => ({
    ...ptm,
    result: ptm.results[0],
    mean: ptm.means[0],
})
const getTimeline = _.flow([ baseStore.getItems, _.map( toTimeline ) ])

export const selectors = baseStore.withLoadedSelector({
    getSubjectByName: (state, id, subject) => _.flow([ baseStore.getItems, findById(id), getSubject(subject) ])(state),
    getAllForSubject: (state, subject) => 
    _.flow([ baseStore.getItems, _.map(ptm => ({ ...getSubject(subject)(ptm), short: ptm.short })) ])(state),
    getById: (state, id) => _.flow([ baseStore.getItems, findById(id) ])(state),
    getLatest: _.flow([ baseStore.getItems, _.sortBy('semester'), _.last ]),
    getSubjects,
    getRanking,
    strongestSubject: _.flow([ getRanking, _.first ]),
    getTimeline,
    getFächer,
})

export const actions = baseStore.withLoadAction({}, Results)

export const reducer = combineReducers(_.compose([baseStore.withLoadedReducer, baseStore.withSelectReducer])(( state = [], action ) => {
    switch(action.type) {
        default:
            return state
    }
}))