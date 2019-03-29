import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import { SlideDown } from 'react-slidedown'

const Legend = props => 
    <div>
        <div className="d-flex">
            <div>{props.title && <h4>{props.title}</h4>}</div>
            <div className="ml-auto">
                <FontAwesomeIcon 
                    onClick={() => props.toggleExtended()}
                    className={props.extended ? 'text-primary' : 'text-muted'}
                    style={{fontSize: '1.3rem'}}
                    icon={faInfoCircle} />
            </div>
        </div>
        <div className="animated fast row" style={{ overflow: 'hidden' }}>
            <SlideDown className="animated fast">
            {props.extended &&
                <div className="col my-2" style={{fontSize: '.8rem'}}>
                    {props.children}
                </div>
            }
            </SlideDown>
        </div>
    </div>

export default makeExtendable(Legend, true)