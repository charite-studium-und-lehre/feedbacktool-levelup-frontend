import { combineReducers } from 'redux'
import _ from 'lodash/fp'
import { scaleBand } from 'd3-scale'
import { reducer as ptmsReducer, identifier as ptmsIdentifier, selectors as PtmSelectors } from './Ptm/Store'
import { reducer as semesterReducer, identifier as semesterIdentifier, selectors as SemesterSelectors } from './Semester/Store'
import { reducer as stationsReducer, identifier as stationsIdentifier, selectors as StationsSelectors } from './Stations/Store'
import { color as semesterColor } from './Semester/Semester'
import { color as ptmColor } from './Ptm/Ptm'
import { color as stationsColor } from './Stations/Stations'
import BaseStore from '../Core/BaseStore'

export const identifier = 'exams'
const baseStore = BaseStore(identifier)

const toNavigationData = _.flow(
    _.groupBy( d => d.zeitsemester ),
    _.map( g => { 
        const scale = scaleBand([0,g.length-1],[0,1])
        return g.map( (d, i) => ({ ...d, x: d.zeitsemester, y: scale(i) + scale.bandwidth() * .5 }))
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

const selectors = baseStore.withLoadedSelector({
    getNavigationData: graphs,
    getById: (state, id) => _.flow([ graphs, _.flatMap( g => g.data ), _.find( d => d.id === id )])(state),
    getSelected: _.flow([ graphs, _.flatMap( g => g.data ), _.find( d => d.selected )]),
})

const actions = baseStore.withLoadAction('/pruefung')({
    setSelected: value => ({ type: 'EXAMS_SELECT', payload: value })
})

export { selectors, actions }

export const reducer = combineReducers(baseStore.withLoadedReducer(
    combineReducers({ [ptmsIdentifier]: ptmsReducer, [semesterIdentifier]: semesterReducer, [stationsIdentifier]: stationsReducer })
))