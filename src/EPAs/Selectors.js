import { selectors as assessmentsSelectors, actions as assessmentsActions } from './Assessments/Store'
import { selectors as externalAssessmentsSelectors, actions as externalAssessmentActions } from './Assessments/Externals/Store'
import { selectors as epasSelectors, actions as epasActions } from './Store'
import { flow, over, overEvery } from '../Utils/utils.js'

const getLeavesById = state => flow([epasSelectors.getById(state), getLeaves(state)])

const getLeaves = state => entry => entry.entries.length ?
    entry.entries.map(elm => getLeavesById(state)(elm)).flat() : [entry]

const withVisibility = state => entry => flow([
    getLeaves(state),
    externals => externals.map(leaf => leaf.id),
    externals => externals.map(leaf => getFilteredExternals(state)(leaf)),
    externals => {
        if (!externalAssessmentsSelectors.getFilter(state)) return true;
        if (externals.length) return true;
    },
    visible => ({ ...entry, visible })
])(entry)

export const getEpaById = state => flow([epasSelectors.getById(state), withVisibility(state)])

const filterExternals = flow([
    externalAssessmentsSelectors.getFilter,
    filter => externals => externals.filter( ex => !filter || ex.id === filter )
])

const getFilteredExternals = state => flow([
    assessmentsSelectors.getExternals(state),
    filterExternals(state),
])

const addAssessmentData = flow([
    externalAssessmentsSelectors.getItems,
    assessment => items => items.map(e => ({...e, ...assessment.find(a => a.id === e.id)}))
])

export const getExternals = state => flow([
    getFilteredExternals(state),
    addAssessmentData(state),
])

const getSingleScore = (state, id, prop) => flow([
    getLeavesById(state),
    epas => epas.map(epa => epa.id),
    epas => epas.map(epa => assessmentsSelectors.getByEpaId(state)(epa)),
    epas => epas.map(epa => epa[prop]),
    epas => epas.reduce((acc, score) => acc += score, 0)
])(id)

export const getAssessmentsForItem = (state, id) => flow([
    epasSelectors.getById(state),
    externalAssessmentsSelectors.getFilteredAssessments(state),
    assessments => (assessments[0] ? assessments : [])
])(id)

const getLatestExternalAssessment = state => flow([
	epa => epa.id,
	assessmentsSelectors.getExternals(state),
	filterExternals(state),
	externals => externals.sort((a, b) => {
        let datumA = externalAssessmentsSelectors.getById(state)(a.id).datum
        let datumB = externalAssessmentsSelectors.getById(state)(b.id).datum
        return datumB - datumA
    }),
    externals => Array.isArray(externals) && externals.length ? externals[0] : [],
    externals => (externals[0] ? externals : []),
])

const getAssessmentScore = state => flow([
    getLeavesById(state),
    assessments => assessments.map(assessment => getLatestExternalAssessment(state)(assessment)),
	assessments => assessments.flat(),
	assessments => over([
        assessment => assessment.reduce((acc, elm) => acc += elm.value, 0),
		assessment => assessment.length * 5,
	])(assessments),
	([value, total]) => ({value, total})
])

const getMaxScore = (state, id) => flow([getLeavesById(state), leaves => leaves.length * 5])(id)

export const getScore = (state, id) => ({
    done: getSingleScore(state, id, 'done'),
	confident: getSingleScore(state, id, 'confident'),
    externalScore: getAssessmentScore(state)(id),
    maxValue: getMaxScore(state, id),
})

export const load = () => over([
    epasActions.load(),
    externalAssessmentActions.load(),
    assessmentsActions.load()
])

export const loaded = overEvery([
    epasSelectors.loaded,
    externalAssessmentsSelectors.loaded,
    assessmentsSelectors.loaded
])
