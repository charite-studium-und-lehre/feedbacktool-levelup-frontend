import { combineReducers } from 'redux'
import _ from 'lodash/fp'
import { reducer as ptmsReducer, identifier as ptmsIdentifier, selectors as PtmSelectors, actions as PtmActions } from './Ptm/Store'
import { reducer as semesterReducer, identifier as semesterIdentifier, selectors as SemesterSelectors, actions as SemesterActions } from './Semester/Store'
import { reducer as stationsReducer, identifier as stationsIdentifier, selectors as StationsSelectors, actions as StationsActions } from './Stations/Store'

export const identifier = 'exams'

const graphs = state => [
    {
        name: 'semester',
        label: 'Semesterprüfung',
        data: SemesterSelectors.getTimeline(state),
        color: 120,
    },
    {
        name: 'ptm',
        label: 'PTM',
        data: PtmSelectors.getTimeline(state),
        color: 240,
    },
    {
        name: 'stations',
        label: 'Praktische Prüfung',
        data: StationsSelectors.getTimeline(state),
        color: 0,
    },
]

const getByExam = exam => graphs => graphs.find( g => g.name === exam )
const getById = id => graph => graph.data.find( d => d.id === id )

const toNavigationData = _.map(_.flow(
    g => g.data,
    _.groupBy( d => d.timesemester ), 
    _.map( g => g.map( (d, i) => ({ ...d, x: d.timesemester, y: i/(g.length), selected: 1 === d.id }))),
    _.flatten))

const selectors = {
    getGraphs: graphs,
    loaded: () => true,
    getByExamAndSemester: (exam = 'semester', id) => _.flow([ graphs, getByExam(exam), getById(id) ]),
    getNavigationData: _.flow(graphs, toNavigationData)
}

const actions = {
    load: () => _.over([PtmActions.load(), SemesterActions.load(), StationsActions.load()])
}

export { selectors, actions }

export const reducer = combineReducers({ [ptmsIdentifier]: ptmsReducer, [semesterIdentifier]: semesterReducer, [stationsIdentifier]: stationsReducer })