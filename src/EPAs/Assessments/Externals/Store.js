import { selectors as epasSelectors } from '../../Store'
import { combineReducers } from 'redux'
import BaseStore from '../../../Core/BaseStore'
import { reducer as requestsReducer, identifier as requestsIdentifier } from './Requests/Store'
import { externalAssessmentsUrl as url } from '../../Urls'

export const identifier = 'externalAssessments'
const baseStore = BaseStore(identifier, state => epasSelectors.getStore(state)[identifier])
const getFilter = state => baseStore.getStore(state).filter
const getById = state => id => Object.values(baseStore.getItems(state)).find( ass => ass.id === id)
export const selectors = baseStore.withLoadedSelector({ 
	getItems: state => Object.values(baseStore.getItems(state)),
	getStore: baseStore.getStore,
	getById,
	getFilter,
})

export const actions = baseStore.withLoadAction(url)({
	setFilter: id => ({ type: `${identifier.toUpperCase()}_SET_FILTER`, payload: { id }}),
})

const transform = data => [
	d => d.fremdbewertungen,
	d => d.map( a => ({ 
		...a,
		datum: new Date(a.datum),
	})),
	d => d.reduce( (a,v) => ({ ...a, [v.id]: v }), {})
].reduce((f,g) => g(f), data)

const filter = (state = null, action) => {
	switch (action.type) {
		case `${identifier.toUpperCase()}_SET_FILTER`:
			return action.payload.id
		default:
			return state
	}
}

const items = (state = {}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return transform(action.payload)
		default:
			return state
	}
}
export const reducer = combineReducers({ 
	...baseStore.withLoadedReducer(items), [requestsIdentifier]: requestsReducer, 
	filter })