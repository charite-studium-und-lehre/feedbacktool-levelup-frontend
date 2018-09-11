import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Dashboard from './Dashboard';
import Login from './Login';

const PrivateRoute = ({ component: Component, isLoggedIn: isLoggedIn, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: true};
  }

  render() {
    let login;
    if(!this.state.loggedIn) {
      login = () => (<Login handleLogin={() => this.setState({loggedIn: true})}></Login>);
    } else {
      login = () => (<Redirect to="/"></Redirect>);
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar isLoggedIn={this.state.loggedIn}></Navbar>
          <Route path="/login" component={login}></Route>
          <PrivateRoute path="/dashboard" component={Dashboard} isLoggedIn={this.state.loggedIn}></PrivateRoute>
          <Route exact path="/" render={() => (
              <Redirect to="/dashboard"/>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
