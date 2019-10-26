import _ from 'lodash/fp'
import BaseStore from '../Core/BaseStore'
import { identifier, actions, selectors } from './Store'

const selectItem = (state, id) => ({ ...state, selected: state.id === id })
const withSelectReducer = reducer => (state, action) => {
    switch(action.type) {
        case 'EXAMS_SELECT':
            return _.keyBy( i => i.id, _.map(i => selectItem(i, action.payload.id), state))
        default:
            return reducer(state, action)
    }
}

export default newIdentifier => {

    const transformResult = _.flow([
        d => d.pruefungen,
        _.filter( e => newIdentifier.startsWith(e.format) ),
        _.map( e => ({ ...e, id: e.studiPruefungsId })),
        _.keyBy( e => e.id )
    ])
    
    const examsLoadedReducer = reducer => (state, action) => {
        switch(action.type) {
            case 'EXAMS_DATA_FETCHED':
                return transformResult(action.payload)
            default:
                return reducer(state, action)
        }
    }

    const baseStore = BaseStore(newIdentifier, state => state[identifier].items[newIdentifier])
    return {
        ...baseStore,
        withLoadAction: _.merge({ load: () => actions.load() }),
        withLoadedSelector: _.merge({ loaded: state => selectors.loaded(state) }),
        withLoadedReducer: examsLoadedReducer,
        withSelectReducer,
    }
}