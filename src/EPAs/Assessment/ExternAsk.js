import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { actions } from './RequestsStore'

const Infos = props => (
        <div className="flex-grow-1">
            <div className='row'>
                <div className='col-sm-5 mt-3 '>
                    <span className='font-weight-bold'>{props.name}:</span>
                </div>
                <div className='col-sm-7' >
                    {props.textarea ? 
                        <textarea className="form-control form-control-sm mt-2" style={{minHeight:'4rem'}} placeholder="Kommentar" onChange={props.onChange}></textarea> 
                    :  
                        <input className="form-control mt-2" placeholder={props.placeholder} onChange={props.onChange} />
                    }
                    {!props.isValid && 
                        <div style={{fontSize: '.8em'}} className="font-italic text-danger my-1">
                            {props.text}
                        </div>
                    }
                </div>
            </div>
        </div>
)

const ExternAsk = ({ t, makeRequest }) => {
    const [formdata, setFormdata] = useState({})
    const handleChange = field => e => setFormdata({...formdata, [field]: e.target.value})
    const fields = [
        {
            name: t(`Name Dozent*in`),
            placeholder: t('Name'),
            onChange: handleChange('fremdBewerterName'),
            isValid: formdata.fremdBewerterName && formdata.fremdBewerterName.length >= 5 && formdata.fremdBewerterName.length <= 50,
            text: t('Bitte gib einen Namen mit mind. 5 Buchstaben ein.')
        },
        {
            name: t(`Email Dozent*in`),
            placeholder: t('Email'),
            onChange: handleChange('fremdBewerterEmail'),
            isValid: formdata.fremdBewerterEmail && /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(formdata.fremdBewerterEmail),
            text: t('Bitte gib eine korrekte Email-Adresse ein.')
        },
        {
            name: t(`Tätigkeiten/Kurs (opt)`),
            placeholder: t('Kursname'),
            onChange: handleChange('angefragteTaetigkeiten'),
            isValid: !formdata.angefragteTaetigkeiten || (formdata.angefragteTaetigkeiten.length >= 5 && formdata.angefragteTaetigkeiten.length <= 2000),
            text: t('Bitte gib eine Tätigkeit mit mind. 5 Buchstaben ein.')
        },
        {
            name: t(`Kommentar (opt)`),
            placeholder: t('Kommentar'),
            textarea: true,
            onChange: handleChange('kommentar'),
            isValid: !formdata.kommentar || (formdata.kommentar.length >= 5 && formdata.kommentar.length <= 2000),
            text: t('Bitte gib einen Kommentar mit mind. 5 Buchstaben ein.')
        },
    ]
    const isValid = fields.map( f => f.isValid ).reduce((acc, val) => acc && val)
    return <div className="mt-2">
        <div className='mb-3'>{t(`Es wird ein Link an diese Email-Adresse gesendet, über den eine Fremdeinschätzung abgegeben werden kann.`)}</div>
        {fields.map( f => <Infos key={f.name} {...f} /> )}
        <div className='mt-3 text-center'>
            <button disabled={!isValid} className="btn btn-sm btn-secondary mt-3 " style={{width:'7rem'}} onClick={() => makeRequest(formdata)}>Senden</button>
        </div>
    </div>
}

export default [withTranslation(), connect(null, actions)].reduceRight((fx, f) => f(fx), ExternAsk)