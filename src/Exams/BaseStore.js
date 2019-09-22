import _ from 'lodash/fp'
import BaseStore from '../Core/BaseStore'
import { identifier } from './Store'

const selectItem = (state, id) => ({ ...state, selected: state.id === id })
const withSelectReducer = reducer => (state, action) => {
    switch(action.type) {
        case 'EXAMS_SELECT':
            return _.keyBy( i => i.id, _.map(i => selectItem(i, action.payload.id), state))
        default:
            return reducer(state, action)
    }
}

export default newIdentifier => ({
    ...BaseStore(newIdentifier, state => state[identifier][newIdentifier]), 
    withSelectReducer,
})