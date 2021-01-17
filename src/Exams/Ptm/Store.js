import {combineReducers} from 'redux'
import {compose} from '../../Utils/compose'
import BaseStore from '../BaseStore'
import {getSubject, toTimeline, getRanking, getLatest, getAllForSubject} from './StoreUtils'

export const identifier = 'ptms'
const baseStore = BaseStore(identifier)

export const selectors = baseStore.withLoadedSelector({
    getSubjectByName: (state, id, subject) =>
        getSubject(baseStore.getItems(state)[id], subject),
    getAllForSubject: (state, subject) =>
        getAllForSubject(Object.values(baseStore.getItems(state)), subject),
    getById: (state, id) => baseStore.getItems(state)[id],
    getLatest: (state) => getLatest(Object.values(baseStore.getItems(state))),
    getSubjects: (ptm) => ptm.faecher,
    getRanking,
    strongestSubject: (ptms) => getRanking(ptms)[0],
    getTimeline: (state) => Object.values(baseStore.getItems(state)).map(toTimeline),
    getFaecher: (ptm) => ptm.faecher,
})

export const actions = baseStore.withLoadAction({})

const transform = ptm => ({
    ...ptm,
    results: [
        ptm.gesamtErgebnis.ergebnisRichtigPunktzahl,
        ptm.gesamtErgebnis.ergebnisFalschPunktzahl,
        ptm.gesamtErgebnis.ergebnisWeissnichtPunktzahl
    ],
    means: [
        ptm.gesamtErgebnis.durchschnittRichtigPunktzahl,
        ptm.gesamtErgebnis.durchschnittFalschPunktzahl,
        ptm.gesamtErgebnis.durchschnittWeissnichtPunktzahl
    ],
})

export const reducer = combineReducers({
    items: compose([baseStore.withSelectReducer, baseStore.withLoadedReducer(transform)])(
        (state = {}, action ) => {
            switch(action.type) {
                default:
                    return state
            }
        }
    )
})
