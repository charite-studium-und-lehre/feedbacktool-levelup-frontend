import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducer'
import 'd3-transition'
import 'react-slidedown/lib/slidedown.css'
import './App.css'
import Navbar from './Core/navbar'
import Login from './Login'
import Breadcrumbs from './Core/Breadcrumbs'
import PrivateRoute from './Core/PrivateRoute'
import Routes from './Core/Routes'
import { withTranslation } from 'react-i18next'

const getBasename = () => "/" + (window.location.pathname.split( '/' )[1] || "")

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {loggedIn: true}
  }

  render() {
    let navbar = (
      <Navbar isLoggedIn={this.state.loggedIn}></Navbar>
    )
    let breadcrumbs =  (
<Breadcrumbs />
    )

    let login
    if(!this.state.loggedIn) {
      login = () => (<Login handleLogin={() => this.setState({loggedIn: true})}></Login>);
      navbar = false
      breadcrumbs = false
    } else {
      login = () => (<Redirect to="/dashboard"></Redirect>)
    }

    return (
      <Provider store={createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter basename={getBasename()}>
          <div className="App">
            {navbar}
            {breadcrumbs}
            <Route path="/login" component={login} />
            {Routes.map( route => ( route.private ?
                    <PrivateRoute key={route.path} path={route.path} component={route.component} exact={route.exact} isLoggedIn={this.state.loggedIn} /> :
                    <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
            ))}
            <Route exact path="/" render={() => (
                <Redirect to="/dashboard" />
            )}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default withTranslation() (App);
