import React, { useState } from 'react'
import SlideDown from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faListOl } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import List from './List'
import Score from './Score'
import ExternAsk from './ExternAsk'
import ExternAssessingn from './ExternAssessing'
import { withTranslation } from 'react-i18next'

const Button = (props) =>
    <div className={` ${props.className || ''}`}>
        <button className={`btn btn-sm mr-2 mb-2 ${props.active ? 'btn-success' : 'btn-secondary'}`} onClick={props.onClick}>
            <span className="d-lg-inline mr-2">{props.children}</span>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    </div>

const Toolbar = ({ t, ...props }) => {
    const [list, setList] = useState(false)
    const [extended1, setExtended] = useState(false)
    return (
        <div className="pt-2 pb-2  card" style={{ top: '1rem' }}>
            <div>
                <div className="row pb-xs-5 pl-1 ">
                    <div className="col-xs-12 col-sm-6  col-md-4 ">
                        <Button className="d-lg-none" icon={faListOl} active={list} onClick={() => setList(!list)} >{t(`Level der Eigenständigkeit`)}</Button>
                        <Button icon={faEnvelopeOpenText} active={props.extended} onClick={props.toggleExtended}>{t(`Erhaltne Fremdeinschätzung `)}</Button>
                        <Button icon={faEnvelopeOpenText} active={extended1} onClick={()=> setExtended(!extended1)}>{t(`Fremdeinschätzung einfordern`)}</Button>
                    </div>
                <SlideDown className="animated fast">
                    {list &&
                        <div className="text-left bg-white px-2">
                            <List />
                        </div>}
                </SlideDown>
                    <div className="col-sm-12 col-md-8 mt-sm-3" >
                        <Score headings={true} entry={props.root} average={true} width={'1rem'} height={'1rem'} borderRadius={'50%'} />
                    </div>
                </div>
                <SlideDown className="animated fast">
                    {props.extended &&
                        <div className='row p-2'>
                            <ExternAssessingn />
                        </div>}
                </SlideDown>
                <SlideDown className="animated fast">
                    {extended1 && <ExternAsk onClick={props.toggleExtended}/>}
                </SlideDown>
            </div>
        </div>
    )
}

export default withTranslation()(makeExtendable(Toolbar))