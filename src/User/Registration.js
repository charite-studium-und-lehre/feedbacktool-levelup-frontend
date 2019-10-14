import React from 'react'
import { withTranslation } from 'react-i18next'
import makeExtendable from '../Core/makeExtendable'
import DataProtection from './DataProtection'

const Data = ['Vorname', 'Nachname', 'Email', 'Immatrikuliertnummer']
const DataSever = ['LevenUp', 'Charite', 'LevenUp@charite.de']

const registration =({t,...props})=> (
    <div>
        { props.extended ? <DataProtection onClick={props.toggleExtended}/>
          :
        <div className='mx-auto mt-2 p-3'>
                <h3 className='text-center mb-4 mt-2 mb-4'>{t(`Registrierung bei LevelUp`)}</h3>
                <p className='mb-0'>{t(`Bitte bestätige mit deiner Matrikelnummer, dass du LevellUp nutzen willst! `)}</p>
                <p>{t(`Nur dadurch können deine Prüfungsdaten dem aktuellen Login zugeordnet werden.`)}</p>
                <h6 className='font-weight-bold'>{t(`Datenschutzhinweise`)}:</h6>
                <p>{t(`Deine Daten werden natürlich vertrauensvoll behandelt und sind nicht für Dritte einsehbar.
                        Die Matrikelnummer wird nach Eingabe nicht gespeichert, sondern nur dazu verwendet, einmalig die anonymisierten Prüfungsdaten zuordbar zu machen.`)}</p>
                <div className='row'>
                    <div className='col-6 font-weight-bold'>
                        {Data.map((e, i) =>  <div className={`py-2 ${i === 3 ? 'mt-3':''}`}>{t(e)}:</div>)}
                    </div>
                    <div className='col-6 '>
                         {DataSever.map(e =>  <div className='py-2'>{t(e)}</div>)}
                        <div className='py-2'>
                            <input className="form-control mt-2" placeholder="Immatrikuliertnummer"></input>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <input type="checkbox" />
                    <span className='ml-3'>{t(`Ich stimme den`)}</span>
                    <span className='font-weight-bold ml-1 text-primary' style={{cursor:'pointer'}} onClick={ props.toggleExtended}>{t(`Datenschutz`)}</span>
                </div>
                <button className='btn btn-secondary mt-4' onClick={props.onClick}>{t(`Absenden`)}</button>
        </div>}
    </div>
)
export default withTranslation()(makeExtendable (registration))