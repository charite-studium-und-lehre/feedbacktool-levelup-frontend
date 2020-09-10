import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import 'd3-transition'
import 'react-slidedown/lib/slidedown.css'
import 'video-react/dist/video-react.css'
import './App.css'
import Feedback from './Core/Feedback'
import DashboardNavbar from './Core/routing/DashboardNavbar'
import Breadcrumbs from './Core/routing/Breadcrumbs'
import PrivateRoute from './Core/routing/PrivateRoute'
import Routes from './Core/routing/Routes'
import ScrollToTop from './Core/ScrollToTop'
import COLORS from "./colors"


const basename = process.env.PUBLIC_URL || '/'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const App =() =>
    <Provider store={createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))}>
        <BrowserRouter basename={basename}>
            <div className="App p-0 d-flex flex-column">
                <DashboardNavbar />
                <Breadcrumbs />
                <ScrollToTop />
                <div className="flex-fill">
                    {Routes.map((route, i) => (route.private ?
                        <PrivateRoute key={i} path={route.path} component={route.component}
                            exact={route.exact} /> :
                        <Route key={i} path={route.path} component={route.component}
                            exact={route.exact} />
                    ))}
                    <Route exact path="/" render={() => (
                        <Redirect to="/dashboard" />
                    )} />
                </div>
                <div className="w-100 text-center position-fixed" style={{ fontSize: '.9rem', color: COLORS.background.grey5, backgroundColor: COLORS.background.lightgrey, bottom: 0 }}>
                    <NavLink to="/impressum">Impressum / Disclaimer</NavLink>
                </div>
                <Feedback />
            </div>
        </BrowserRouter>
    </Provider>

export default App