import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import initialEpas, { ExternAssessing as initialAssessments } from './Data'
import BaseStore from '../Core/BaseStore'
import { backendUrl } from '../Utils/Constants'

const storeIdentifier = 'epas'
const url = 'epa'
export const identifier = storeIdentifier

const baseStore = BaseStore(storeIdentifier)
const getItemById = _.curry((state, id) => baseStore.getItems(state)[id])
const getLeavesById = state => _.flow([ getItemById(state), getLeaves(state) ])
const getLeaves = state => entry => entry.entries.length ? _.flatMap( getLeavesById(state) )(entry.entries) : [entry]

const getFilter = state => state[storeIdentifier].filter
const visibleFnFromFilter = filter => e => filter ? e.external.find( e => e.id === filter ) : e.external
const visible = _.flow([ getFilter, visibleFnFromFilter ])
const addVisible = state => entry => _.flow([ getLeaves(state), _.some( visible(state) ), visible => ({ ...entry, visible }) ])(entry)

const getScore = (state, id, prop) => _.flow([ getLeavesById(state), _.map(prop), _.sum])(id)
const getExternalScore = (state, id) => getScore(state, id, e => visible(state)(e) ? visible(state)(e) : 0)

const getMaxScore = (state, id) => _.flow([ getLeavesById(state), leaves => leaves.length * 5 ])(id)

export const selectors = baseStore.withLoadedSelector({
	getItemById: (state, id) => _.flow([ getItemById, addVisible(state) ])(state, id),
	getItemByLabel: (state, label) => _.find(e => e.label === label, baseStore.getItems(state)),
	getScore,
	getMaxScore,
	getFilter,
	getExternalScore,
	getAssessments: state => _.values(baseStore.getStore(state).assesments)
})

const propTranslations = { done: 'gemacht', confident: 'zutrauen' }
const changeLevelUrl = (id, prop, method) => `${backendUrl}/${url}/selbstbewertung/${method}?epaID=${id}&typ=${propTranslations[prop]}`
const callChangeLevel = (prop, method) => id => dispatch => {
	fetch(changeLevelUrl(id, prop, method), {
		credentials: 'include',
	})
	.catch( err => dispatch({ type: `${identifier.toUpperCase()}_LEVEL_DOWN_${prop.toUpperCase()}`, payload: err }))
	dispatch({ type: `${identifier.toUpperCase()}_LEVEL_UP_${prop.toUpperCase()}`, payload: { id }})
}

export const actions = baseStore.withLoadAction(`${url}/meine`)({
	setFilter: id => ({ type: `${identifier.toUpperCase()}_SET_FILTER`, payload: { id }}),
	levelUpDone: callChangeLevel('done', 'erhoehen'),
	levelDownDone: id => dispatch => {
		fetch(`${backendUrl}/${url}/selbstbewertung/vermindern?epaID=${id}&typ=gemacht`, {
			credentials: 'include',
		})
		.catch( err => dispatch({ type: `${identifier.toUpperCase()}_LEVEL_UP_DONE`, payload: err }))
		dispatch({ type: `${identifier.toUpperCase()}_LEVEL_DOWN_DONE`, payload: { id }})
	},
	levelUpConfident: callChangeLevel('confident', 'erhoehen'),
	levelDownConfident: id => ({ type: `${identifier.toUpperCase()}_LEVEL_DOWN_CONFIDENT`, payload: { id }}),
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
		external: [],
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
			return transform(initialEpas)
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