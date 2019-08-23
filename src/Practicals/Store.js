import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import initialState from './Data'
import BaseStore from '../Core/BaseStore'

export const identifier = 'practicals'
const baseStore = BaseStore(identifier)
const getItemById = (state, id) => baseStore.getItems(state)[id]
const getLeaves = state => entry => entry.entries.length ? _.flatMap(e => getLeaves(state)(getItemById(state, e)), entry.entries) : [entry]
const getLeavesById = (state, id) => _.flow([ getItemById, getLeaves(state) ])(state, id)

const getFilter = state => state[identifier].filter
const visible = _.flow([ getFilter, filter => e => e.external.find && e.external.find( e => e.id === filter ) ])
const addVisible = state => entry => _.flow([ getLeaves(state), _.some( visible(state) ), visible => ({ ...entry, visible }) ])(entry)

const getScore = (state, id, prop) => _.flow([ getLeavesById, _.map(prop), _.sum])(state, id)
const getExternalScore = (state, id) => getScore(state, id, e => visible(state)(e) ? visible(state)(e).value : 0)

const getMaxScore = _.flow([ getLeavesById, leaves => leaves.length * 5 ])

export const selectors = baseStore.withLoadedSelector({
  getItemById: (state, id) => _.flow([ getItemById, addVisible(state) ])(state, id),
  getItemByLabel: (state, label) => _.find(e => e.label === label, baseStore.getItems(state)),
  getScore,
  getMaxScore,
  getFilter,
  getExternalScore,
})

export const actions = baseStore.withLoadAction({
  setFilter: id => ({ type: 'SET_PRACTICALS_FILTER', payload: { id }}),
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

const filter = (state = 3, action) => {
  switch (action.type) {
    case 'SET_PRACTICALS_FILTER':
      return action.payload.id
    default:
      return state
  }
}

export const reducer = combineReducers({...baseStore.withLoadedReducer(function reducer(state = {undefined: {label: 'root', entries: []}}, action) {
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
}), filter })