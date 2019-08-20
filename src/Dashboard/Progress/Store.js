import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import Results from './Data'
import BaseStore from '../../Core/BaseStore'

export const identifier = 'progress'
const baseStore = BaseStore(identifier)

export const selectors = baseStore.withLoadedSelector({
    getTree: state => baseStore.getItems(state),
})

export const actions = baseStore.withLoadAction({}, Results)

export const reducer = combineReducers(baseStore.withLoadedReducer(( state = [], action ) => {
    switch(action.type) {
        default:
            return state
    }
}))