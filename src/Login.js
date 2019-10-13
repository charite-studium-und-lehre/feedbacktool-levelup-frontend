
import React from 'react';
import "./login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from './Core/makeExtendable'
import DatenProtection from './DatenProtection'
import Registration from './Registration'
import { withTranslation } from 'react-i18next'

const Login = ({t, ...props}) => (
     <div className='row h-100'>
    <div className='col-8 '>
    <div className='login-image'></div>
    </div>
    <div className='col-4'>
  {  props.extended ? <Registration onClick={props.onClick}/>
          :
        <div className="container-form" >
               <h3>{t(`Willkomen bei LevelUp`)}</h3>
                <p>{t(`Herzlich Willkommen bei LevelUp – deinem Online Feedback Tool zur integrierten Darstellung deines Studienfortschritts im Modellstudiengang 2.0`)}</p>
            <form>
                <div className="form-group ">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    <FontAwesomeIcon icon={faLock} />
                </div>
                <button type="button" className="btn btn-primary" onClick={props.toggleExtended}>{t(`Login`)}</button>
            </form>
        </div>}
    </div>
    </div>
)
export default withTranslation()(makeExtendable(Login))