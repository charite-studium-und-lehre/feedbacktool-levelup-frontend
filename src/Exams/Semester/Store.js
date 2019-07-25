import _ from 'lodash/fp'
import BaseStore from '../Store'
import Results from './Data'

export const identifier = 'semester'
const baseStore = BaseStore(identifier)
const findBySemester = _.curry((semester, exams) => exams[semester])

const toTimeline = exam => ({
    x: exam.date,
    result: exam.resultMean,
    mean: exam.distMean,
    label: exam.semester,
})
const getTimeline = _.flow([ baseStore.getItems, _.map( toTimeline ) ])

export const selectors = baseStore.withLoadedSelector({
    getBySemester: (state, semester) => _.flow([ baseStore.getItems, findBySemester(semester)])(state),
    getTimeline,
})

export const actions = baseStore.withLoadAction({}, Results)

export const reducer = baseStore.withLoadedReducer(( state = [], action ) => {
    switch (action.type) {
        default:
            return state
    }
})