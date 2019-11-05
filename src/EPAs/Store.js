import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import BaseStore from '../Core/BaseStore'
import { post } from '../Core/DataProvider'
import { reducer as assessments, identifier as assessmentsIdentifier, selectors as assessmentsSelectors } from './Assessment/Store'
import { epasUrl as url } from './Urls'
import DummyData from './Assessment/Data'

const storeIdentifier = 'epas'
export const identifier = storeIdentifier

const baseStore = BaseStore(storeIdentifier)
const getById = _.curry((state, id) => baseStore.getItems(state)[id])
const getLeavesById = state => _.flow([ getById(state), getLeaves(state) ])
const getLeaves = state => entry => entry.entries.length ? _.flatMap( getLeavesById(state) )(entry.entries) : [entry]

const getFilter = state => baseStore.getStore(state).filter
const assessmentsFnFromFilter = filter => e => filter && e.external ? e.external.filter( e => e.id === filter ) : e.external
const getFilteredAssessments = _.flow([ getFilter, assessmentsFnFromFilter ])
const visible = state => _.flow([ getFilteredAssessments(state), d => !getFilter(state) || (d && d.length) ])
const addVisible = state => entry => _.flow([ getLeaves(state), _.some( visible(state) ), visible => ({ ...entry, visible }) ])(entry)

const getSingleScore = (state, id, prop) => _.flow([ getLeavesById(state), _.map(prop), _.sum])(id)
const getAssessmentsForItem = (state, id) => _.flow([ getById, e => getFilteredAssessments(state)(e), _.defaultTo([]) ])(state, id)
const addAssessmentData = _.flow([ assessmentsSelectors.getItems, as => _.map( e => ({ ...e, ...as.find( a => a.id === e.id ) })) ])
const getLatest = _.flow([ _.sortBy( e => -e.datum ), _.head  ])

const getLatestAssessment = state =>
	_.flow([
		epa => getFilteredAssessments(state)(epa),
		addAssessmentData(state),
		getLatest,
		_.defaultTo([])
	])

const getAssessmentScore = state =>
	_.flow([ 
		getLeavesById(state),
		_.flatMap( getLatestAssessment(state) ),
		_.over([
			_.sumBy( e => e.value ),
			a => a.length * 5,
		]),
		([ value, total ]) => ({ value, total })
	])

const getMaxScore = (state, id) => _.flow([ getLeavesById(state), leaves => leaves.length * 5 ])(id)

const getScore = (state, id) => ({
    done: getSingleScore(state, id, 'done'),
	confident: getSingleScore(state, id, 'confident'),
    externalScore: getAssessmentScore(state)(id),
    maxValue: getMaxScore(state, id),
})

export const selectors = baseStore.withLoadedSelector({
	getStore: baseStore.getStore,
	getById: (state, id) => _.flow([ getById, addVisible(state) ])(state, id),
	getItemByLabel: (state, label) => _.find(e => e.label === label, baseStore.getItems(state)),
	getScore,
	getMaxScore,
	getFilter,
	getAssessmentsForItem: (state, id) => _.flow([ getAssessmentsForItem, addAssessmentData(state) ])(state, id),
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
	setFilter: id => ({ type: `${identifier.toUpperCase()}_SET_FILTER`, payload: { id }}),
	levelUpDone: level(epa => ({ done: epa.done + 1, confident: epa.confident })),
	levelDownDone: level(epa => ({ done: epa.done - 1, confident: epa.confident })),
	levelUpConfident: level(epa => ({ done: epa.done, confident: epa.confident + 1 })),
	levelDownConfident: level(epa => ({ done: epa.done, confident: epa.confident - 1 })),
})

const filter = (state = null, action) => {
	switch (action.type) {
		case `${identifier.toUpperCase()}_SET_FILTER`:
			return action.payload.id
		default:
			return state
	}
}

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
		done: epa.gemacht,
		confident: epa.zutrauen,
		...epa,
	})),
	addEntries,
	addRootElement,
	_.keyBy( epa => epa.id )
])

const setEpa = (state, {id, value}) => ({...state, [id]: { ...state[id], ...value }})

function epasReducer(state = {undefined: {label: 'root', entries: []}}, action) {
	switch (action.type) {
		case `REQUESTS_DATA_FETCH_FAILED`:
			return transform(DummyData.epas)
		case `REQUESTS_DATA_FETCHED`:
			return transform(action.payload.epas)
		case `${identifier.toUpperCase()}_DATA_FETCHED`:
			return transform(action.payload.meineEPAs)
		case `${identifier.toUpperCase()}_SET`:
			return setEpa(state, action.payload)
		default:
			return state
	}
}

export const reducer = combineReducers({...baseStore.withLoadedReducer(epasReducer), filter, [assessmentsIdentifier]: assessments })