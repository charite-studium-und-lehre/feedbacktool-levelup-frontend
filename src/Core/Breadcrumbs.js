import React from 'react'
import { Link, Route } from 'react-router-dom'
import Routes from './Routes';

const Breadcrums = () =>  (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {Routes.map(route => (
                <Route key={route.path} path={route.path} exact={route.exact} component={() => (
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={route.path}>{route.breadcrumb} foo bar</Link>
                    </li>
            )} />))}
        </ol>
    </nav>
)

export default Breadcrums