import { combineReducers } from 'redux'
import { post } from '../Core/DataProvider'
import BaseStore from '../Core/BaseStore'

export const identifier = 'user'
const url = 'stammdaten'
const baseStore = BaseStore(identifier)

export const actions = baseStore.withLoadAction(url)({
    sendStammdaten: matrikelnummer => dispatch =>
        post(`${url}`, { matrikelnummer })
            .then( result => (1 || result.status === 200) ?
                dispatch({ type: `${identifier.toUpperCase()}_DATA_SENT` }) :
                dispatch({ type: `${identifier.toUpperCase()}_DATA_SENT`, payload: result.status })
            )
})

export const selectors = baseStore.withLoadedSelector({
    isLoggedIn: state => baseStore.getStore(state).loggedIn,
    getData: baseStore.getItems,
    getError: state => baseStore.getStore(state).error
})

const error = (state = null, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_DATA_SENT`:
            return action.payload || null
        default:
            return state
    }
}

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
        case `${identifier.toUpperCase()}_DATA_SENT`:
            return { ...state, stammdatenVorhanden: !action.payload }
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return action.payload
        case `${identifier.toUpperCase()}_DATA_FETCH_FAILED`:
            return state
        default:
            return state
    }
}), loggedIn, error })