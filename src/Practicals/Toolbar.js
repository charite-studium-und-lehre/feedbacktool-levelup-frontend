import React, { useState } from 'react'
import SlideDown from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExport, faEnvelopeOpenText, faListOl } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import List from './List'
import Score from './Score'
import ExternAssessingn from './ExternAssessing'
import { withTranslation } from 'react-i18next'

const Button = (props) =>
    <div className={`d-inline-block float-left ${props.className || ''}`}>
        <button className={`btn btn-sm mr-2 mb-2 ${props.active ? 'btn-success' : 'btn-secondary'}`} onClick={props.onClick}>
            <span className="d-none d-lg-inline mr-2">{props.children}</span>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    </div>

const Toolbar = ({ t, ...props }) => {
    const [list, setList] = useState(false)

    return (
        <div className="pt-2 pb-2  card" style={{ top: '1rem' }}>
            <div>
                <div className="row pb-xs-5 pl-1 ">
                    <div className="col-xs-12 col-sm-6  col-md-4 ">
                        <Button className="d-lg-none" icon={faListOl} active={list} onClick={() => setList(!list)} />
                        <Button icon={faFileExport}>{t(`Export`)}</Button>
                        <Button icon={faEnvelopeOpenText} active={props.extended} onClick={props.toggleExtended}>{t(`Fremdeinschätzung`)}</Button>
                    </div>
                    <div className="col-sm-12 col-md-8 mt-sm-3" >
                        <Score headings={true} entry={props.root} average={true} width={'1rem'} height={'1rem'} borderRadius={'50%'} />
                    </div>
                </div>
                <SlideDown className="animated fast">
                    {list &&
                        <div className="text-left bg-white px-2">
                            <List />
                        </div>}
                </SlideDown>
                <SlideDown className="animated fast">
                    { props.extended &&
                        <div className="p-2">
                            <div className='row'>
                                <ExternAssessingn />
                            </div>
                            <div className='row'>
                                <div className=" col-xs-5 col-sm-8  col-md-6 col-lg-6 col-xl-4 mt-2">
                                    <h6> Fremdeinschätzung einfordern</h6>
                                    <div className="text-secondary text-left" style={{ fontSize: '.7rem' }}>{t(`Wir senden einen Link an diese Email-Adresse, über den eine Fremdeinschätzung abgegeben werden kann.`)}</div>
                                    <div className="flex-grow-1">
                                        <textarea className="form-control form-control-sm mt-2" placeholder="Kommentar"></textarea>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input className="form-control form-control-sm mt-1" placeholder="email"></input>
                                    </div>
                                    <div className="">
                                        <button className="btn btn-sm btn-success mt-2" onClick={props.toggleExtended}>senden</button>
                                    </div>
                                </div>
                            </div>

                        </div>}
                </SlideDown>
            </div>
        </div>
    )
}

export default withTranslation()(makeExtendable(Toolbar))