import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'
import { reducer as assessments, identifier as assessmentsIdentifier } from './Assessments/Store'
import { reducer as externalAssessments, identifier as externalAssessmentsIdentifier } from './Assessments/Externals/Store'
import { epasUrl as url } from './Urls'
import { flow } from '../Utils/utils.js'

const storeIdentifier = 'epas'
export const identifier = storeIdentifier

const baseStore = BaseStore(storeIdentifier)
const getById = state => id => baseStore.getItems(state)[id]

export const selectors = baseStore.withLoadedSelector({
	getStore: baseStore.getStore,
	getById,
	getRoot: state => flow([
        baseStore.getItems,
        items => Object.values(items).find(item => item.label === 'root'),
    ])(state),
})

export const actions = baseStore.withLoadAction(url)({})

const addEntries = epas => epas.map(epa => ({
	...epa,
	entries: epas.filter(e => e.parentId === epa.id).map(epa => epa.id)
}))

const addRootElement = epas => [{label: 'root', entries: epas.filter(epa => epa.parentId === null).map(epa => epa.id)}, ...epas]

const transform = flow([
	epas => epas.map(epa => ({
		label: epa.beschreibung,
		...epa,
	})),
	addEntries,
	addRootElement,
    epas => {
        let out = {}
        epas.forEach(epa => out[epa.id] = epa)
        return out
    }
])

const defaultState = {
    undefined: {
        label: 'root',
        entries: []
    }
}

const epasReducer = (state = defaultState, action) => {
	switch (action.type) {
		case `${identifier.toUpperCase()}_DATA_FETCHED`:
			return transform(action.payload.epas)
		default:
			return state
	}
}

export const reducer = combineReducers({
    ...baseStore.withLoadedReducer(epasReducer),
	[assessmentsIdentifier]: assessments,
	[externalAssessmentsIdentifier]: externalAssessments,
})
