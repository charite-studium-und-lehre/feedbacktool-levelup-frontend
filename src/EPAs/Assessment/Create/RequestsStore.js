import BaseStore from '../../../Core/BaseStore'
import { post } from '../../../Core/DataProvider'
import { requestsUrl as url } from '../../Urls'
import { selectors as assessmentsSelectors } from '../Store'
import DummyData from './Data'

export const identifier = 'requests'
const baseStore = BaseStore(identifier, state => assessmentsSelectors.getStore(state)[identifier])

const getByToken = (state, token) => baseStore.getStore(state)[token]
export const selectors = {
	getByToken,
	loaded: (state, token) => !!getByToken(state, token)
}

const makeRequest = formdata => dispatch => {
	post(url, formdata)
		.then( result => result.status === 200 ? 
			dispatch({ type: `${identifier.toUpperCase()}_SENT` }) :
			dispatch({ type: `${identifier.toUpperCase()}_SEND_FAILED` }))
}
export const actions = {
    loadWithToken: token => baseStore.withLoadAction(`${url}/${token}`)({}).load(),
	makeRequest,
}

const transform = request => ({
	...request,
	datum: new Date(request.datum),
	epas: undefined
})
export const reducer = (state = {}, action) => {
	switch(action.type) {
		case `${identifier.toUpperCase()}_DATA_FETCH_FAILED`:
			return { ...state, [DummyData.token]: transform(DummyData) }
		case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return { ...state, [action.payload.token]: transform(action.payload) }
		default:
            return state
	}
}