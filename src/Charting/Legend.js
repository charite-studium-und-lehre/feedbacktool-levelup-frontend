import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import { SlideDown } from 'react-slidedown'
import { mobileWidth } from '../Charting/Utils'

const Legend = props => {
    const toggle = () => {
        props.storageId && window.localStorage.setItem(props.storageId, props.extended ? '' : 1)
        props.toggleExtended()
    }
    return <div>
        <div className="d-flex">
            <div>{props.title && <h5>{props.title}</h5>}</div>
            <div className="ml-auto">
            <div  onClick={e => {e.preventDefault(); toggle()}} id='legende-> Mehr Infos Icon' style={{width:'1.4rem', height:'1.4rem' , cursor:'pointer', position:'absolute', zIndex:'9'}}></div>
                {props.children && <FontAwesomeIcon
                    className={props.extended ? 'text-muted' : 'color-navigation'}
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
}
const defaultOpen = props => {
    let item = window.localStorage.getItem(props.storageId)
    item = (item === undefined || item === null) ? true : item
    return (
        item && window.innerWidth > mobileWidth
    )
}
export default makeExtendable(defaultOpen)(Legend)
