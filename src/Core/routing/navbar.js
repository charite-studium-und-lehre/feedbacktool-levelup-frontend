import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../makeExtendable'
import { withTranslation } from 'react-i18next'
import LevelUpLogo from '../../images/LevelupLogo.png'
import Routes from "./Routes"
import { selectors as user } from '../../User/Store'

const stateToProps = state => ({ loggedIn: user.isLoggedIn(state), userData: user.getData(state) })
export default _.compose([connect(stateToProps), withTranslation(), makeExtendable()])(function Navbar({ t, loggedIn, userData, ...props }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top flex-shrink-0">
            <Link className="navbar-brand mr-2" to="/" id='LevelupLogo'><img className='m-0 p-0' src={LevelUpLogo} alt="LevelupLogo" style={{ width: '8rem', }}></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation" onClick={props.toggleExtended}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`collapse navbar-collapse ${props.extended && 'show'}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" onClick={props.toggleExtended}>
                    {Routes.map((route, i) =>
                        route.menuName && (!route.private || loggedIn) &&
                        <li className="nav-item" key={i}>
                            <NavLink className="nav-link" id={route.menuName} to={route.path}>{t(route.menuName)}</NavLink>
                        </li>
                    )}
                </ul>
                <div className="float-right d-none d-lg-block" style={{ cursor: 'pointer' }}>
                    {loggedIn && <span id='Willkommen'>Willkommen {userData.vorname}</span>}
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {loggedIn ?
                            <a className="nav-link pull-right" id='logout' href="https://levelup.charite.de/backend/logout">{t(`logout`)}</a> :
                            <NavLink className="nav-link pull-right" to="/login">{t(`login`)}</NavLink>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
})
