import React, { useState } from 'react'
import SlideDown from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faListOl } from '@fortawesome/free-solid-svg-icons'
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
    const [extended, setExtended] = useState({
        extended1:false,
        extended2:false,
        extended3:false

    })
    return (
        <div className="pt-2 pb-2  card" style={{ top: '1rem' }}>
            <div className='row'>
                <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 pb-xs-5 ">
                    <div className="ml-2">
                        <Button className="d-lg-none" icon={faListOl} active={extended.extended1} onClick={()=> setExtended({extended1: !extended.extended1, extended2:false,  extended3:false,})} >{t(`Level der Eigenständigkeit`)}</Button>
                        <Button icon={faEnvelopeOpenText} active={extended.extended2} onClick={()=> setExtended({extended2: !extended.extended2, extended1:false,  extended3:false,})}>{t(`Erhaltene Fremdeinschätzung `)}</Button>
                        <Button icon={faEnvelopeOpenText} active={extended.extended3} onClick={()=> setExtended({ extended3: !extended.extended3,  extended1:false,  extended2:false})}>{t(`Fremdeinschätzung einfordern`)}</Button>
                    </div>
                <SlideDown className="animated fast">
                    {extended.extended1 &&
                        <div className="text-left bg-white px-2">
                            <List />
                        </div>}
                </SlideDown>
                <SlideDown className="animated fast">
                    { extended.extended2 &&
                        <div className='row p-2'>
                            <ExternAssessingn />
                        </div>}
                </SlideDown>
                < SlideDown className="animated fast">
                    {extended.extended3 && <ExternAsk onClick={props.toggleExtended}/>}
                </SlideDown>
                </div>
                    <div className="col-sm-12  col-sm-6 col-md-7 col-lg-7 mt-sm-3 pr-5" >
                        <Score headings={true} entry={props.root} average={true} width={'1rem'} height={'1rem'} borderRadius={'50%'} />
                    </div>
            </div>
        </div>
    )
}

export default withTranslation()(Toolbar)