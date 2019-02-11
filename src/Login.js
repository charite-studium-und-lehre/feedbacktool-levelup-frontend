
import React, {Component} from 'react';
import "./login.css";
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
const Login = props => (
    
    <div className="login-image">
    <div className="overlay"></div>
    <nav class="navbar ">
  <h2 >Level<span>UP</span></h2>
</nav>
    <div className="container-form  " data-wow-delay=".5" style={{ textAlign: "center" }} >
    <h2 className="h2-login">Login</h2>
    {/* <FontAwesomeIcon  icon= {faUser} style={{ fontSize: "3.5em" }} />  */}
        <form>
            <div className="form-group ">
            
                {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <FontAwesomeIcon  icon= {faEnvelope}/>
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
                {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                <FontAwesomeIcon  icon= {faLock}  /> 
            </div>
             {/* <div className="right">
               <NavLink className="nav-link" to="">password vergessen ?</NavLink>
               </div>
              <div className="left">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remenber Me </label>
                <Checkbox/> 
                </div> */}
             <button type="button" className="btn btn-primary" onClick={() => props.handleLogin()}>Login {/* <FontAwesomeIcon  icon= {faSignInAlt}  /> */} </button> 
        </form>
    </div>
    </div>
);

export default Login