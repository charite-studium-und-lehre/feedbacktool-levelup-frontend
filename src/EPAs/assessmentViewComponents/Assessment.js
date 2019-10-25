import React, {useState} from 'react'
import {withTranslation} from 'react-i18next'
import SlideDown from 'react-slidedown'
import {faMailBulk, faEnvelope} from '@fortawesome/free-solid-svg-icons'

import ExternAsk from './ExternAsk'
import ExternAssessing from './ExternAssessing'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default withTranslation()(({t, ...props}) => {

    const Button = (props) =>
        <div className={` ${props.className || ''}`}>
            <button className={`btn btn-sm mr-2 mb-2 text-wrap ${props.active ? 'btn-success' : 'btn-secondary'}`} onClick={props.onClick}>
                <span className="d-lg-inline mr-2">{props.children}</span>
                <FontAwesomeIcon icon={props.icon} />
            </button>
        </div>

    const [extended, setExtended] = useState(0)
    const toggle = i => setExtended(extended !== i && i)

    return <div className="container-fluid p-4 ">
        <div className="row ">
            <div className="col">
                <Button icon={faMailBulk} active={extended === 1}
                        onClick={() => toggle(1)}>{t(`Erhaltene Fremdbewertungen`)}</Button>
            </div>
            <div className="col">
                <Button className="float-md-right" icon={faEnvelope} active={extended === 2}
                        onClick={() => toggle(2)}>{t(`Fremdbewertung einfordern`)}</Button>
            </div>
        </div>
        <SlideDown className="animated fast p-2">
            {extended === 1 && <ExternAssessing/>}
        </SlideDown>
        < SlideDown className="animated fast p-2">
            {extended === 2 && <ExternAsk onClick={props.toggleExtended}/>}
        </SlideDown>
    </div>
})

