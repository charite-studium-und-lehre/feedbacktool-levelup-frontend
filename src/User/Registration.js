import React from 'react'
import { withTranslation } from 'react-i18next'
import makeExtendable from '../Core/makeExtendable'
import { Link } from 'react-router-dom'

const Infos = props => (
    <div className='row'>
        <div className={`col-6 py-2 ${props.input && 'mt-3'}`} >{props.name}:</div>
        {props.input ?
            <div className='col-6 py-2'>
                <input className="form-control mt-2 font-weight-bold" placeholder="Matrikelnummer"></input>
            </div>
            :
            <div className=' col-6 py-2 font-weight-bold'>{props.title}</div>}
    </div>
)
const registration = ({ t, ...props}) => (
    <div className='row px-4'>
            <div className='col-12 col-lg-10 col-xl-7 mx-auto mt-3 pb-4 with-shadow'>
                <div className='mx-auto mt-2 p-3'>
                    <div>
                        <h3 className='text-center mb-4 mt-2 mb-4'>{t(`Registrierung bei LevelUp`)}</h3>
                        <p className='mb-0'>{t(`Bitte bestätige mit deiner Matrikelnummer, dass du LevellUp nutzen willst! `)}</p>
                        <p>{t(`Nur dadurch können deine Prüfungsdaten dem aktuellen Login zugeordnet werden.`)}</p>
                        <h6 className='font-weight-bold'>{t(`Datenschutzhinweise`)}:</h6>
                        <p>{t(`Deine Daten werden natürlich vertrauensvoll behandelt und sind nicht für Dritte einsehbar.Die Matrikelnummer wird nach Eingabe nicht gespeichert, sondern nur dazu verwendet, einmalig die anonymisierten Prüfungsdaten zuordbar zu machen.`)}</p>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-10 col-xl-8 mx-auto'>
                            <Infos name='Vorname' title='LevelUp' />
                            <Infos name='Nachname' title='Charite' />
                            <Infos name='Email' title='LevelUp@charite' />
                            <Infos name='Matrikelnummer' input={true} />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <input type="checkbox" onChange={props.toggleExtended}/>
                        <span className='ml-3 '>{t(`Ich stimme den`)}
                        <Link to="/user/dataProtection">
                           <span className='font-weight-bold ml-1 text-primary' style={{ cursor: 'pointer' }}>{t(`Datenschutzhinweise `)}</span>
                        </Link>
                        {t(`zu`)}</span>
                    </div>
                    <Link to="/dashboard">
                      <button className='btn btn-secondary mt-4' disabled={!props.extended} >{t(`Absenden`)}</button>
                    </Link>
                </div>
            </div>
    </div>
)
export default withTranslation()(makeExtendable(registration))