import _ from 'lodash/fp'
import BaseStore from '../../../Core/BaseStore'
import { selectors as mcSelectors } from '../Store'
import { url } from '../../Store'

export const identifier = 'questions'
const baseStore = BaseStore(identifier, state => mcSelectors.getStore(state)[identifier] )

export const actions = {
    load: id => baseStore.withLoadAction(`${url}/${id}/fragen`)({}).load()
}

const getById = (state, id) => baseStore.getStore(state)[id]
const loaded = (state, id) => !!getById(state, id)

export const selectors = {
    loaded,
    getById,
}

const transform = q => ({
    ...q,
    antworten: q.antworten.map( a => ({ text: a.text, ausgewaehlt: a.ausgewaehlt === 'true', richtig: a.richtig === 'true'}))
})
export const reducer = (state = {}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return _.merge(state)({ [action.payload.studiPruefungsId]: _.map(transform, action.payload.fragen) })
        default:
            return state
    }
}