import { combineReducers } from 'redux'
import { reducer as ptms } from './Ptm/Store'

export const reducer = combineReducers({ ptms })