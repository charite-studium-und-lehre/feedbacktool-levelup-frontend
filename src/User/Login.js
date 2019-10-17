
import React from 'react'
import "./login.css"
import DataProtection from './DataProtection'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import makeExtendable from '../Core/makeExtendable'

const Login = ({ t, ...props }) => (
    <div className='h-100' >
        {props.extended ? <DataProtection onClick={props.toggleExtended} />
            :
            <div className='row h-100'>
                <div className='col-md-7 col-lg-8 '>
                    <div className='login-image'></div>
                </div>
                <div className='col-md-5 col-lg-4'>
                    <div>
                        <div className='pr-4 pl-3'>
                            <h3 className='my-4 text-center'>{t(`Willkomen bei LevelUp`)}</h3>
                            <div className='mt-5'>
                                <p >{t(`Herzlich Willkommen bei LevelUp – deinem Online Feedback Tool zur integrierten Darstellung deines Studienfortschritts im Modellstudiengang 2.0`)}</p>
                            </div>
                            <div className='text-primary' onClick={props.toggleExtended}>
                                <span className='font-weight-bold ml-2' style={{ cursor: 'pointer', fontSize: '15px' }}>{t(`Datenschutzhinweise`)}</span>
                            </div>
                        </div>
                        <div className="container-form mt-5" style={{ padding: '0 5rem' }} >
                            <Link to="/user/registration">
                                <button type="button" className="btn btn-primary" >{t(`Login`)}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
)
export default withTranslation()(makeExtendable(Login))