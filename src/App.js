import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import 'd3-transition'

import './App.css';
import Navbar from './Core/navbar'
import Login from './Login'
import Breadcrumbs from './Core/Breadcrumbs'
import PrivateRoute from './Core/PrivateRoute'
import Routes from './Core/Routes'
const getBasename = () => "/" + (window.location.pathname.split( '/' )[1] || "")

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: false};
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
      login = () => (<Redirect to="/dashboard"></Redirect>);
    }

    return (
        <BrowserRouter basename={getBasename()}>
          <div className="App">

            {navbar}
            {breadcrumbs}

            <Route path="/login" component={login} />
            {Routes.map( route => ( route.private ?
                    <PrivateRoute key={route.path} path={route.path} component={route.component} exact={route.exact} isLoggedIn={this.state.loggedIn} /> :
                    <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
            ))}
            <Route path="/" render={() => (
                <Redirect to="/dashboard" />
            )}/>
          </div>
        </BrowserRouter>

    );
  }



}

export default App;
