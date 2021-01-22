import _                          from 'lodash/fp'
import BaseStore                  from '../../../Core/BaseStore'
import {url}                      from '../../Store'
import {selectors as mcSelectors} from '../Store'

export const identifier = 'questions'
export const TYPE_QUESTIONS_DATA_FETCHED = identifier.toUpperCase() + '_DATA_FETCHED'

const baseStore = BaseStore(
    identifier,
    state => mcSelectors.getStore(state)[identifier]
)

export const actions = {
    load: id =>
        baseStore
            .withLoadAction(`${url}/${id}/fragen`)({})
            .load()
}

const getById = (state, id) => baseStore.getStore(state)[id]

export const selectors = {
    loaded: (state, id) => !!getById(state, id),
    getById
}

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case TYPE_QUESTIONS_DATA_FETCHED:
            return _.merge(state)({[action.payload.studiPruefungsId]: action.payload.fragen})
        default:
            return state
    }
}
