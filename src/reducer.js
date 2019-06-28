import { combineReducers } from 'redux'
import { reducer as practicals } from './Practicals/Store'
import { reducer as exams } from './Exams/reducer'

export default combineReducers({ practicals, exams })