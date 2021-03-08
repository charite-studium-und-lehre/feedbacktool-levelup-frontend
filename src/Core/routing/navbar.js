import React from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../makeExtendable'
import LevelUpLogo from '../../images/LevelupLogo.png'
import tellMeLogo from '../../images/tellMeLogo.PNG'
import Routes from "./Routes"
import { useLocation } from "react-router-dom"
import { selectors as user } from '../../User/Store'
import Colors from "../../colors"
import { compose } from "../../Utils/utils"

const TellMeLink = (props) =>
    <div className={`d-none d-lg-block mt-2 ${props.margin}`}>
        <span style={{fontSize:'.9rem', color: Colors.blackOpacity05, display: 'inline-block', marginTop:'.9rem'}} >Partnerlink:</span>
        <div style={{display: 'inline-block', marginBottom:'.8rem'}}>
        <a className='btn mx-3 py-1 d-none d-sm-inline' style={{backgroundColor:Colors.background.tellmeButtonBlue}} target="blank" href='https://msm-tellme.charite.de/lernen' >
            <span  style={{color:Colors.white}}>Trainieren</span>
        </a>
        <img className='mb-2' src={tellMeLogo} alt="tellme-logo" style={{ height: '2rem', width: '5rem' }}></img>
        </div>
    </div>

const stateToProps = state => ({
    loggedIn: user.isLoggedIn(state),
    userData: user.getData(state)
})

export default compose([connect(stateToProps), makeExtendable()])(function Navbar({ loggedIn, userData, ...props }) {
    const { pathname } = useLocation()
    const navbarLogin = !pathname.includes('login')
    return (
        <nav className={`navbar navbar-expand-lg  ${navbarLogin? 'border-bottom bg-white' :''} sticky-top flex-shrink-0 `}>
            <Link className="navbar-brand mr-2" to="/" id='LevelupLogo'><img className='m-0 p-0' src={LevelUpLogo} alt="LevelupLogo" style={{ width: '8rem', }}></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation" onClick={props.toggleExtended}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div className={`collapse navbar-collapse ${props.extended && 'show'}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto" onClick={props.toggleExtended}>
                    {Routes.map((route, index) =>
                        route.menuName && (!route.private || loggedIn) ?
                            <li className="nav-item" key={index}>
                                <NavLink className="nav-link" id={route.menuName} to={route.path}>{route.menuName}</NavLink>
                            </li>
                            : route.TellMe ?
                                <div className='d-lg-none' style={{color: Colors.blackOpacity05}} key={index}>
                                    <a target="blank" href='https://msm-tellme.charite.de/lernen'>
                                        <span className='mr-2'>Trainieren mit</span>
                                        <img className='mb-2' src={tellMeLogo} alt="tellme-logo" style={{ height: '1.5rem', width: '4rem' }}></img>
                                    </a>
                                </div>
                                : null
                    )}
                </ul>
                {
                    pathname.includes('/exams/mcs/') ?
                        null
                        : <TellMeLink margin={navbarLogin? 'mr-auto': ''} />
                }
                <div className="float-right d-none d-lg-block" style={{ cursor: 'pointer' }}>
                    {loggedIn && <span id='Willkommen'>Willkommen {userData.vorname}</span>}
                </div>
               { navbarLogin ? <ul className="navbar-nav">
                    <li className="nav-item">
                        {loggedIn ?
                            <a className="nav-link pull-right" id='logout' href="https://levelup.charite.de/backend/logout">logout</a> :
                            <NavLink className="nav-link pull-right" to="/login">login</NavLink>
                        }
                    </li>

                </ul>
                : null
                }
            </div>

        </nav>
    )
})
