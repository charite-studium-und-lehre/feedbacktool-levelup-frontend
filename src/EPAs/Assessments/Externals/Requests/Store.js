import { combineReducers } from 'redux'
import _ from 'lodash/fp'
import BaseStore from '../../../../Core/BaseStore'
import { post } from '../../../../Core/DataProvider'
import { externalAssessmentRequestsUrl as url } from '../../../Urls'
import { selectors as externalAssessmentsSelectors } from '../Store'
import { flow } from '../../../../Utils/utils.js'

export const identifier = 'requests'
const baseStore = BaseStore(identifier, state => externalAssessmentsSelectors.getStore(state)[identifier])

const getStatus = state => baseStore.getStore(state).status
const getByToken = (state, token) => baseStore.getItems(state)[token]
export const selectors = baseStore.withLoadedSelector({
	getByToken,
	itemLoaded: (state, token) => !!getByToken(state, token),
	getStatus,
	getItems: state => Object.values(baseStore.getItems(state)),
})

const makeRequest = formdata => dispatch => {
	dispatch({ type: `${identifier.toUpperCase()}_SENDING` })
	post(url, formdata)
		.then( result => result.status === 201 ?
			result.json().then( data => dispatch({ type: `${identifier.toUpperCase()}_SENT`, payload: data }) ) :
			dispatch({ type: `${identifier.toUpperCase()}_SEND_FAILED`, payload: result.status })
		)
		.catch(err => dispatch({ type: `${identifier.toUpperCase()}_SEND_FAILED`, payload: err }))
}
export const actions = baseStore.withLoadAction(url)({
    loadWithToken: token => baseStore.withLoadAction(`${url}/${token}`)({}).load(),
	makeRequest,
	resetSent: () => ({ type: `${identifier.toUpperCase()}_RESET_SENT` }),
})

const status = (state = {sending: false, error: null, sent: false, failed: false}, action) => {
    switch(action.type) {
		case `${identifier.toUpperCase()}_DATA_FETCH_FAILED`:
			return { sending: false, error: action.payload, sent: false, failed: true }
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

const transformItem = request => ({
	...request,
	id: `request_${request.id}`,
	datum: new Date(request.datum),
	open: true,
})
const transform = flow([
	d => d.fremdbewertungsAnfragen,
    d => d.map(item => transformItem(item)),
	// _.map( transformItem ),
    d => console.log(d),
	_.keyBy( request => request.id )
])

const items = baseStore.withLoadedReducer((state = {}, action) => {
	switch(action.type) {
		case `${identifier.toUpperCase()}_SENT`:
			return { ...state, [action.payload.id]: transformItem(action.payload) }
		case `${identifier.toUpperCase()}_DATA_FETCHED`:
			return action.payload.token ?
            	{ ...state, [action.payload.token]: transformItem(action.payload) } :
            	transform(action.payload)
		default:
            return state
	}
})

export const reducer = combineReducers({ ...items, status })
