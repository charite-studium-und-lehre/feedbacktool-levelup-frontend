import React from 'react'
import { withTranslation } from 'react-i18next'
import makeExtendable from './Core/makeExtendable'
import DatenProtection from './DatenProtection'
import {NavLink } from 'react-router-dom'

const registration =({t,...props})=> (
    <div>
  {  props.extended ? <DatenProtection onClick={props.toggleExtended}/>
  :
  <div className='mx-auto mt-5 p-3'>
        <h4 className='text-center mb-4 mt-2'>{t(`Registrierung bei LevelUp`)}</h4>
        <p className='mb-0'>{t(`Bitte bestätige mit deiner Matrikelnummer, dass du LevellUp nutzen willst! `)}</p>
        <p>{t(`Nur dadurch können deine Prüfungsdaten dem aktuellen Login zugeordnet werden.`)}</p>
        <h6 className='font-weight-bold'>{t(`Datenschutzhinweise`)}:</h6>
        <p>{t(`Deine Daten werden natürlich vertrauensvoll behandelt und sind nicht für Dritte einsehbar.
                Die Matrikelnummer wird nach Eingabe nicht gespeichert, sondern nur dazu verwendet, einmalig die anonymisierten Prüfungsdaten zuordbar zu machen.`)}</p>
        <div className='row'>
            <div className='col-6 font-weight-bold'>
                <div className='py-2'>{t(`Vorname`)}:</div>
                <div className='py-2'>{t(`Nachname`)}:</div>
                <div className='py-2'>{t(`Email`)}:</div>
                <div className='py-2 mt-2'>{t(`Immatrikuliertnummer`)}:</div>
            </div>
            <div className='col-6 '>
                <div className='py-2'>{t(`LevenUp`)}</div>
                <div className='py-2'>{t(`Charite`)}</div>
                <div className='py-2'>{t(`LevenUp@charite.de`)}</div>
                <div className='py-2'>
                    <input className="form-control mt-2" placeholder="Immatrikuliertnummer"></input>
                </div>
            </div>
        </div>
        <div className='mt-4'>
            <input type="checkbox" />
            <span className='ml-3'>{t(`Ich stimme den`)}</span><span onClick={ props.toggleExtended}>{t(`Datenschutz`)}</span>
        </div>
        <button className='btn btn-secondary mt-4' onClick={props.onClick}>{t(`Absenden`)}</button>
    </div>}
      </div>
)
export default withTranslation()(makeExtendable (registration))