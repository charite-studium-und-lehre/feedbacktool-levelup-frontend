import React, { useRef } from 'react'
import _ from 'lodash/fp'
import { withTranslation } from 'react-i18next'
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

const errorToText = t => error => {
    switch(error) {
        case null:
            return
        case 404:
            return t('Es wurde kein Studi gefunden, auf den Name/Matrikelnummer passt.')
        default:
            return t('Mit der Matrikelnummer stimmt was nicht...')
    }
}
const stateToProps = state => ({ ...user.getData(state), error: user.getError(state) })
const registration = _.compose([ withTranslation(), makeExtendable, connect(stateToProps, actions) ])(
    ({ t, extended, toggleExtended, nachname, vorname, email, istAdmin, stammdatenVorhanden, sendStammdaten, error }) => {
    if(stammdatenVorhanden) return <Redirect to="/" />
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
                            <h4 className='text-center mb-4 mt-2 mb-4'>{t(`Registrierung bei LevelUp`)}</h4>
                            <p className='mb-0'>{t(`Bitte bestätige mit deiner Matrikelnummer, dass du LevelUp nutzen willst! `)}</p>
                            <p>{t(`Nur dadurch können deine Prüfungsdaten dem aktuellen Login zugeordnet werden.`)}</p>
                            <h6 className='font-weight-bold'>{t(`Datenschutzhinweise`)}:</h6>
                            <p>{t(`Deine Daten werden natürlich vertrauensvoll behandelt und sind nicht für Dritte einsehbar. Die Matrikelnummer wird nach Eingabe nicht gespeichert, sondern nur dazu verwendet, einmalig die anonymisierten Prüfungsdaten zuordenbar zu machen.`)}</p>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <Info name={t('Vorname')} >{vorname}</Info>
                                <Info name={t('Nachname')} >{nachname}</Info>
                                <Info name={t('Email')} >{email}</Info>
                                <Info name={t('Matrikelnummer')} >
                                    <input className="form-control font-weight-bold" placeholder={t('Matrikelnummer')} ref={matrikelnummer}></input>
                                </Info>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label onClick={toggleExtended} >
                                <FontAwesomeIcon icon={extended ? faCheckSquare : faSquare} />
                                <span className='ml-3 '>{t(`Ich stimme den`)}
                                <Link to="/user/dataProtection">
                                    <span className='font-weight-bold ml-1 text-primary' style={{ cursor: 'pointer' }}>{t(`Datenschutzhinweisen`)}</span>
                                </Link>
                                {t(` zu`)}</span>
                            </label>
                        </div>
                        <div className="text-danger text-center">{errorToText(t)(error)}</div>
                        <button className='btn btn-secondary mt-3' disabled={!extended} onClick={() => sendStammdaten(matrikelnummer.current.value)}>{t(`Absenden`)}</button>
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