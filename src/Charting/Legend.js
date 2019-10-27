import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import { SlideDown } from 'react-slidedown'

const Legend = props => 
    <div>
        <div className="d-flex">
            <div>{props.title && <h5>{props.title}</h5>}</div>
            <div className="ml-auto">
                {props.children && <FontAwesomeIcon 
                    onClick={e => {e.preventDefault(); props.toggleExtended()}}
                    className={props.extended ? 'text-primary' : 'text-muted'}
                    style={{fontSize: '1.3rem'}}
                    icon={faInfoCircle} />}
            </div>
        </div>
        <SlideDown className="animated fast flex-fill">
        {props.children && props.extended && <div className="animated fast row container-fluid" >
            <div className="col my-2">
                {props.children}
            </div>
        </div>}
        </SlideDown>
    </div>

export default makeExtendable(Legend, true)