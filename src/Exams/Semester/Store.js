import { combineReducers } from 'redux'
import _ from 'lodash/fp'
import Results from './Data'

const getStore = state => state.exams.semester
const getExams = store => store.items
const findBySemester = _.curry((semester, exams) => exams[semester])

const toTimeline = exam => ({
    x: exam.date,
    result: exam.resultMean,
    mean: exam.distMean,
    label: exam.semester,
})
const getTimeline = _.flow([ getStore, getExams, _.map( toTimeline ) ])

export const selectors = {
    getBySemester: (state, semester) => _.flow([ getStore, getExams, findBySemester(semester)])(state),
    loaded: state => getStore(state).loaded,
    getTimeline,
}

export const actions = {
    load: () => dispatch => setTimeout(() => dispatch({ type: 'SEMESTER_DATA_FETCHED', payload: Results}), 3000)
}

const loaded = ( state = false, action ) => {
    switch (action.type) {
        case 'SEMESTER_DATA_FETCHED':
            return true
        default:
            return state
    }
}
  
const items = (state = [], action) => {
    switch (action.type) {
        case 'SEMESTER_DATA_FETCHED':
            return action.payload
        default:
            return state
    }
}

export const reducer = combineReducers( { loaded, items } )