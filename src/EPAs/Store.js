import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'
import { reducer as assessments, identifier as assessmentsIdentifier } from './Assessments/Store'
import { reducer as externalAssessments, identifier as externalAssessmentsIdentifier } from './Assessments/Externals/Store'
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

export const actions = baseStore.withLoadAction(`${url}`)({})

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

function epasReducer(state = {undefined: {label: 'root', entries: []}}, action) {
	switch (action.type) {
		case `${identifier.toUpperCase()}_DATA_FETCHED`:
			return transform(action.payload.epas)
		default:
			return state
	}
}

export const reducer = combineReducers({...baseStore.withLoadedReducer(epasReducer), 
	[assessmentsIdentifier]: assessments,
	[externalAssessmentsIdentifier]: externalAssessments,
})