import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import backgroundImage from './loginImage.jpg'
import backgroundImageMobil from './loginImageMobil.jpg'
import { Redirect } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import makeExtendable from '../Core/makeExtendable'
import { selectors as user } from './Store'
import Navbar from '../Core/routing/navbar'

const background = (image) => ({
    background: `url(${image}) no-repeat center`,
    backgroundSize: 'cover'
})
const Button = props => (
    <div className={`${props.col} my-3 my-md-5`} >
        <a className='btn btn-info form-control mt-2' href={props.href} style={{ MaxHeight: '5rem', fontSize: '4.5vmin ' }}>{props.title}</a>
    </div>
)
const stateToProps = state => ({
    loggedIn: user.isLoggedIn(state),
    hasStammdata: user.getData(state).stammdatenVorhanden,
})

const Login = _.compose([
    connect(stateToProps),
    withTranslation(),
    makeExtendable(),
    C => props => props.loggedIn && !props.hasStammdata ? <Redirect to='/user/registration' /> : <C {...props} />,
    C => props => props.loggedIn ? <Redirect to='/dashboard' /> : <C {...props} />
])(({ t }) =>
    <div className='container-fluid h-100' style={background(window.innerWidth < 942 ? backgroundImage : backgroundImageMobil)}>
        <Navbar />
        <div className='row'>
            <div className='col-12 text-center mb-5 levelup'  >
                {/* <img className='m-0 p-0 ' src={LevelUp} alt="Levelup" style={{ width: '33rem', height: '' }}></img> */}
                <span style={{ color: '#B1B0B2', }} >Level</span>
                <span >Up</span>
            </div>
            <div className='col-12 col-xl-8 m-auto my-5' style={{transform:'translateY(3em)'}} >
                <div className='row my-5 '>
                    <Button col='col-10 col-md-6 m-auto' title='Login' href='https://levelup.charite.de/backend/login' />
                    <Button col='col-10 col-md-6 m-auto' title='Registrieren' href='https://levelup.charite.de/backend/login' />
                </div>
                <div className='row mt-4 mb-2 '>
                    <Button col='col-6 col-md-3' title='Demo' href='https://levelup.charite.de/app-demo' />
                    <Button col='col-6 col-md-3' title='Video' href='' />
                    <Button col='col-6 col-md-3' title='Tutorial' href='' />
                    <Button col='col-6 col-md-3' title='Hilfe' href='mailto:levelup@charite.de' />
                </div>

            </div>
        </div>
    </div>
)
export default Login