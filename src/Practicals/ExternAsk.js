import React from 'react'

const externAsk =({t, ...props})=>(
    <div className="p-2">
    <div className='row'>
        <div className=" col-xs-4 col-sm-7  col-md-5 col-lg-6 col-xl-4 mt-2">
            <div className="text-secondary text-left" style={{ fontSize: '.7rem' }}>Wir senden einen Link an diese Email-Adresse, über den eine Fremdeinschätzung abgegeben werden kann</div>
            <div className="flex-grow-1">
                <textarea className="form-control form-control-sm mt-2" placeholder="Kommentar"></textarea>
            </div>
            <div className="flex-grow-1">
                <input className="form-control form-control-sm mt-1" placeholder="email"></input>
            </div>
            <div className="">
                <button className="btn btn-sm btn-success mt-2" onClick={props.onClick}>senden</button>
            </div>
        </div>
    </div>
</div>
)
export default externAsk