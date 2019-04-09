import { combineReducers } from 'redux'
import { reducer as practicalsReducer } from './Practicals/Store'

export default combineReducers({ practicals: practicalsReducer })