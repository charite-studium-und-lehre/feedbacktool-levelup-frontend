import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import { Route, Redirect } from 'react-router-dom'
import needsData from '../../Core/needsData'
import { selectors as user, actions } from '../../User/Store'

const stateToProps = state => ({ loggedIn: user.isLoggedIn(state), hasStammdata: user.getData(state).stammdatenVorhanden })
const PrivateRoute = _.compose([ 
  needsData( state => user.isLoggedIn(state) !== null, actions.load, false), 
  connect(stateToProps) 
])(
  ({ component: Component, loggedIn, hasStammdata, ...rest }) =>
    <Route {...rest} render={ props => 
      loggedIn && hasStammdata ? <Component {...props} /> : <Redirect to='/login' /> } 
    />
)

export default PrivateRoute