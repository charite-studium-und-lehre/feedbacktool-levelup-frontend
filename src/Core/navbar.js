import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import makeExtendable from './makeExtendable'
import { useTranslation } from 'react-i18next';

export default makeExtendable(function Navbar(props) {
    const { t } = useTranslation();
    const isLoggedIn = props.isLoggedIn;
    let button;

    if (isLoggedIn) {
        button = <NavLink className="nav-link pull-right" to="/logout">Logout</NavLink>;
    } else {
        button = <NavLink className="nav-link pull-right" to="/login">Login</NavLink>
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <Link className="navbar-brand" to="/">LevelUp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" onClick={props.toggleExtended}></span>
            </button>
            <div className={`collapse navbar-collapse ${props.extended && 'show'}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">{t(`Dashboard`)}<span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/practicals">{t(`Ärztliche Tätigkeiten`)}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/consulting">{t(`Beratung`)}</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {button}
                    </li>
                </ul>
            </div>
        </nav>
    );
})
