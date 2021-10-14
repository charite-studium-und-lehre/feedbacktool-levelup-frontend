import React, { useRef } from 'react'
import _ from 'lodash/fp'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import { Link } from 'react-router-dom'
import { selectors as user, actions } from './Store'

const Info = ({ name, children }) => (
    <div className="row">
        <div className="col-sm-4 pt-2" >{name}:</div>
        <div className="col-sm-8 py-2 font-weight-bold">{children}</div>
    </div>
)

const errorToText = error => {
    switch(error) {
        case null:
            return
        case 404:
            return <div>
               Es wurde kein Studi gefunden, auf den Name/Matrikelnummer passt.<br />
               Bitte beachte, dass LevelUp nur für Studierende aus dem MSM 2.0 funktioniert.
                </div>
        default:
            return 'Mit der Matrikelnummer stimmt was nicht...'
    }
}
const stateToProps = state => ({ ...user.getData(state), error: user.getError(state), loggedIn: user.isLoggedIn(state) })
const registration = _.compose([makeExtendable(), connect(stateToProps, actions) ])(
    ({ extended, toggleExtended, nachname, vorname, email, istAdmin, stammdatenVorhanden, loggedIn, sendStammdaten, error }) => {
    if(!loggedIn || stammdatenVorhanden) return <Redirect to="/" />
    const matrikelnummer = useRef()
    const openSwitchUser = () => {
        const w = window.open('/backend/admin/switchUser', '_blank')
        w.onblur = () => window.location.reload()
    }
    return <div className='row'>
            <div className='col-12 mt-2'>
                <div className="p-4">
                    <div className='card p-4 mx-auto' style={{maxWidth: '50rem'}}>
                        <div>
                            <h4 className='text-center mb-4 mt-2 mb-4'>Registrierung bei LevelUp</h4>
                            <p className='mb-0'>Bitte bestätige mit deiner Matrikelnummer, dass du LevelUp nutzen willst!</p>
                            <p>Nur dadurch können deine Prüfungsdaten dem aktuellen Login zugeordnet werden.</p>
                            <h6 className='font-weight-bold'>Datenschutzhinweise:</h6>
                            <p>Deine Daten werden natürlich vertrauensvoll behandelt und sind nicht für Dritte einsehbar. Die Matrikelnummer wird nach Eingabe nicht gespeichert, sondern nur dazu verwendet, einmalig die anonymisierten Prüfungsdaten zuordenbar zu machen.</p>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <Info name='Vorname' >{vorname}</Info>
                                <Info name='Nachname'>{nachname}</Info>
                                <Info name='Email' >{email}</Info>
                                <Info name='Matrikelnummer' >
                                    <input className="form-control font-weight-bold" placeholder='Matrikelnummer' ref={matrikelnummer}></input>
                                </Info>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label onClick={toggleExtended} >
                                <FontAwesomeIcon icon={extended ? faCheckSquare : faSquare} />
                                <span className='ml-3 '>Ich stimme den
                                <Link to="/user/dataProtection">
                                    <span className='font-weight-bold ml-1 text-primary' style={{ cursor: 'pointer' }}>Datenschutzhinweisen</span>
                                </Link>
                                zu</span>
                            </label>
                        </div>
                        <div className="text-danger text-center">{errorToText(error)}</div>
                        <button className='btn btn-secondary mt-3' disabled={!extended} onClick={() => sendStammdaten(matrikelnummer.current.value)}>Absenden</button>
                        {istAdmin && 
                            <div className="text-center mt-1">
                                <span onClick={ openSwitchUser  }>Datensatz wählen</span>
                            </div>
                        }
                    </div>
                </div>
            </div>
    </div>
})
export default registration