
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
        <div className='col-md-7 col-lg-8 '>
           <div className='login-image'></div>
        </div>
        <div className='col-md-5 col-lg-4'>
             {props.extended ? <Registration onClick={props.onClick}/>
              :
              <div>
                  <div  style={{padding:' 0 1rem 0 2rem '}}>
                    <h3 className='my-4'>{t(`Willkomen bei LevelUp`)}</h3>
                    <p className='my-4'>{t(`Herzlich Willkommen bei LevelUp – deinem Online Feedback Tool zur integrierten Darstellung deines Studienfortschritts im Modellstudiengang 2.0`)}</p>
                  </div>
                <div className="container-form" style={{padding:' 0 4rem 0 2rem'}} >
                    <form className='m-auto'>
                        <div className="form-group" style={{marginTop:'5rem'}}>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                             <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            <FontAwesomeIcon icon={faLock}/>
                        </div>
                        {/* <div onClick={ props.toggleExtended}>{t(`Registration`)}</div> */}
                        <button type="button" className="btn btn-primary" onClick={props.toggleExtended}>{t(`Login`)}</button>
                    </form>
                </div>
            </div>
        }
        </div>
    </div>
)
export default withTranslation()(makeExtendable(Login))