import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'

const Legend = props => 
    <div>
        <div className="d-flex flex-wrap">
            {props.title && <h4>{props.title}</h4>}
            <div className="ml-auto">
                <FontAwesomeIcon 
                    onClick={() => props.toggleExtended()}
                    className={props.extended ? 'text-primary' : 'text-muted'}
                    style={{fontSize: '1.3rem'}}
                    icon={faInfoCircle} />
            </div>
        </div>
        <div ref={props.extendableElement} className="animated fast row" style={{ overflow: 'hidden' }}>
            <div className="col my-2" style={{fontSize: '.8rem'}}>
                {props.children}
            </div>
        </div>
    </div>
        

export default makeExtendable(Legend)