import _ from 'lodash/fp'

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
            default:
                return state
        }
    }

    const fetching = ( state = false, action ) => {
        switch (action.type) {
            case `${identifier.toUpperCase()}_DATA_FETCHING`:
                return true
            case `${identifier.toUpperCase()}_DATA_FETCHED`:
                return false
            default:
                return state
        }
    }

    const loadReducer = reducer => (state, action) => {
        switch(action.type) {
            case `${identifier.toUpperCase()}_DATA_FETCHED`:
                return action.payload
            default:
                return reducer(state, action)
        }
    }

    return {
        getStore,
        withLoadedSelector: selectors => ({ 
            loaded: state => getStore(state).loaded,
            ...selectors
        }),
        withLoadAction: (actions, result) => ({
            load: () => (dispatch, getState) => {
                if(getStore(getState()).fetching || getStore(getState()).loaded) return
                setTimeout(() => dispatch({ type: `${identifier.toUpperCase()}_DATA_FETCHED`, payload: result}), 100)
                dispatch({ type: `${identifier.toUpperCase()}_DATA_FETCHING` })
            },
            ...actions 
        }),
        withLoadedReducer: reducer => ({
            loaded,
            fetching,
            items: loadReducer(reducer)
        }),
        getItems: _.flow([getStore, store => store.items]),
    }
}