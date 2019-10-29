import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import { minQuestions } from '../../Utils/Constants'
import BaseStore from '../BaseStore'

export const identifier = 'ptms'
const baseStore = BaseStore(identifier)

const findById = id => ptms => ptms[id]
const findSubject = subject => _.flow([_.find({'titel': subject}), _.defaultTo({})])
const getFaecher = ptm => ptm.faecher
const getSubjects = _.flow([ getFaecher ])
const getSubject = subject => _.flow([ getSubjects, findSubject(subject) ])
const getRanking = _.flow([ getSubjects, _.filter(s => s.maximalPunktzahl >= minQuestions), _.sortBy([ s => -s.ergebnisRichtigPunktzahl / s.maximalPunktzahl, s => -s.maximalPunktzahl ]) ])

const toTimeline = ptm => ({
    ...ptm,
    link: `ptms/${ptm.id}`
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

const transform = ptm => ({
    ...ptm,
    results: [ ptm.gesamtErgebnis.ergebnisRichtigPunktzahl, ptm.gesamtErgebnis.ergebnisFalschPunktzahl, ptm.gesamtErgebnis.ergebnisWeissnichtPunktzahl ],
    means: [ ptm.gesamtErgebnis.durchschnittRichtigPunktzahl, ptm.gesamtErgebnis.durchschnittFalschPunktzahl, ptm.gesamtErgebnis.durchschnittWeissnichtPunktzahl ],
})

export const reducer = combineReducers({ items: _.compose([baseStore.withSelectReducer, baseStore.withLoadedReducer(transform)])(( state = {}, action ) => {
    switch(action.type) {
        default:
            return state
    }
})})