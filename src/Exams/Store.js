import { combineReducers } from 'redux'
import _ from 'lodash/fp'
import groupBy from '../Utils/groupBy'
import { scaleBand } from 'd3-scale'
import { reducer as ptmsReducer, identifier as ptmsIdentifier, selectors as PtmSelectors } from './Ptm/Store'
import { reducer as mcReducer, identifier as mcIdentifier, selectors as MCSelectors } from './MC/Store'
import { reducer as stationsReducer, identifier as stationsIdentifier, selectors as StationsSelectors } from './Stations/Store'
import { color as mcColor } from './MC/MC'
import { color as ptmColor } from './Ptm/Ptm'
import { color as stationsColor } from './Stations/Stations'
import BaseStore from '../Core/BaseStore'

export const identifier = 'exams'
export const url = 'pruefungen'
const baseStore = BaseStore(identifier)

const toNavigationData = function(examData) {
    let data = groupBy(examData, 'zeitsemester');
    let pre = [], post = [];

    for (let zeitsemester in data) {
        const scale = scaleBand([0, data[zeitsemester].length - 1], [0, 1]);
        let group = data[zeitsemester].map(
            (d, i) => ({ ...d, x: d.zeitsemester, y: scale(i) + scale.bandwidth() * .5})
        );
        pre.push(group);
    }

    for (let i = 0; i < pre.length; i++)
        for (let j = 0; j < pre[i].length; j++)
            post.push(pre[i][j]);

    return post;
}

const graphs = state => [
    {
        name: 'mcs',
        data: toNavigationData(MCSelectors.getTimeline(state)),
        color: mcColor,
    },
    {
        name: 'ptms',
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
    getSelected: _.flow([ baseStore.getItems, s => s.selected ]),
    getSemesters: _.flow([ graphs, _.flatMap( g => g.data.map( d => d.zeitsemester )), _.uniq, _.sortBy( t => t.split(' ').reverse().join(''))])
})

const actions = baseStore.withLoadAction(url)({
    setSelected: value => ({ type: 'EXAMS_SELECT', payload: value })
})

export { selectors, actions }

const selected = (state = -1, action) => {
    switch(action.type) {
        case 'EXAMS_SELECT':
            return action.payload.id
        default:
            return state
    }
}

export const reducer = combineReducers(baseStore.withLoadedReducer(
    combineReducers({ selected, [ptmsIdentifier]: ptmsReducer, [mcIdentifier]: mcReducer, [stationsIdentifier]: stationsReducer })
))
