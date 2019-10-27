import _ from 'lodash/fp'
import BaseStore from '../../../Core/BaseStore'
import { selectors as mcSelectors } from '../Store'
import { url } from '../../Store'

export const identifier = 'questions'
const baseStore = BaseStore(identifier, state => mcSelectors.getStore(state)[identifier] )

export const actions = {
    load: ownProps => baseStore.withLoadAction(`${url}/${ownProps.id}/fragen`)({}).load()
}

const getById = (state, id) => baseStore.getStore(state)[id]
const loaded = (state, ownProps) => !!getById(state, ownProps.id)

export const selectors = {
    loaded,
    getById,
}

export const reducer = (state = {}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return _.merge(state)({ [action.payload.id]: action.payload.fragen })
        default:
            return state
    }
}