import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'
import { post } from '../Core/DataProvider'
import { reducer as assessments, identifier as assessmentsIdentifier } from './Assessment/Store'
import { reducer as externalAssessments, identifier as externalAssessmentsIdentifier } from './Assessment/ExternalStore'
import { epasUrl as url } from './Urls'

const storeIdentifier = 'epas'
export const identifier = storeIdentifier

const baseStore = BaseStore(storeIdentifier)
const getById = state => id => baseStore.getItems(state)[id]

export const selectors = baseStore.withLoadedSelector({
	getStore: baseStore.getStore,
	getById,
	getRoot: state => _.flow([ baseStore.getItems, _.find(e => e.label === 'root') ])(state),
})

const callChangeLevel = (id, newData, oldData) => dispatch => {
	const reverse = () => dispatch({ type: `${identifier.toUpperCase()}_SET`, payload: { id, value: oldData }})
	post(`${url}/${id}`, { gemacht: newData.done, zutrauen: newData.confident })
		.then( result => result.status !== 200 && reverse() )
		.catch( () => reverse())
	dispatch({ type: `${identifier.toUpperCase()}_SET`, payload: { id, value: newData }})
}

const level = newData => epa => callChangeLevel(epa.id, newData(epa), { done: epa.done, confident: epa.confident })
export const actions = baseStore.withLoadAction(`${url}`)({
	levelUpDone: level(epa => ({ done: epa.done + 1, confident: epa.confident })),
	levelDownDone: level(epa => ({ done: epa.done - 1, confident: epa.confident })),
	levelUpConfident: level(epa => ({ done: epa.done, confident: epa.confident + 1 })),
	levelDownConfident: level(epa => ({ done: epa.done, confident: epa.confident - 1 })),
})

const addEntries = epas =>
_.map( epa => ({
	...epa,
	entries: epas.filter( e => e.parentId === epa.id ).map( epa => epa.id )
}))(epas)

const addRootElement = epas => [
	{ 
		label: 'root', 
		entries: epas.filter( epa => epa.parentId === null ).map( epa => epa.id )
	}, 
	...epas
]

const transform = _.flow([
	_.map( epa => ({
		label: epa.beschreibung,
		...epa,
	})),
	addEntries,
	addRootElement,
	_.keyBy( epa => epa.id )
])

const setEpa = (state, {id, value}) => ({...state, [id]: { ...state[id], ...value }})

function epasReducer(state = {undefined: {label: 'root', entries: []}}, action) {
	switch (action.type) {
		case `${identifier.toUpperCase()}_DATA_FETCHED`:
			return transform(action.payload.epas)
		case `${identifier.toUpperCase()}_SET`:
			return setEpa(state, action.payload)
		default:
			return state
	}
}

export const reducer = combineReducers({...baseStore.withLoadedReducer(epasReducer), 
	[assessmentsIdentifier]: assessments,
	[externalAssessmentsIdentifier]: externalAssessments,
})