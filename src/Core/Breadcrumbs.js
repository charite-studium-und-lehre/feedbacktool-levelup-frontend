import React from 'react'
import { Route } from 'react-router-dom'
import Routes from './Routes';
import { useTranslation } from 'react-i18next';
const {t} = useTranslation();

const Breadcrumbs = () => (
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {Routes(t).map(route => (
                <Route key={route.path} path={route.path} render={({ match }) => {
                    const items = [].concat(route.breadcrumb(match.params))
                    return items.map((item, i) =>
                        <li key={i} className="breadcrumb-item" aria-current="page">
                            { item }
                        </li>
                    )
            }} />))}
        </ol>
    </nav>
)

export default Breadcrumbs