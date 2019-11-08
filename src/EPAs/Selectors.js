import _ from 'lodash/fp'
import { selectors as assessmentsSelectors } from './Assessment/Store'
import { selectors as externalAssessmentsSelectors } from './Assessment/ExternalStore'
import { selectors as epasSelectors } from './Store'

const getLeavesById = state => _.flow([ epasSelectors.getById(state), getLeaves(state) ])
const getLeaves = state => entry => entry.entries.length ? _.flatMap( getLeavesById(state) )(entry.entries) : [entry]

const filterExternals = _.flow([ 
    externalAssessmentsSelectors.getFilter, 
    filter => externals => externals.filter( ex => !filter || ex.id === filter )
])

const getFilteredExternals = state => _.flow([
    assessmentsSelectors.getExternals(state),
    filterExternals(state),
])

const addAssessmentData = _.flow([ 
    externalAssessmentsSelectors.getItems, 
    as => _.map( e => ({ ...e, ...as.find( a => a.id === e.id ) })) 
])

export const getExternals = state => _.flow([
    getFilteredExternals(state),
    addAssessmentData(state),
])

export const withVisibility = state => entry => _.flow([ 
    getLeaves(state),
    _.map( leaf => leaf.id ),
    _.map( getFilteredExternals(state) ),
    _.some( externals => !externalAssessmentsSelectors.getFilter(state) || externals.length ),
    visible => ({ ...entry, visible })
])(entry)

const getSingleScore = (state, id, prop) => _.flow([ getLeavesById(state), _.map(epa => epa.id), _.map(assessmentsSelectors.getByEpaId(state)), _.map(prop), _.sum])(id)
export const getAssessmentsForItem = (state, id) => _.flow([ 
    epasSelectors.getById(state), 
    externalAssessmentsSelectors.getFilteredAssessments(state), 
    _.defaultTo([]) 
])(id)

const getLatestExternalAssessment = state => _.flow([
	epa => epa.id,
	assessmentsSelectors.getExternals(state),
	filterExternals(state) ,
	_.sortBy( ex => -externalAssessmentsSelectors.getById(state)(ex.id).datum ) ,
	_.head,
	_.defaultTo([])
])

const getAssessmentScore = state =>
	_.flow([ 
		getLeavesById(state),
		_.map( getLatestExternalAssessment(state) ),
		_.flatten,
		_.over([
			_.sumBy( e => e.value ),
			a => a.length * 5,
		]),
		([ value, total ]) => ({ value, total })
	])

const getMaxScore = (state, id) => _.flow([ getLeavesById(state), leaves => leaves.length * 5 ])(id)

export const getScore = (state, id) => ({
    done: getSingleScore(state, id, 'done'),
	confident: getSingleScore(state, id, 'confident'),
    externalScore: getAssessmentScore(state)(id),
    maxValue: getMaxScore(state, id),
})