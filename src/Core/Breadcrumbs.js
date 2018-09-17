import React from 'react'
import { Link, Route } from 'react-router-dom'
import Routes from './Routes';

const Breadcrums = () =>  (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {Routes.map(route => (
                <Route key={route.path} path={route.path} render={() => (
                    <li className="breadcrumb-item" aria-current="page">
                        <Link to={route.path.split('/:')[0]}>{route.breadcrumb}</Link>
                    </li>
            )} />))}
        </ol>
    </nav>
)

export default Breadcrums