import { combineReducers } from 'redux'
import _ from 'lodash/fp'
import { scaleBand } from 'd3-scale'
import { reducer as ptmsReducer, identifier as ptmsIdentifier, selectors as PtmSelectors, actions as PtmActions } from './Ptm/Store'
import { reducer as semesterReducer, identifier as semesterIdentifier, selectors as SemesterSelectors, actions as SemesterActions } from './Semester/Store'
import { reducer as stationsReducer, identifier as stationsIdentifier, selectors as StationsSelectors, actions as StationsActions } from './Stations/Store'

export const identifier = 'exams'

const toNavigationData = selected => _.flow(
    _.groupBy( d => d.timesemester ),
    _.map( g => { 
        const scale = scaleBand([0,g.length-1],[0,1])
        return g.map( (d, i) => ({ ...d, x: d.timesemester, y: scale(i) + scale.bandwidth() * .5, selected: selected === d.id }))
    }),
    _.flatten)

const graphs = state => [
    {
        name: 'semester',
        data: toNavigationData(state[identifier].selected)(SemesterSelectors.getTimeline(state)),
        color: 120,
    },
    {
        name: 'ptm',
        data: toNavigationData(state[identifier].selected)(PtmSelectors.getTimeline(state)),
        color: 240,
    },
    {
        name: 'stations',
        data: toNavigationData(state[identifier].selected)(StationsSelectors.getTimeline(state)),
        color: 0,
    },
]

const getByExam = exam => graphs => graphs.find( g => g.name === exam )
const getById = id => graph => graph.data.find( d => d.id === id )

const selectors = {
    loaded: () => true,
    getByExamAndSemester: (exam = 'semester', id) => _.flow([ graphs, getByExam(exam), getById(id) ]),
    getNavigationData: graphs
}

const actions = {
    setSelected: id => ({ type: 'EXAMS_SELECT', payload: id }),
    load: () => _.over([PtmActions.load(), SemesterActions.load(), StationsActions.load()])
}

export { selectors, actions }

const selected = ( state = -1, action ) => {
    switch(action.type) {
        case 'EXAMS_SELECT':
            return action.payload
        default:
            return state
    }
}

export const reducer = combineReducers({ selected, [ptmsIdentifier]: ptmsReducer, [semesterIdentifier]: semesterReducer, [stationsIdentifier]: stationsReducer })