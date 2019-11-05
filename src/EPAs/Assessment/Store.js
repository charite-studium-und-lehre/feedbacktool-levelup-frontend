import { selectors as epasSelectors } from '../Store'
import { combineReducers } from 'redux'
import BaseStore from '../../Core/BaseStore'
import { post } from '../../Core/DataProvider'
import { reducer as requestsReducer, identifier as requestsIdentifier } from './Create/RequestsStore'
import { assessmentsUrl as url } from '../Urls'

export const identifier = 'assessments'
const baseStore = BaseStore(identifier, state => epasSelectors.getStore(state)[identifier])
const getCurrent = state => Object.values(baseStore.getStore(state).current)
const getFilter = state => baseStore.getStore(state).filter
const getStatus = state => baseStore.getStore(state).status
export const selectors = baseStore.withLoadedSelector({ 
	getItems: state => Object.values(baseStore.getItems(state)),
	getStore: baseStore.getStore,
	getEpa: (state, id) => getCurrent(state).find( epa => epa.id === id ) || {},
	getFilter,
	getStatus,
})

const send = token => (dispatch, getState) => { 
	dispatch({ type: `${identifier.toUpperCase()}_SENDING`})
	const data = { token, epas: getCurrent(getState()) }
	post(url, data)
		.then(result => result.statue === 200 ? 
			dispatch({ type: `${identifier.toUpperCase()}_SENT`}) :
			dispatch({ type: `${identifier.toUpperCase()}_SEND_FAILED`, payload: result.status })
		)
		.catch( err => dispatch({ type: `${identifier.toUpperCase()}_SEND_FAILED`, payload: err}))
}
export const actions = baseStore.withLoadAction(url)({
	setEpa: (id, value) => ({ type: `${identifier.toUpperCase()}_SET_EPA`, payload: { id, value } }),
	send,
	setFilter: id => ({ type: `${identifier.toUpperCase()}_SET_FILTER`, payload: { id }}),
})

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


const status = (state = {sending: false, error: null}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_SENDING`:
            return { sending: true, error: null }
        case `${identifier.toUpperCase()}_SENT`:
            return { sending: false, error: null }
        case `${identifier.toUpperCase()}_SEND_FAILED`:
            return { sending: false, error: action.payload }
		default:
			return state
	}
}

const filter = (state = null, action) => {
	switch (action.type) {
		case `${identifier.toUpperCase()}_SET_FILTER`:
			return action.payload.id
		default:
			return state
	}
}

const current = (state = {}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_SET_EPA`:
            return { ...state, [action.payload.id]: { id: action.payload.id, value: action.payload.value } }
		default:
			return state
	}
}

const items = (state = {}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
        case `EPAS_DATA_FETCHED`:
            return transformAssessments(action.payload)
		default:
			return state
	}
}
export const reducer = combineReducers({ 
	...baseStore.withLoadedReducer(items), [requestsIdentifier]: requestsReducer, 
	filter, current, status })