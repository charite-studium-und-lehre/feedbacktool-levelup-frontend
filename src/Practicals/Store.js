import _ from 'lodash'
import initialState from './tree'

const getStore = state => state.practicals
const getItemById = (state, id) => getStore(state).find(e => e.id == id)
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

export const selectors = {
  getStore,
  getItemById,
  getItemByLabel: (state, label) => getStore(state).find(e => e.label == label),
  getScore,
  getMaxScore,
}

export const actions = {
  levelUpDone: id => ({ type: 'LEVEL_UP_DONE', payload: { id }}),
  levelDownDone: id => ({ type: 'LEVEL_DOWN_DONE', payload: { id }}),
  levelUpConfident: id => ({ type: 'LEVEL_UP_CONFIDENT', payload: { id }}),
  levelDownConfident: id => ({ type: 'LEVEL_DOWN_CONFIDENT', payload: { id }}),
}

const level = (state, id, p, val) => {
  const entry = _.clone(state.find(e => e.id === id))
  entry[p] = Math.min(Math.max(entry[p] + val, 0), 6)
  return [
    ...state.slice(0,state.findIndex(e => e.id === id)),
    entry,
    ...state.slice(state.findIndex(e => e.id === id) + 1)
  ]
}
export function reducer(state = initialState, action) {
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
}