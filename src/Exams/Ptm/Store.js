import _ from 'lodash/fp'
import BaseStore from '../../Core/BaseStore'
import Results from './Data'

const getStore = state => state.exams.ptms
const baseStore = BaseStore('ptms', getStore)

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
const getTimeline = _.flow([ baseStore.getItems, _.map( toTimeline ) ])

export const selectors = baseStore.withLoadedSelector({
    getSubjectByName: (state, semester, subject) => _.flow([ baseStore.getItems, findBySemester(semester), getSubject(subject) ])(state, semester),
    getAllForSubject: (state, subject) => 
    _.flow([ baseStore.getItems, _.map(ptm => ({ ...getSubject(subject)(ptm), short: ptm.short })) ])(state),
    getBySemester: (state, semester) => _.flow([ baseStore.getItems, findBySemester(semester) ])(state),
    getTimeline,
})

export const actions = baseStore.withLoadAction({}, Results)

export const reducer = baseStore.withLoadedReducer(( state = [], action ) => {
    switch(action.type) {
        default:
            return state
    }
})