import React from 'react'
import SlideDown from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListOl } from '@fortawesome/free-solid-svg-icons'
import List from './List'
import Score from './Score'
import makeExtendable from '../Core/makeExtendable'
import { withTranslation } from 'react-i18next'

export const Button = (props) =>
    <div className={` ${props.className || ''}`}>
        <button className={`btn btn-sm mr-2 mb-2 text-wrap ${props.active ? 'btn-success' : 'btn-secondary'}`} onClick={props.onClick}>
            <span className="d-lg-inline mr-2">{props.children}</span>
            <FontAwesomeIcon icon={props.icon} />
        </button>
    </div>

const Toolbar = ({ t, ...props }) => {
    return (
        <div className="pt-2 pb-2  card" style={{ top: '1rem' }}>
            <div className='row'>
                <div className="col-12 col-sm-4 pb-xs-5 ">
                    <div className="ml-2">
                        <Button className="d-lg-none" icon={faListOl} active={props.extended} onClick={props.toggleExtended} >{t(`Level der Eigenständigkeit`)}</Button>
                    </div>
                    <SlideDown className="animated fast">
                        {props.extended &&
                            <div className="text-left bg-white px-2">
                                <List />
                            </div>}
                    </SlideDown>
                </div>
                <div className="col-12  col-sm-12 mt-sm-3 pr-5" >
                    <Score headings={true} entry={props.root} average={true} width={'1rem'} height={'1rem'} borderRadius={'50%'} />
                </div>
            </div>
        </div>
    )
}
export default withTranslation()(makeExtendable(Toolbar))