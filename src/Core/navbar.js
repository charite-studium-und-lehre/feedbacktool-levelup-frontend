import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from './makeExtendable'
import { withTranslation } from 'react-i18next'
import LanguageSymbol from './languageSymbol'

export default withTranslation()(makeExtendable(function Navbar({t, ...props}) {
    let button = props.isLoggedIn ?
        <NavLink className="nav-link pull-right" to="/logout">Logout</NavLink> :
        <NavLink className="nav-link pull-right" to="/login">Login</NavLink>

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <Link className="navbar-brand" to="/">LevelUp</Link>
            <button className="navbar-toggler" onClick={props.toggleExtended} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon  icon={faBars} />
            </button>
            <div className={`collapse navbar-collapse ${props.extended && 'show'}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" onClick={props.toggleExtended}>
                        <NavLink className="nav-link" to="/dashboard">{t(`Dashboard`)}<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item" onClick={props.toggleExtended}>
                        <NavLink className="nav-link" to="/exams">{t(`Prüfungen`)}</NavLink>
                    </li>
                    <li className="nav-item" onClick={props.toggleExtended}>
                        <NavLink className="nav-link" to="/practicals">{t(`Ärztliche Tätigkeiten`)}</NavLink>
                    </li>
                    <li className="nav-item" onClick={props.toggleExtended}>
                        <NavLink className="nav-link" to="/consulting">{t(`Beratung`)}</NavLink>
                    </li>
                    <li className="nav-item" >
                        <a className="nav-link" href='https://msm-tellme.charite.de/lernen'>{t(`TellMe`)}</a>
                    </li>
                    <li className="nav-item" onClick={props.toggleExtended}>
                        <NavLink className="nav-link" to="/willcommen">{t(`1.LogIn`)}</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item">
                      <div className="mt-2 mr-4" style={{ cursor: 'pointer' }}>
                          Willkommen Sabine 
                      </div>
                    </li>
                    {/* <li className="nav-item">
                        <LanguageSymbol />
                    </li> */}
                    <li className="nav-item">
                        {button}
                    </li>
                </ul>
            </div>
        </nav>
    )
}))
