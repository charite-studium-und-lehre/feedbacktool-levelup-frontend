import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import { withTranslation } from 'react-i18next'
import LevelUpLogo from '../images/LevelupLogo.png'
import tellMeLogo from '../images/tellMeLogo.PNG'
import Routes from "../Core/routing/Routes"
import { selectors as user } from './Store'
import Colors from "../colors"

const TellMeLink = () =>
    <div className='d-none d-lg-block mt-2'>
        <span style={{fontSize:'.9rem', color: Colors.blackOpacity05, display: 'inline-block', marginTop:'.9rem'}} >Partnerlink:</span>
        <div style={{display: 'inline-block', marginBottom:'.8rem'}}>
        <a className='btn mx-3 py-1 d-none d-sm-inline' style={{backgroundColor:Colors.background.tellmeButtonBlue}} target="blank" href='https://msm-tellme.charite.de/lernen' >
            <span  style={{color:Colors.white}}>Trainieren</span>
        </a>
        <img className='mb-2' src={tellMeLogo} alt="tellme-logo" style={{ height: '2rem', width: '5rem' }}></img>
        </div>
    </div>

const stateToProps = state => ({ loggedIn: user.isLoggedIn(state), userData: user.getData(state) })
export default _.compose([connect(stateToProps), withTranslation(), makeExtendable()])(function Navbar({ t, loggedIn, userData, ...props }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  sticky-top flex-shrink-0 ">
            <Link className="navbar-brand mr-2" to="/" id='LevelupLogo' ><img className='m-0 p-0' src={LevelUpLogo} alt="LevelupLogo" style={{ width: '8rem', }}></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation" onClick={props.toggleExtended}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`collapse navbar-collapse ${props.extended && 'show'}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" onClick={props.toggleExtended}   >
                    {Routes.map((route, i) =>
                        route.menuName && (!route.private || loggedIn) ?
                            <li className="nav-item" key={i}>
                                <NavLink className="nav-link" id={route.menuName} to={route.path}>{t(route.menuName)}</NavLink>
                            </li>
                            : route.TellMe ?
                                <div className='d-lg-none' style={{color: Colors.blackOpacity05}}>
                                    <a target="blank" href='https://msm-tellme.charite.de/lernen'>
                                        <span className='mr-2'>Trainieren mit</span>
                                        <img className='mb-2' src={tellMeLogo} alt="tellme-logo" style={{ height: '1.5rem', width: '4rem' }}></img>
                                    </a>
                                </div>
                                : null
                    )}
                </ul>
                 <TellMeLink />
            </div>

        </nav>
    )
})
