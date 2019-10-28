import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'

export const identifier = 'user'
const url = 'stammdaten'
const baseStore = BaseStore(identifier)

export const actions = baseStore.withLoadAction(url)({})

export const selectors = baseStore.withLoadedSelector({
    isLoggedIn: state => baseStore.getStore(state).loggedIn,
    getData: baseStore.getItems,
})

const loggedIn = (state = null, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return true
        case `${identifier.toUpperCase()}_DATA_FETCH_FAILED`:
            return false
        default:
            return state
    }
}

export const reducer = combineReducers({ ...baseStore.withLoadedReducer((state = {}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return action.payload
        case `${identifier.toUpperCase()}_DATA_FETCH_FAILED`:
            return state
        default:
            return state
    }
}), loggedIn })