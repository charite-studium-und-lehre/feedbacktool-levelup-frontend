import React, {useEffect} from 'react'
import { useLocation } from "react-router-dom";
import {BrowserRouter, NavLink, withRouter} from 'react-router-dom'
import {Route, Redirect} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import 'd3-transition'
import 'react-slidedown/lib/slidedown.css'
import 'video-react/dist/video-react.css'
import './App.css'
import Feedback from './Core/Feedback'
import Navbar from './Core/routing/navbar'
import Breadcrumbs from './Core/routing/Breadcrumbs'
import PrivateRoute from './Core/routing/PrivateRoute'
import Routes from './Core/routing/Routes'
import {withTranslation} from 'react-i18next'

const basename = process.env.PUBLIC_URL || '/'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const Tracker = withRouter(() => {
    window._paq.push(['trackPageView'])
    return null
})
const App = withTranslation()(() => {
  
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
      
       
   return <Provider store={createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))}>
        <BrowserRouter basename={basename}>
            <div className="App container-fluid p-0 d-flex flex-column">
                <Navbar />
                <Breadcrumbs/>
                <div className="container-fluid flex-fill p-0">
                    {Routes.map(route => (route.private ?
                            <PrivateRoute key={route.path} path={route.path} component={route.component}
                            exact={route.exact} /> :
                            <Route key={route.path} path={route.path} component={route.component}
                            exact={route.exact}/>
                            ))}
                    <Route exact path="/" render={() => (
                        <Redirect to="/dashboard"/>
                        )}/>
                    <Tracker />
                </div>
                <div className="w-100 text-center" style={{fontSize: '.9rem', color: 'grey', backgroundColor: 'lightgrey'}}>
                    <NavLink to="/impressum">Impressum / Disclaimer</NavLink>
                </div>
                <Feedback />
            </div>
        </BrowserRouter>
    </Provider>
}
)

export default App