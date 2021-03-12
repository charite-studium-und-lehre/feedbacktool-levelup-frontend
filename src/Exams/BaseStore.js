import BaseStore from '../Core/BaseStore'
import { identifier } from './Store'
import {
    identity,
    examsSelected,
    dataFetched,
    withLoadAction,
    withLoadedSelector
} from './BaseStoreUtils'

const withSelectReducer = reducer => (state, action) => {
    switch(action.type) {
        case 'EXAMS_SELECT':
            return examsSelected(state, action.payload.id);
        default:
            return reducer(state, action);
    }
}

export default newIdentifier => {

    const examsLoadedReducer = (transform = identity) => reducer => (state, action) => {
        switch(action.type) {
            case 'EXAMS_DATA_FETCHED':
                return dataFetched(action.payload, newIdentifier, transform)
            default:
                return reducer(state, action)
        }
    }

    const baseStore = BaseStore(newIdentifier, state => state[identifier].items[newIdentifier])
    return {
        ...baseStore,
        withLoadAction: withLoadAction,
        withLoadedSelector: withLoadedSelector,
        withLoadedReducer: examsLoadedReducer,
        withSelectReducer,
    }
}
