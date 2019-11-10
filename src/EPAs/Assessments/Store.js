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

const callChangeLevel = (id, newData) => (dispatch, getState) => {
	const oldData = getByEpaId(getState())(id)
	const { confident, done } = newData(oldData)
	const data = { bewertungen: [{ epaId: id, gemacht: done, zutrauen: confident }]}
	const reverse = () => dispatch({ type: `${identifier.toUpperCase()}_SET`, payload: { id, value: oldData }})
	post(url, data)
		.then( result => result.status !== 200 && reverse() )
		.catch( () => reverse())
	dispatch({ type: `${identifier.toUpperCase()}_SET`, payload: { id, value: newData(oldData) }})
}

const level = newData => epaId => callChangeLevel(epaId, newData)

export const actions = baseStore.withLoadAction(url)({
	levelUpDone: level(epa => ({ done: epa.done + 1, confident: epa.confident })),
	levelDownDone: level(epa => ({ done: epa.done - 1, confident: epa.confident })),
	levelUpConfident: level(epa => ({ done: epa.done, confident: epa.confident + 1 })),
	levelDownConfident: level(epa => ({ done: epa.done, confident: epa.confident - 1 })),
})

const transform = data => [
	d => d.bewertungen,
	d => d.map( a => ({
		id: a.epaId, 
		datum: new Date(a.datum),
		done: a.gemacht,
		confident: a.zutrauen,
		externals: (a.fremdbewertungen || []).map( ass => ({ id: ass.id, value: ass.wert })),
	})),
	d => d.reduce( (a,v) => ({ ...a, [v.id]: v }), {})
].reduce((f,g) => g(f), data)

const setEpa = (state, {id, value}) => ({...state, [id]: { ...state[id], ...value }})
const items = (state = {}, action) => {
    switch(action.type) {
		case `${identifier.toUpperCase()}_SET`:
			return setEpa(state, action.payload)
        case `${identifier.toUpperCase()}_DATA_FETCHED`:
            return transform(action.payload)
		default:
			return state
	}
}
export const reducer = combineReducers(baseStore.withLoadedReducer(items))