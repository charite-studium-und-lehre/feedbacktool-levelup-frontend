import React from 'react'

const externAsk =({t, ...props})=>(
    <div className="p-2">
    <div className='row'>
        <div className=" col-xs-4 col-sm-7  col-md-5 col-lg-6 col-xl-4 mt-2">
            <div className=" text-left">Wir senden einen Link an diese Email-Adresse, über den eine Fremdeinschätzung abgegeben werden kann.</div>
            <div className="flex-grow-1">
                <textarea className="form-control form-control-sm mt-2" style={{minHeight:'7rem'}} placeholder="Liebe/r Frau/Herr *Name Dozent/in*Hiermit lade ich Sie herzlich ein, die ärztlichen Tätigkeiten einzuschätzen, die ich in Ihrem Kurs *Name des Kurses* durchgeführt habe! Betreffende ärztliche Tätigkeit(en): *Name der Tätigkeit(en)* ${}Vielen Dank*Vorname, Nachname*"></textarea>
            </div>
            <div className="flex-grow-1">
                <input className="form-control form-control-sm mt-2" placeholder="Email"></input>
            </div>
            <div>
                <button className="btn btn-sm btn-secondary mt-2" onClick={props.onClick}>senden</button>
            </div>
        </div>
    </div>
</div>
)
export default externAsk