import { combineReducers } from 'redux'
import BaseStore from '../../../Core/BaseStore'
import { post } from '../../../Core/DataProvider'
import { requestsUrl as url } from '../../Urls'
import { selectors as assessmentsSelectors } from '../Store'
import DummyData from './Data'

export const identifier = 'requests'
const baseStore = BaseStore(identifier, state => assessmentsSelectors.getStore(state)[identifier])

const getStatus = state => baseStore.getStore(state).status
const getByToken = (state, token) => baseStore.getItems(state)[token]
export const selectors = {
	getByToken,
	loaded: (state, token) => !!getByToken(state, token),
	getStatus,
}

const makeRequest = formdata => dispatch => {
	dispatch({ type: `${identifier.toUpperCase()}_SENDING` })
	post(url, formdata)
		.then( result => result.status === 200 ? 
			dispatch({ type: `${identifier.toUpperCase()}_SENT` }) :
			dispatch({ type: `${identifier.toUpperCase()}_SEND_FAILED`, payload: result.status })
		)
		.catch(err => dispatch({ type: `${identifier.toUpperCase()}_SEND_FAILED`, payload: err }))
}
export const actions = {
    loadWithToken: token => baseStore.withLoadAction(`${url}/${token}`)({}).load(),
	makeRequest,
	resetSent: () => ({ type: `${identifier.toUpperCase()}_RESET_SENT` }),
}

const status = (state = {sending: false, error: null, sent: false}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_RESET_SENT`:
            return { sending: false, error: null, sent: false }
        case `${identifier.toUpperCase()}_SENDING`:
            return { sending: true, error: null, sent: false }
        case `${identifier.toUpperCase()}_SENT`:
            return { sending: false, error: null, sent: true }
        case `${identifier.toUpperCase()}_SEND_FAILED`:
            return { sending: false, error: action.payload, sent: false }
		default:
			return state
	}
}

const transform = request => ({
	...request,
	datum: new Date(request.datum),
	epas: undefined
})
const items = (state = {}, action) => {
	switch(action.type) {
		case `${identifier.toUpperCase()}_DATA_FETCH_FAILED`:
			return { ...state, [DummyData.token]: transform(DummyData) }
		case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return { ...state, [action.payload.token]: transform(action.payload) }
		default:
            return state
	}
}

export const reducer = combineReducers({ items, status })