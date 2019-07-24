import _ from 'lodash'
import { combineReducers } from 'redux'
import seedrandom from 'seedrandom'
import { randomUniform } from 'd3-random'
import initialState from './Data'

const getStore = state => state.practicals
const getItems = store => store.items
const getItemById = (state, id) => _.flow([getStore, getItems])(state)[id]
const flattenTree = (selector, entry) => entry.entries.length ? _.flatMap(entry.entries, e => flattenTree(selector, selector(e))) : [entry]

const getScore = (state, id, prop) => {
  const selectById = _.curry(getItemById)(state)
  const getEntries = _.curry(flattenTree)(selectById)
  const selectProp = _.curryRight(_.map)(e => e[prop])
  return _.flow([selectById, getEntries, selectProp, _.sum])(id)
}

const getMaxScore = (state, id) => {
  const selectById = _.curry(getItemById)(state)
  const getEntries = _.curry(flattenTree)(selectById)
  return _.flow([selectById, getEntries])(id).length * 5
}

const getHistoricalScore = _.flow([getScore, score => {
    const random = randomUniform.source(seedrandom(Math.random()))
    return _.range(1,8).map(() => random(0,score)()).sort().map((d, i) => ({semester: new Date(2012 + i, 6 + random(-1, 2)(), 15 + random(-10, 20)()), level: d}))
  }
])

export const selectors = {
  getStore,
  getItemById,
  getItemByLabel: (state, label) => _.find(_.flow([getStore, getItems])(state), e => e.label === label),
  getScore,
  getHistoricalScore,
  getMaxScore,
  loaded: state => getStore(state).loaded
}

export const actions = {
  levelUpDone: id => ({ type: 'LEVEL_UP_DONE', payload: { id }}),
  levelDownDone: id => ({ type: 'LEVEL_DOWN_DONE', payload: { id }}),
  levelUpConfident: id => ({ type: 'LEVEL_UP_CONFIDENT', payload: { id }}),
  levelDownConfident: id => ({ type: 'LEVEL_DOWN_CONFIDENT', payload: { id }}),
  load: () => dispatch => setTimeout(() => dispatch({ type: 'PRACTICALS_DATA_FETCHED', payload: initialState }), 3000)
}

const level = (state, id, p, val) => {
  const entry = _.clone(state[id])
  entry[p] = Math.min(Math.max(entry[p] + val, 0), 5)
  return _.extend({}, state, { [id]: entry })
}

const loaded = ( state = false, action ) => {
  switch (action.type) {
      case 'PRACTICALS_DATA_FETCHED':
          return true
      default:
          return state
  }
}

function items(state = {undefined: {label: 'root', entries: []}}, action) {
  switch (action.type) {
    case 'LEVEL_UP_DONE':
      return level(state, action.payload.id, 'done', 1)
    case 'LEVEL_DOWN_DONE':
      return level(state, action.payload.id, 'done', -1)
    case 'LEVEL_UP_CONFIDENT':
      return level(state, action.payload.id, 'confident', 1)
    case 'LEVEL_DOWN_CONFIDENT':
      return level(state, action.payload.id, 'confident', -1)
    case 'PRACTICALS_DATA_FETCHED':
      return action.payload
    default:
      return state
  }
}

export const reducer = combineReducers({ items, loaded })