import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import { SlideDown } from 'react-slidedown'
import 'video-react/dist/video-react.css';

const Legend = props => 
    <div>
        <div className="d-flex">
            {props.title && <div><h4>{props.title}</h4></div>}
            {props.button}
            <div className="ml-auto">
                <FontAwesomeIcon 
                    onClick={() => props.toggleExtended()}
                    className={props.extended ? 'text-primary' : 'text-muted'}
                    style={{fontSize: '1.3rem'}}
                    icon={faInfoCircle} />
            </div>
        </div>
        {props.extended && description(props)}
    </div>

export default makeExtendable(Legend, true)

const description = (props) =>
    <div className="animated fast row" style={{ overflow: 'hidden' }}>
        <SlideDown className="animated fast">
            <div className="col my-2" style={{fontSize: '.9rem'}}>
                {props.children}
            </div>
        </SlideDown>
    </div>