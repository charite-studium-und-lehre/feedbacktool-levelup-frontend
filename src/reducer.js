import { combineReducers } from 'redux'
import { reducer as epasReducer, identifier as epasIdentifier } from './EPAs/Store'
import { reducer as examsReducer, identifier as examsIdentifier } from './Exams/Store'
import { reducer as progressReducer, identifier as progressIdentifier } from './Progress/Store'

export default combineReducers({ 
    [epasIdentifier]: epasReducer, 
    [examsIdentifier]: examsReducer,
    [progressIdentifier]: progressReducer,
})