export const identifier = 'requests'
const url = `${assessmentsUrl}/anfragen`
const baseStore = BaseStore(`${assessmentsIdentifier}_${identifier}`, state => assessments.getStore(state)[identifier])

const getById = (state, token) => baseStore.getStore(state)[token]
export const selectors = {
	loaded: (state, token) => !!getById(state, token)
}

const makeRequest = formdata => dispatch => {
	post(requestsUrl, formdata)
		.then( result => result.status === 200 ? 
			dispatch({ type: `${identifier.toUpperCase()}_ASSESSMENT_REQUESTED` }) :
			dispatch({ type: `${identifier.toUpperCase()}_ASSESSMENT_REQUEST_FAILED` }))
}
export const actions = {
    load: token => baseStore.withLoadAction(`${requestsUrl}/${token}`)({}).load(),
    makeRequest
}

export const reducer = (state = {}, action) => {
	switch(action.type) {
		case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return action.payload
		default:
            return state
	}
}