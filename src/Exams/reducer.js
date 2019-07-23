import { combineReducers } from 'redux'
import { reducer as ptms } from './Ptm/Store'
import { reducer as semester } from './Semester/Store'

export const reducer = combineReducers({ ptms, semester })