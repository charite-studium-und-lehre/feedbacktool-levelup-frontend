import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import { minQuestions } from '../../Utils/Constants'
import BaseStore from '../BaseStore'
import Results from './Data'

export const identifier = 'ptms'
const baseStore = BaseStore(identifier)

const findById = _.curry((id, ptms) => ptms[id])
const findSubject = subject => _.flow([_.find({'name': subject}), _.defaultTo({})])
const getFaecher = ptm => ptm.faecher
const getSubjects = _.flow([ getFaecher ])
const getSubject = subject => _.flow([ getSubjects, findSubject(subject) ])
const getRanking = _.flow([ getSubjects, _.filter(s => s.gesamt >= minQuestions), _.sortBy(s => -s.richtig / s.gesamt) ])

const toTimeline = ptm => ({
    ...ptm,
    link: `ptm/${ptm.id}`,
    results: ptm.results || [1,2,3]
})
const getTimeline = _.flow([ baseStore.getItems, _.map( toTimeline ) ])

export const selectors = baseStore.withLoadedSelector({
    getSubjectByName: (state, id, subject) => _.flow([ baseStore.getItems, findById(id), getSubject(subject) ])(state),
    getAllForSubject: (state, subject) => 
        _.flow([ baseStore.getItems, _.map(ptm => ({ ...getSubject(subject)(ptm), zeitsemester: ptm.zeitsemester })) ])(state),
    getById: (state, id) => _.flow([ baseStore.getItems, findById(id) ])(state),
    getLatest: _.flow([ baseStore.getItems, _.sortBy('periodeCode'), _.last ]),
    getSubjects,
    getRanking,
    strongestSubject: _.flow([ getRanking, _.first ]),
    getTimeline,
    getFaecher,
})

export const actions = baseStore.withLoadAction({})

export const reducer = combineReducers({ items: _.compose([baseStore.withSelectReducer, baseStore.withLoadedReducer])(( state = {}, action ) => {
    switch(action.type) {
        default:
            return state
    }
}, _.keyBy( d => d.id, _.take(1, _.values(Results))))})