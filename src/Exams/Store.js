import { combineReducers } from 'redux'
import { reducer as ptmsReducer, identifier as ptmsIdentifier } from './Ptm/Store'
import { reducer as mcReducer, identifier as mcIdentifier } from './MC/Store'
import { reducer as stationsReducer, identifier as stationsIdentifier } from './Stations/Store'
import { graphs, selected, getSemesters, getById } from './StoreUtils'
import BaseStore from '../Core/BaseStore'

export const identifier = 'exams'
export const url = 'pruefungen'
const baseStore = BaseStore(identifier)

export const selectors = baseStore.withLoadedSelector({
    getNavigationData: graphs,
    getById: getById,
    getSelected: (state) => baseStore.getItems(state).selected,
    getSemesters: getSemesters,
})

export const actions = baseStore.withLoadAction(url)({
    setSelected: value => ({
        type: 'EXAMS_SELECT',
        payload: value
    })
})

export const reducer = combineReducers(baseStore.withLoadedReducer(
    combineReducers({
        selected,
        [ptmsIdentifier]: ptmsReducer,
        [mcIdentifier]: mcReducer,
        [stationsIdentifier]: stationsReducer
    })
))
