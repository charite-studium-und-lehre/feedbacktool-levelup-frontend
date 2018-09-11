import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const isLoggedIn = props.isLoggedIn;
    let button;

    if (isLoggedIn) {
        button = <Link className="nav-link pull-right" to="/logout">logout</Link>;
    } else {
        button = <Link className="nav-link pull-right" to="/login">login</Link>
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <Link className="navbar-brand" to="/">LevelUp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/dashboard">Dashboard <span className="sr-only">(current)</span></Link>
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