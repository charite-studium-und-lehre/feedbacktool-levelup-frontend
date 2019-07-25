import { combineReducers } from 'redux'
import { reducer as ptmsReducer, identifier as ptmsIdentifier } from './Ptm/Store'
import { reducer as semesterReducer, identifier as semesterIdentifier } from './Semester/Store'
import { reducer as stationsReducer, identifier as stationsIdentifier } from './Stations/Store'
import { identifier as examsIdentifier } from './Store'

export const identifier = examsIdentifier
export const reducer = combineReducers({ [ptmsIdentifier]: ptmsReducer, [semesterIdentifier]: semesterReducer, [stationsIdentifier]: stationsReducer })