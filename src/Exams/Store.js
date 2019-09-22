import { combineReducers } from 'redux'
import _ from 'lodash/fp'
import { scaleBand } from 'd3-scale'
import { reducer as ptmsReducer, identifier as ptmsIdentifier, selectors as PtmSelectors, actions as PtmActions } from './Ptm/Store'
import { reducer as semesterReducer, identifier as semesterIdentifier, selectors as SemesterSelectors, actions as SemesterActions } from './Semester/Store'
import { reducer as stationsReducer, identifier as stationsIdentifier, selectors as StationsSelectors, actions as StationsActions } from './Stations/Store'

export const identifier = 'exams'

const getSelected = state => state[identifier].selected

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
        data: toNavigationData(getSelected(state))(SemesterSelectors.getTimeline(state)),
        color: 120,
    },
    {
        name: 'ptm',
        data: toNavigationData(getSelected(state))(PtmSelectors.getTimeline(state)),
        color: 240,
    },
    {
        name: 'stations',
        data: toNavigationData(getSelected(state))(StationsSelectors.getTimeline(state)),
        color: 0,
    },
]

const selectors = {
    loaded: () => true,
    getNavigationData: graphs,
    getSelected,
}

const actions = {
    setSelected: (id, value) => ({ type: 'EXAMS_SELECT', payload: { id, value }}),
    load: () => _.over([PtmActions.load(), SemesterActions.load(), StationsActions.load()])
}

export { selectors, actions }

const selected = ( state = -1, action ) => {
    switch(action.type) {
        case 'EXAMS_SELECT':
            return action.payload.id
        default:
            return state
    }
}

export const reducer = combineReducers({ selected, [ptmsIdentifier]: ptmsReducer, [semesterIdentifier]: semesterReducer, [stationsIdentifier]: stationsReducer })