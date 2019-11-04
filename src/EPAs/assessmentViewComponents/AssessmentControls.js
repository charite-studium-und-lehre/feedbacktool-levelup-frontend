import React, {useState} from 'react'
import SlideDown from 'react-slidedown'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMailBulk, faEnvelope} from '@fortawesome/free-solid-svg-icons'

import ExternAsk from './ExternAsk'
import ExternAssessing from './ExternAssessing'

export default (props) => {

    const Button = (props) =>
        <div className={` ${props.className || ''}`}>
            <button className='btn btn-sm mr-2 mb-2 text-wrap color-button-color' onClick={props.onClick}>
                <span className="d-lg-inline mr-2">{props.children}</span>
                <FontAwesomeIcon icon={props.icon} />
            </button>
        </div>

    const [extended, setExtended] = useState(0)
    const toggle = i => setExtended(extended !== i && i)

    return <div className="container-fluid p-4">
        <div className="row">
            <div className="col-sm-6">
                <Button icon={faMailBulk} active={extended === 1}
                        onClick={() => {toggle(1); props.resetFilter();}}>Erhaltene Fremdbewertungen</Button>
            </div>
            <div className="col-sm-6 text-sm-right">
                <Button icon={faEnvelope} active={extended === 2}
                        onClick={() => toggle(2)}>Fremdbewertung einfordern</Button>
            </div>
        </div>
        <SlideDown className="animated fast">
            {extended === 1 && <ExternAssessing/>}
            {extended === 2 && <ExternAsk />}
        </SlideDown>
    </div>
}