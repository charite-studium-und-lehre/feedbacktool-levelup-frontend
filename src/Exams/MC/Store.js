import {combineReducers} from 'redux'
import BaseStore from '../BaseStore'
import {compose} from '../../Utils/compose'
import {identifier as questionsIdentifier, reducer as questionsReducer} from './Questions/Store'
import {createStoreSelectors} from './StoreSelectors'

export const identifier = 'mcs'
const baseStore = BaseStore(identifier)

export const selectors = createStoreSelectors(baseStore)
export const actions = baseStore.withLoadAction({})

export const reducer = combineReducers({
    [questionsIdentifier]: questionsReducer,
    items: compose([
        baseStore.withSelectReducer,
        baseStore.withLoadedReducer()
    ])((state = {}, action) => {
        switch (action.type) {
            default:
                return state
        }
    })
})
