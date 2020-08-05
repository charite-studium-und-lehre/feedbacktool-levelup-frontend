import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Spinner } from '../../../Core/needsData'
import { selectors, actions } from './Requests/Store'

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

const Request = ({ makeRequest, sending, sent, resetSent, error }) => {
    const [formdata, setFormdata] = useState({})
    const handleChange = field => e => setFormdata({...formdata, [field]: e.target.value})
    const fields = [
        {
            name: 'Name Dozent*in',
            placeholder: 'Name',
            onChange: handleChange('fremdBewerterName'),
            isValid: formdata.fremdBewerterName && formdata.fremdBewerterName.length >= 5 && formdata.fremdBewerterName.length <= 50,
            text: 'Bitte gib einen Namen mit mind. 5 Buchstaben ein.'
        },
        {
            name: 'Email Dozent*in',
            placeholder: 'Email',
            onChange: handleChange('fremdBewerterEmail'),
            isValid: formdata.fremdBewerterEmail && /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(formdata.fremdBewerterEmail),
            text: 'Bitte gib eine korrekte Email-Adresse ein.'
        },
        {
            name: 'Tätigkeiten/Kurs (opt)',
            placeholder: 'Kursname',
            onChange: handleChange('angefragteTaetigkeiten'),
            isValid: !formdata.angefragteTaetigkeiten || (formdata.angefragteTaetigkeiten.length >= 5 && formdata.angefragteTaetigkeiten.length <= 2000),
            text: 'Bitte gib eine Tätigkeit mit mind. 5 Buchstaben ein.'
        },
        {
            name: 'Kommentar (opt)',
            placeholder: 'Kommentar',
            textarea: true,
            onChange: handleChange('kommentar'),
            isValid: !formdata.kommentar || (formdata.kommentar.length >= 5 && formdata.kommentar.length <= 2000),
            text: 'Bitte gib einen Kommentar mit mind. 5 Buchstaben ein.'
        },
    ]
    const isValid = fields.map( f => f.isValid ).reduce((acc, val) => acc && val)
    return !sent ?
        <div className="mt-2">
            <div className='mb-3'>Es wird ein Link an diese Email-Adresse gesendet, über den eine Fremdeinschätzung abgegeben werden kann.</div>
            {fields.map( f => <Infos key={f.name} {...f} /> )}
            {error && <div className="pb-0 p-2 text-center text-danger">
                Das hat leider nicht funktioniert...
            </div>}
            <div className='mt-2 text-center'>
                <button disabled={!isValid || sending} className="btn btn-sm btn-secondary mt-3 " style={{width:'7rem'}} onClick={() => makeRequest(formdata)}>
                    {sending ? <Spinner className="text-white" /> : 'absenden'}
                </button>
            </div>
        </div> :
        <div className="text-center">
            <p>Die Anfrage wurde abgesendet. Du hörst von uns, wenn die Fremdbewertung abgegeben wurde.</p>
            <p className="color-navigation cursor-pointer" onClick={resetSent}>Weitere Fremdbewertung einfordern'</p>
        </div>
}

export default [ connect(selectors.getStatus, actions)].reduceRight((fx, f) => f(fx), Request)