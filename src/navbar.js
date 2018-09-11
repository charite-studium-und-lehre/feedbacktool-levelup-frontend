import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(props) {
    const isLoggedIn = props.isLoggedIn;
    let button;

    if (isLoggedIn) {
        button = <NavLink className="nav-link pull-right" to="/logout">logout</NavLink>;
    } else {
        button = <NavLink className="nav-link pull-right" to="/login">login</NavLink>
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link className="navbar-brand" to="/">LevelUp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">Dashboard <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/exams">Prüfungen</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/practicals">Ärztliche Tätigkeiten</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/counselling">Beratung</NavLink>
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
}