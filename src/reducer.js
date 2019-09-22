import { combineReducers } from 'redux'
import { reducer as practicalsReducer, identifier as practicalsIdentifier } from './Practicals/Store'
import { reducer as examsReducer, identifier as examsIdentifier } from './Exams/Store'
import { reducer as progressReducer, identifier as progressIdentifier } from './Progress/Store'

export default combineReducers({ 
    [practicalsIdentifier]: practicalsReducer, 
    [examsIdentifier]: examsReducer,
    [progressIdentifier]: progressReducer,
})