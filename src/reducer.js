import { combineReducers } from 'redux'
import { reducer as practicalsReducer, identifier as practicalsIdentifier } from './Practicals/Store'
import { reducer as examsReducer, identifier as examsIdentifier } from './Exams/reducer'

export default combineReducers({ [practicalsIdentifier]: practicalsReducer, [examsIdentifier]: examsReducer })