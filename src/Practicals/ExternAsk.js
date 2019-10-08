import React from 'react'

const externAsk = ({ t, ...props }) => (
    <div>
        <div className="p-2">
            <div className='row'>
                <div className=" col-12 col-md-12 col-xl-10 mt-2">
                    <div className=" text-left">Wir senden einen Link an diese Email-Adresse, über den eine Fremdeinschätzung abgegeben werden kann.</div>
                    <div className="flex-grow-1">
                        <textarea className="form-control form-control-sm mt-2" style={{ minHeight: '8.5rem' }} placeholder="Liebe/r Frau/Herr *Name Dozent/in*Hiermit lade ich Sie herzlich ein, die ärztlichen Tätigkeiten einzuschätzen, die ich in Ihrem Kurs *Name des Kurses* durchgeführt habe! Betreffende ärztliche Tätigkeit(en): *Name der Tätigkeit(en)* ${}Vielen Dank*Vorname, Nachname*"></textarea>
                    </div>
                    <div className="flex-grow-1">
                        <input className="form-control form-control-sm mt-2" placeholder="Email"></input>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-secondary mt-2 mb-5" onClick={props.onClick}>senden</button>
                    </div>
                </div>
            </div>
        =======================================</div>
        <div className="p-2 mt-5">
            <div className='row'>
                <div className=" col-12 col-md-12 col-xl-10 mt-2">
                    <div className=" text-left">Wir senden einen Link an diese Email-Adresse, über den eine Fremdeinschätzung abgegeben werden kann.</div>
                    <div className="flex-grow-1">
                        <div className='row'>
                            <div className='col-4 mt-3 '>
                                <span className='font-weight-bold'>Dozentname:</span>
                            </div>
                            <div className='col-8' >
                                <input className="form-control mt-2" placeholder="Name"></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <div className='row'>
                            <div className='col-4 mt-3 '>
                                <span className='font-weight-bold'>Tätigkeit (opt):</span>
                            </div>
                            <div className='col-8' >
                                <input className="form-control mt-2" placeholder="Zu bewertende Tätigkeit"></input>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <div className='row'>
                            <div className='col-4 mt-3 pr-0 '>
                                <span className='font-weight-bold'>Kommentar (opt):</span>
                            </div>
                            <div className='col-8' >
                                <textarea className="form-control form-control-sm mt-2" placeholder="Kommentar"></textarea>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                        <div className='row'>
                            <div className='col-4 mt-3 pr-0 '>
                                <span className='font-weight-bold'>Email:</span>
                            </div>
                            <div className='col-8' >
                                <input className="form-control mt-2" placeholder="Email"></input>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='pr-1'>
                        <button className="btn btn-sm btn-secondary form-control mt-3 " onClick={props.onClick}>senden</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default externAsk