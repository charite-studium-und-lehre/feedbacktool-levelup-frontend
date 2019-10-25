import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import initialEpas, { ExternAssessing as initialAssessments } from './static/Data'
import BaseStore from '../Core/BaseStore'
import { backendUrl } from '../Utils/Constants'

const storeIdentifier = 'epas'
const url = 'epas'
export const identifier = storeIdentifier

const baseStore = BaseStore(storeIdentifier)
const getItemById = _.curry((state, id) => baseStore.getItems(state)[id])
const getLeavesById = state => _.flow([ getItemById(state), getLeaves(state) ])
const getLeaves = state => entry => entry.entries.length ? _.flatMap( getLeavesById(state) )(entry.entries) : [entry]

const getAssessments = state => _.values(baseStore.getStore(state).assesments)

const getFilter = state => baseStore.getStore(state).filter
const externalsFnFromFilter = filter => e => filter && e.external ? e.external.filter( e => e.id === filter ) : e.external
const getFilteredExternals = _.flow([ getFilter, externalsFnFromFilter ])
const visible = state => _.flow([ getFilteredExternals(state), d => d.length ])
const addVisible = state => entry => _.flow([ getLeaves(state), _.some( visible(state) ), visible => ({ ...entry, visible }) ])(entry)

const getScore = (state, id, prop) => _.flow([ getLeavesById(state), _.map(prop), _.sum])(id)
const getExternals = (state, id) => _.flow([ getItemById, e => getFilteredExternals(state)(e), _.defaultTo([]) ])(state, id)
const addAssessment = _.flow([ getAssessments, as => _.map( e => ({ ...e, ...as.find( a => a.id === e.id ) })) ])
const getLatest = _.flow([ _.sortBy( e => -e.datum ), _.head  ])

const getLatestExternal = state =>
	_.flow([
		epa => getFilteredExternals(state)(epa),
		addAssessment(state),
		getLatest,
		_.defaultTo([])
	])

const getExternalScore = (state, id) =>
	_.flow([ 
		getLeavesById(state),
		_.flatMap( getLatestExternal(state) ),
		_.over([
			_.sumBy( e => e.value ),
			a => a.length * 5,
		]),
		([ value, total ]) => ({ value, total })
	])(id)

const getMaxScore = (state, id) => _.flow([ getLeavesById(state), leaves => leaves.length * 5 ])(id)

export const selectors = baseStore.withLoadedSelector({
	getItemById: (state, id) => _.flow([ getItemById, addVisible(state) ])(state, id),
	getItemByLabel: (state, label) => _.find(e => e.label === label, baseStore.getItems(state)),
	getScore,
	getMaxScore,
	getFilter,
	getExternals: (state, id) => _.flow([ getExternals, addAssessment(state) ])(state, id),
	getExternalScore,
	getAssessments,
})

const propTranslations = { done: 'gemacht', confident: 'zutrauen' }
const callChangeLevel = id => dispatch => {
	fetch(`${backendUrl}/${url}/${id}`, {
		credentials: 'include',
		method: 'POST',
		body: JSON.stringify({})
	})
	.catch( err => dispatch({ type: `${identifier.toUpperCase()}_SET}`, payload: err }))
	dispatch({ type: `${identifier.toUpperCase()}_SET}`, payload: { id }})
}

export const actions = baseStore.withLoadAction(`${url}`)({
	setFilter: id => ({ type: `${identifier.toUpperCase()}_SET_FILTER`, payload: { id }}),
	levelUpDone: callChangeLevel('done', 'erhoehen'),
	levelDownDone:callChangeLevel('done', 'erhoehen'),
	levelUpConfident: callChangeLevel('confident', 'erhoehen'),
	levelDownConfident: id => ({ type: `${identifier.toUpperCase()}_SET`, payload: { id }}),
})

const level = (state, id, p, val) => {
	const entry = _.clone(state[id])
	entry[p] = Math.min(Math.max(entry[p] + val, 0), 5)
	return {...state, [id]: entry }
}

const filter = (state = null, action) => {
	switch (action.type) {
		case `${identifier.toUpperCase()}_SET_FILTER`:
			return action.payload.id
		default:
			return state
	}
}

const transformAssessments = _.flow([
	d => d.fremdeinschaetzungen,
	() => initialAssessments,
	_.keyBy( d => d.id )
])
const assesments = (state = {}, action) => {
	switch(action.type) {
		case `${identifier.toUpperCase()}_DATA_FETCHED`:
			return transformAssessments(action.payload)
		default:
			return state
	}
}

const addEntries = epas =>
	_.map( epa => ({
		...epa,
		entries: epas.filter( e => e.parentId === epa.id ).map( epa => epa.id )
	}))(epas)

const addRootElement = epas => 
	_.concat([{ 
		label: 'root', 
		entries: epas.filter( epa => epa.parentId === null ).map( epa => epa.id )
	}])(epas)

const transform = _.flow([
	d => d.meineEPAs,
	_.map( epa => ({
		...epa,
		label: epa.beschreibung,
		done: epa.gemacht,
		confident: epa.zutrauen,
		external: epa.istBlatt ? [{id:epa.id % 5,value:Math.round(Math.random() * 5)},{id:epa.id % 5 + 1,value:Math.round(Math.random() * 5)}] : undefined,
	})),
	addEntries,
	addRootElement,
	_.keyBy( epa => epa.id )
])

function epasReducer(state = {undefined: {label: 'root', entries: []}}, action) {
	switch (action.type) {
		case `${identifier.toUpperCase()}_DATA_FETCHED`:
			return transform(action.payload)
		case `${identifier.toUpperCase()}_DATA_FETCH_FAILED`:
			return initialEpas
		case `${identifier.toUpperCase()}_LEVEL_UP_DONE`:
			return level(state, action.payload.id, 'done', 1)
		case `${identifier.toUpperCase()}_LEVEL_DOWN_DONE`:
			return level(state, action.payload.id, 'done', -1)
		case `${identifier.toUpperCase()}_LEVEL_UP_CONFIDENT`:
			return level(state, action.payload.id, 'confident', 1)
		case `${identifier.toUpperCase()}_LEVEL_DOWN_CONFIDENT`:
			return level(state, action.payload.id, 'confident', -1)
		default:
			return state
	}
}

export const reducer = combineReducers({...baseStore.withLoadedReducer(epasReducer), filter, assesments })