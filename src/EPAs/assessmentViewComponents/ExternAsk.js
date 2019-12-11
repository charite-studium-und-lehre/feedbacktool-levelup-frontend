import React from 'react'
import { withTranslation } from 'react-i18next'
const Infos =props => (
        <div className="flex-grow-1">
            <div className='row'>
                <div className='col-5 mt-3 '>
                    <span className='font-weight-bold'>{props.name}:</span>
                </div>
                <div className='col-7' >
                {props.textarea ? 
                    <textarea className="form-control form-control-sm mt-2" style={{minHeight:'4rem'}} placeholder="Kommentar"></textarea> 
                 :  
                    <input className="form-control mt-2" placeholder={props.placeholder}></input>
                }
                </div>
            </div>
        </div>
)
const externAsk = ({ t, ...props }) => (
        <div className="p-2 mt-">
            <div className='row'>
                <div className="col-12 mt-2">
                    <div className='mb-3'>{t(`Es wird ein Link an diese Email-Adresse gesendet, über den eine Fremdeinschätzung abgegeben werden kann.`)}</div>
                    <Infos name={t(`Name Dozent/in`)} placeholder='Name'/>
                    <Infos name={t(`Email Dozent/in`)} placeholder='Email'/>
                    <Infos name={t(`Tätigkeiten/Kurs (opt)`)} placeholder='Kursname'/>
                    <Infos name={t(`Kommentar (opt)`)} placeholder='Kommentar' textarea={true}/>
                    <div className=' mt-3 pr-1 text-center'>
                        <button disabled className="btn btn-sm btn-secondary mt-3 " style={{width:'7rem'}} onClick={props.onClick}>Senden</button>
                    </div>
                    <p className="text-danger text-center">(Wir werden dieses Feature in den nächsten Tagen freischalten.)</p>
                </div>
            </div>
        </div>
)
export default withTranslation()(externAsk)