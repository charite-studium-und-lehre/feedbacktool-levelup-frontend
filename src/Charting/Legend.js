import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import { SlideDown } from 'react-slidedown'
import 'video-react/dist/video-react.css'

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
        {props.children && <div className="animated fast row container-fluid" >
            <SlideDown className="animated fast flex-fill">
            {props.extended &&
                <div className="col my-2">
                    {props.children}
                </div>
            }
            </SlideDown>
        </div>}
    </div>

export default makeExtendable(Legend, true)