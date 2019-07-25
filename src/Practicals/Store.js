import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import initialState from './Data'
import BaseStore from '../Core/BaseStore'

export const identifier = 'practicals'
const baseStore = BaseStore(identifier)
const getItemById = (state, id) => baseStore.getItems(state)[id]
const flattenTree = (selector, entry) => entry.entries.length ? _.flatMap(e => flattenTree(selector, selector(e)), entry.entries) : [entry]

const getScore = (state, id, prop) => {
  const selectById = _.curry(getItemById)(state)
  const getEntries = _.curry(flattenTree)(selectById)
  const selectProp = _.map(e => e[prop])
  return _.flow([selectById, getEntries, selectProp, _.sum])(id)
}

const getMaxScore = (state, id) => {
  const selectById = _.curry(getItemById)(state)
  const getEntries = _.curry(flattenTree)(selectById)
  return _.flow([selectById, getEntries])(id).length * 5
}

const getHistoricalScore = (state, id, prop) => {
  const selectById = _.curry(getItemById)(state)
  const getEntries = _.curry(flattenTree)(selectById)
  return _.flow([selectById, getEntries, _.map(_.property(`historical.${prop}`)), _.zipAll, _.map(d => ({ level: _.sumBy('level', d), semester: d[0].semester }))])(id)
}

export const selectors = baseStore.withLoadedSelector({
  getItemById,
  getItemByLabel: (state, label) => _.find(e => e.label === label, baseStore.getItems(state)),
  getScore,
  getHistoricalScore,
  getMaxScore,
})

export const actions = baseStore.withLoadAction({
  levelUpDone: id => ({ type: 'LEVEL_UP_DONE', payload: { id }}),
  levelDownDone: id => ({ type: 'LEVEL_DOWN_DONE', payload: { id }}),
  levelUpConfident: id => ({ type: 'LEVEL_UP_CONFIDENT', payload: { id }}),
  levelDownConfident: id => ({ type: 'LEVEL_DOWN_CONFIDENT', payload: { id }}),
}, initialState)

const level = (state, id, p, val) => {
  const entry = _.clone(state[id])
  entry[p] = Math.min(Math.max(entry[p] + val, 0), 5)
  return {...state, [id]: entry }
}

export const reducer = combineReducers(baseStore.withLoadedReducer(function reducer(state = {undefined: {label: 'root', entries: []}}, action) {
  switch (action.type) {
    case 'LEVEL_UP_DONE':
      return level(state, action.payload.id, 'done', 1)
    case 'LEVEL_DOWN_DONE':
      return level(state, action.payload.id, 'done', -1)
    case 'LEVEL_UP_CONFIDENT':
      return level(state, action.payload.id, 'confident', 1)
    case 'LEVEL_DOWN_CONFIDENT':
      return level(state, action.payload.id, 'confident', -1)
    default:
      return state
  }
}))