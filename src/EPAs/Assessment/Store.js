import { selectors as epasSelectors } from '../Store'
import { combineReducers } from 'redux'
import BaseStore from '../../Core/BaseStore'
import { post } from '../../Core/DataProvider'
import { assessmentsUrl as url } from '../Urls'

export const identifier = 'assessments'
const baseStore = BaseStore(identifier, state => epasSelectors.getStore(state)[identifier])
const getByEpaId = state => id => baseStore.getItems(state)[id] || { confident: 0, done: 0 }

export const selectors = baseStore.withLoadedSelector({ 
	getByEpaId,
	getExternals: state => id => getByEpaId(state)(id).externals || []
})

export const actions = baseStore.withLoadAction(url)({
	setEpa: (id, value) => ({ type: `${identifier.toUpperCase()}_SET_EPA`, payload: { id, value } }),
})

const transformAssessments = data => [
	d => d.bewertungen,
	d => d.map( a => ({
		id: a.epaId, 
		datum: new Date(a.datum),
		done: a.gemacht,
		confident: a.zutrauen,
		externals: a.fremdbewertungen.map( ass => ({ id: ass.id, value: ass.wert })),
	})),
	d => d.reduce( (a,v) => ({ ...a, [v.id]: v }), {})
].reduce((f,g) => g(f), data)

const items = (state = {}, action) => {
    switch(action.type) {
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return transformAssessments(action.payload)
		default:
			return state
	}
}
export const reducer = combineReducers(baseStore.withLoadedReducer(items))