import React from 'react'
import {connect} from 'react-redux'
import _ from 'lodash/fp'
import image from './login.jpg'
import {Link, Redirect} from 'react-router-dom'
import {withTranslation} from 'react-i18next'
import makeExtendable from '../Core/makeExtendable'
import {selectors as user} from './Store'

const background = {
    background: `url(${image}) no-repeat center`,
    backgroundSize: 'cover'
}

const stateToProps = state => ({
    loggedIn: user.isLoggedIn(state),
    hasStammdata: user.getData(state).stammdatenVorhanden,
})

const Login = _.compose([
    connect(stateToProps),
    withTranslation(),
    makeExtendable(),
    C => props => props.loggedIn && !props.hasStammdata ? <Redirect to='/user/registration'/> : <C {...props} />,
    C => props => props.loggedIn ? <Redirect to='/dashboard'/> : <C {...props} />
])(({t}) =>
    <div className='container-fluid h-100'>
        <div className='row h-100' style={background}>
            <div className='col-md-5 offset-md-7 bg-white px-3'>
                <h3 className='my-4 text-center'>{t(`Willkommen bei LevelUp`)}</h3>
                <div className='mb-3'>
                    <p>{t(`Herzlich Willkommen bei LevelUp – deinem Online Feedback Tool zur integrierten Darstellung deines Studienfortschritts im Modellstudiengang 2.0.`)}</p>
                </div>
                <Link to='/user/dataProtection'>
                    <div className='color-navigation'>
                        <span className='font-weight-bold'
                              style={{cursor: 'pointer', fontSize: '1rem'}}>{t(`Datenschutzhinweise`)}</span>
                    </div>
                </Link>
                <div className="container-form my-3 px-4">
                    <a href="https://levelup.charite.de/backend/login">
                        <button type="button" className="btn btn-secondary w-100 font-weight-bold">{t(`Login`)}</button>
                    </a>
                </div>
                <div className='mb-3'>
                    <div>{t('Bei Problemen mit dem Login melde dich bitte bei levelup@charite.de.')}</div>
                </div>
                <div className='color-navigation'>
                    <a href="https://levelup.charite.de/app-demo" className='font-weight-bold' style={{
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}>{t(`Demo-Version von LevelUp ansehen`)}</a>
                </div>
            </div>
        </div>
    </div>
)
export default Login
