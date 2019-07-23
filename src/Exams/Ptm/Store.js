import { combineReducers } from 'redux'
import _ from 'lodash/fp'
import { randomUniform } from 'd3-random'
import seedrandom from 'seedrandom'
import Subjects from '../Subjects'

const semesters = ['1. Fachsemester', '2. Fachsemester', '3. Fachsemester', '4. Fachsemester', '5. Fachsemester']
const createResult = _.flow([
    _.over([
        _.flow([seedrandom, randomUniform.source, rnd => (a,b) => _.round(rnd(a,b)())]),
        _.identity
    ]), 
    ([random, semester]) => ({
        alt: true,
        results: [
            [ 83],
            [30],
            [90] 
        ],
        means: [77, 22, 101],
        semester,
        short: semester.substr(0,4) + 'S',
        fächer: Subjects(semester),
        date: new Date(2013 + parseInt(semester.substr(0,1)), 6 + random(2, -1), 15 + random(20, -10)),
    })
])
const Results = _.keyBy(r => r.semester, _.map(createResult)(semesters))

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
    load: () => {
        return dispatch => {
          setTimeout(() => dispatch({ type: 'DATA_FETCHED', payload: Results}), 1000)
        }
    }
}

const loaded = ( state = false, action ) => {
    switch (action.type) {
        case 'DATA_FETCHED':
            return true
        default:
            return state
    }
}
  
const items = (state = [], action) => {
    switch (action.type) {
        case 'DATA_FETCHED':
            return action.payload
        default:
            return state
    }
}

export const reducer = combineReducers( { loaded, items } )