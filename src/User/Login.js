import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import backgroundLogin from '../images/backgroundLogin.jpg'
import backgroundMobil from '../images/backgroundLoginMobile.jpg'
import logoSchrift from'../images/logoSchrift.svg'
import { Redirect } from 'react-router-dom'
import { selectors as user } from './Store'
import Navbar from '../Core/routing/navbar'


const background = (image) => ({
    background: `url(${image}) no-repeat center`,
    backgroundSize: 'cover'
})
const Button = props => (
    <div className={`${props.col} my-2 my-md-5`} >
        <a className='btn btn-info form-control mt-2' target={props.target} href={props.href} style={{ MaxHeight: '5rem', fontSize: '4.5vmin ' }}>{props.title}</a>
    </div>
)
const stateToProps = state => ({
    loggedIn: user.isLoggedIn(state),
    hasStammdata: user.getData(state).stammdatenVorhanden,
})

const Login = _.compose([
    connect(stateToProps),
    C => props => props.loggedIn && !props.hasStammdata ? <Redirect to='/user/registration' /> : <C {...props} />,
    C => props => props.loggedIn ? <Redirect to='/dashboard' /> : <C {...props} />
])(() =>
    <div className='container-fluid h-100' style={background(window.innerWidth < 942 ? backgroundLogin : backgroundMobil)}>
        <Navbar />
        <div className='row'>
            <div className='col-12 text-center levelup '>
               <img src={logoSchrift} style={{height:'100%', width:'100%'}}></img>
            </div>
            <div className='col-12 col-xl-8 m-auto buttonsContainer'>
                <div className='row '>
                    <Button col='col-10 col-md-6 m-auto' title='Login' href='https://levelup.charite.de/backend/login' />
                    <Button col='col-10 col-md-6 m-auto' title='Registrieren' href='https://levelup.charite.de/backend/login' />
                </div>
                <div className='row mt-3 mb-2 '>
                    <Button col='col-6 col-md-3' title='Demo' target='blank' href='https://levelup.charite.de/app-demo' />
                    <Button col='col-6 col-md-3' title='Video' target='blank' href='https://levelup.charite.de/videos/Klickvideo.mp4' />
                    <Button col='col-6 col-md-3' title='Tutorial' target='blank' href='https://levelup.charite.de/app-test3/tutorial'/>
                    <Button col='col-6 col-md-3' title='Hilfe' href='mailto:levelup@charite.de' />
                </div>

            </div>
        </div>
    </div>
)
export default Login
