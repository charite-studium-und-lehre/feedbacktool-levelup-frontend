
import React from 'react'
import image from './login.jpg'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import makeExtendable from '../Core/makeExtendable'

const background = {
    background: `url(${image}) no-repeat center`,
    backgroundSize: 'cover'
}

const Login = ({ t }) => (
    <div className='h-100' >
        <div className='row h-100' style={background}>
            <div className='col-md-5 offset-md-7 bg-white'>
                <div className='pr-4 pl-3'>
                    <h3 className='my-4 text-center'>{t(`Willkomen bei LevelUp`)}</h3>
                    <div className='mt-5'>
                        <p >{t(`Herzlich Willkommen bei LevelUp – deinem Online Feedback Tool zur integrierten Darstellung deines Studienfortschritts im Modellstudiengang 2.0`)}</p>
                    </div>
                    <Link to='/user/dataProtection'>
                        <div className='text-primary'>
                            <span className='font-weight-bold ml-2' style={{ cursor: 'pointer', fontSize: '1rem' }}>{t(`Datenschutzhinweise`)}</span>
                        </div>
                    </Link>
                </div>
                <div className="container-form mt-5" style={{ padding: '0 5rem' }} >
                    <a href="https://levelup.charite.de/backend/login">
                        <button type="button" className="btn btn-primary w-100 font-weight-bold" >{t(`Login`)}</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
)
export default withTranslation()(makeExtendable(Login))