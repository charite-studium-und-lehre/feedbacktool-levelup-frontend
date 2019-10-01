import { combineReducers } from 'redux'
import _ from 'lodash/fp'
import { scaleBand } from 'd3-scale'
import { reducer as ptmsReducer, identifier as ptmsIdentifier, selectors as PtmSelectors, actions as PtmActions } from './Ptm/Store'
import { reducer as semesterReducer, identifier as semesterIdentifier, selectors as SemesterSelectors, actions as SemesterActions } from './Semester/Store'
import { reducer as stationsReducer, identifier as stationsIdentifier, selectors as StationsSelectors, actions as StationsActions } from './Stations/Store'
import { color as semesterColor } from './Semester/Semester'
import { color as ptmColor } from './Ptm/Ptm'
import { color as stationsColor } from './Stations/Stations'

export const identifier = 'exams'

const toNavigationData = _.flow(
    _.groupBy( d => d.timesemester ),
    _.map( g => { 
        const scale = scaleBand([0,g.length-1],[0,1])
        return g.map( (d, i) => ({ ...d, x: d.timesemester, y: scale(i) + scale.bandwidth() * .5 }))
    }),
    _.flatten)

const graphs = state => [
    {
        name: 'semester',
        data: toNavigationData(SemesterSelectors.getTimeline(state)),
        color: semesterColor,
    },
    {
        name: 'ptm',
        data: toNavigationData(PtmSelectors.getTimeline(state)),
        color: ptmColor,
    },
    {
        name: 'stations',
        data: toNavigationData(StationsSelectors.getTimeline(state)),
        color: stationsColor,
    },
]

const selectors = {
    loaded: () => true,
    getNavigationData: graphs,
}

const actions = {
    setSelected: (id, value) => ({ type: 'EXAMS_SELECT', payload: { id, value }}),
    load: () => _.over([PtmActions.load(), SemesterActions.load(), StationsActions.load()])
}

export { selectors, actions }

export const reducer = combineReducers({ [ptmsIdentifier]: ptmsReducer, [semesterIdentifier]: semesterReducer, [stationsIdentifier]: stationsReducer })