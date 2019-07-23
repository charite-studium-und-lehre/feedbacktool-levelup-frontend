import { combineReducers } from 'redux'
import _ from 'lodash/fp'
import Results from './Data'

const getPtms = state => state.exams.ptms.items
const findBySemester = _.curry((semester, ptms) => ptms[semester])
const flattenCategories = _.flatMap(c => c.subjects)
const findSubject = subject => _.flow([_.find({'name': subject}), _.defaultTo({})])
const getFächer = ptm => ptm.fächer
const getSubject = subject => _.flow([ getFächer, flattenCategories, findSubject(subject) ])

const toTimeline = ptm => ({
    x: ptm.date,
    result: ptm.results[0],
    mean: ptm.means[0],
    label: ptm.semester,
})
const getTimeline = _.flow([ getPtms, _.map( toTimeline ) ])

export const selectors = {
    getSubjectByName: (state, semester, subject) => _.flow([getPtms, findBySemester(semester), getSubject(subject)])(state, semester),
    getAllForSubject: (state, subject) => 
    _.flow([ getPtms, _.map(ptm => ({ ...getSubject(subject)(ptm), short: ptm.short })) ])(state),
    getBySemester: (state, semester) => _.flow([getPtms, findBySemester(semester)])(state),
    loaded: state => state.exams.ptms.loaded,
    getTimeline,
}

export const actions = {
    load: () => dispatch => setTimeout(() => dispatch({ type: 'PTM_DATA_FETCHED', payload: Results}), 1000)
}

const loaded = ( state = false, action ) => {
    switch (action.type) {
        case 'PTM_DATA_FETCHED':
            return true
        default:
            return state
    }
}
  
const items = (state = [], action) => {
    switch (action.type) {
        case 'PTM_DATA_FETCHED':
            return action.payload
        default:
            return state
    }
}

export const reducer = combineReducers( { loaded, items } )