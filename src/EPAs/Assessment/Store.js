import { selectors as epasSelectors } from '../Store'
import { combineReducers } from 'redux'
import BaseStore from '../../Core/BaseStore'
import { post } from '../../Core/DataProvider'
import { url as epasUrl } from '../Store'
import { reducer as requestsReducer, identifier as requestsIdentifier } from './RequestsStore'

export const identifier = 'assessments'
const url = `${epasUrl}/fremdbewertungen`
const baseStore = BaseStore(identifier, state => epasSelectors.getStore(state)[identifier])

export const selectors = baseStore.withLoadedSelector({ 
	getItems: state => Object.values(baseStore.getItems(state)),
})

export const actions = baseStore.withLoadAction(url)({})

const transformAssessments = data => [
	d => d.fremdbewertungen,
	d => d.map( a => ({ 
		...a, 
		id: a.id || `offen${Math.random()*10000}`, 
		datum: new Date(a.datum),
		open: a.status === 'offen',
	})),
	d => d.reduce( (a,v) => ({ ...a, [v.id]: v }), {})
].reduce((f,g) => g(f), data)


const items = (state = {}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
        case `EPAS_DATA_FETCHED`:
            return transformAssessments(action.payload)
		default:
			return state
	}
}
export const reducer = combineReducers({ ...baseStore.withLoadedReducer(items), [requestsIdentifier]: requests })