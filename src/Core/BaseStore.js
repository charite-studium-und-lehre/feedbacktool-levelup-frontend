import { combineReducers } from 'redux'

export default identifier => {
    const loaded = ( state = false, action ) => {
        switch (action.type) {
            case `${identifier.toUpperCase()}_DATA_FETCHED`:
                return true
            default:
                return state
        }
    }

    return {
        withLoadedSelector: selectors => ({ 
            loaded: state => state[identifier].loaded,
            ...selectors
        }),
        withLoadAction: (actions, result) => ({
            load: () => dispatch => setTimeout(() => dispatch({ type: `${identifier.toUpperCase()}_DATA_FETCHED`, payload: result }), 1000), 
            ...actions 
        }),
        withLoadedReducer: reducer => combineReducers({
            loaded,
            items: reducer
        })
    }
}