import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../makeExtendable'
import {withTranslation} from 'react-i18next'
import Routes from "./Routes";

export default withTranslation()(makeExtendable(function Navbar({t, ...props}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top flex-shrink-0">

            <Link className="navbar-brand" to="/">LevelUp</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation" onClick={props.toggleExtended}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div className={`collapse navbar-collapse ${props.extended && 'show'}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" onClick={props.toggleExtended}>
                    {Routes.map((route, i) => 
                        route.hasOwnProperty('menuName') && 
                            <li className="nav-item" key={i}>
                                <NavLink className="nav-link" to={route.path}>{t(route.menuName)}</NavLink>
                            </li>
                    )}
                </ul>
                <div className="float-right d-none d-lg-block" style={{cursor: 'pointer'}}>
                    Willkommen Sabine
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link pull-right" onClick={props.onClick} to="/login">{t(`Logout`)}</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}))
