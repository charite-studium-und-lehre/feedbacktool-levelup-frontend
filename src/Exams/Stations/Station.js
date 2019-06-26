import React from 'react'
import StationDetails from './StationDetails'
import SimpleBar from '../../Charting/SimpleBar'
import makeExtendable from '../../Core/makeExtendable'
import SlideDown from 'react-slidedown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Station = props => {
    return <div onClick={() => props.toggleExtended()}>
        <div className="animated mb-2">
            <div style={{fontSize: '.9rem', marginBottom: '-.3rem', color: 'rgba(0,0,0,.75)'}}>{props.data.name}</div>
            <div style={{position: 'relative', minHeight: '1.5rem'}}>
                <div style={{opacity: props.extended ? 0 : 1}} className="animated w-100 h-100 position-absolute">
                    <SimpleBar height='100%' value={props.data.result} mean={props.data.mean} color={props.color}>
                        {props.data.result} %
                        <span className="ml-2" style={{float:'left' }}>
                          <FontAwesomeIcon style={{fontSize: '.8rem'}} icon={faPlus}/>
                        </span>
                       
                    </SimpleBar>
                </div>
                <div style={{opacity: props.extended ? 1 : 0}} className="animated">
                    <SlideDown >
                        {props.extended && <StationDetails 
                            style={{opacity: props.extended ? 1 : 0}}
                            data={props.data.details} />
                        }
                    </SlideDown>
                </div>
            </div>
        </div>
        
    </div>
}

export default makeExtendable(Station)