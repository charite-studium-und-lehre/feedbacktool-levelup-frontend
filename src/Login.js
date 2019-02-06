
import React, {Component} from 'react';
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import WOW from "wow.js";



class Skills extends Component {
  
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div>
       <h1>Stuff to move</h1>
      </div>
    )
   }
}






const Login = props => (
    <div className="login-image">
    <div className=" container-form " style={{ textAlign: "center" }} >
    <FontAwesomeIcon  icon= {faUser} style={{ fontSize: "3.5em" }} /> 
        <form>
            <div className="form-group wow bounceIn">
            
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
            {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                <Checkbox/>
                
            </div> */}
            <button type="button" className="btn btn-primary" onClick={() => props.handleLogin()}>Login</button>
        </form>
    </div>
    </div>
);

export default Login