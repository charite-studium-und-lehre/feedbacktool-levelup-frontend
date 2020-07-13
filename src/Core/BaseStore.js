import _ from 'lodash/fp'
import { get } from './DataProvider'
/*
* Provides basic functions to stores which need to load data from an external source
* parameter identifier must be unique throughout the entire app
*/
export default (identifier, getStore) => {
    getStore = getStore || (state => state[identifier])

    const loaded = ( state = false, action ) => {
        switch (action.type) {
            case `${identifier.toUpperCase()}_DATA_FETCHED`:
                return true
            case `${identifier.toUpperCase()}_DATA_FETCH_FAILED`:
            default:
                return state
        }
    }

    const fetching = ( state = false, action ) => {
        switch (action.type) {
            case `${identifier.toUpperCase()}_DATA_FETCHING`:
                return true
            case `${identifier.toUpperCase()}_DATA_FETCH_FAILED`:
                console.error(action.payload)
                return false
            case `${identifier.toUpperCase()}_DATA_FETCHED`:
                return false
            default:
                return state
        }
    }

    const loadReducer = (state = [], action) => {
        switch(action.type) {
            case `${identifier.toUpperCase()}_DATA_FETCHED`:
                return action.payload
            default:
                return state
        }
    }

    return {
        getStore,
        withLoadedSelector: selectors => ({
            loaded: state => getStore(state).loaded,
            ...selectors
        }),
        withLoadAction: url => actions => ({
            load: () => (dispatch, getState) => {
                if(getStore(getState()).fetching || getStore(getState()).loaded) return
                get(url)
                    .then( result => result.json().then( data => dispatch({ type: `${identifier.toUpperCase()}_DATA_FETCHED`, payload: data })))
                    .catch( err => dispatch({ type: `${identifier.toUpperCase()}_DATA_FETCH_FAILED`, payload: err }))
                dispatch({ type: `${identifier.toUpperCase()}_DATA_FETCHING` })
            },
            ...actions
        }),
        withLoadedReducer: (reducer = loadReducer) => ({
            loaded,
            fetching,
            items: reducer,
        }),
        getItems: _.flow([getStore, store => store.items]),
    }
}
