
import React from 'react';
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'





const Login = props => (
    <div className="login-image">
        <div className="overlay"></div>
        <nav className="navbar ">
            <h2 >Level<span>UP</span></h2>
        </nav>
        <div className="container-form  "  style={{ textAlign: "center" }} >
            <h2 className="h2-login">Login</h2>
            <form>
                <div className="form-group ">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => props.handleLogin()}>Login </button>
            </form>
        </div>
    </div>
);

export default Login