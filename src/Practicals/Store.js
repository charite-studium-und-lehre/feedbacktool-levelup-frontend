import _ from 'lodash/fp'
import { combineReducers } from 'redux'
import initialState from './Data'
import BaseStore from '../Core/BaseStore'

const storeIdentifier = 'practicals'
export const identifier = storeIdentifier
const baseStore = BaseStore(storeIdentifier)
const getItemById = _.curry((state, id) => baseStore.getItems(state)[id])
const getLeavesById = state => _.flow([ getItemById(state), getLeaves(state) ])
const getLeaves = state => entry => entry.entries.length ? _.flatMap( getLeavesById(state) )(entry.entries) : [entry]

const getFilter = state => state[storeIdentifier].filter
const visibleFnFromFilter = filter => e => filter ? e.external.find( e => e.id === filter ) : e.external
const visible = _.flow([ getFilter, visibleFnFromFilter ])
const addVisible = state => entry => _.flow([ getLeaves(state), _.some( visible(state) ), visible => ({ ...entry, visible }) ])(entry)

const getScore = (state, id, prop) => _.flow([ getLeavesById(state), _.map(prop), _.sum])(id)
const getExternalScore = (state, id) => getScore(state, id, e => visible(state)(e) ? visible(state)(e) : 0)

const getMaxScore = (state, id) => _.flow([ getLeavesById(state), leaves => leaves.length * 5 ])(id)

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

const filter = (state = null, action) => {
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