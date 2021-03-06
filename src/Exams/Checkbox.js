import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

const Checkbox = ({ checked, lineColor, backgroundColor, children, onUncheck, onCheck, ...props }) =>
    <span onClick={checked ? onUncheck : onCheck}>
        <label className="p-2 m-0">
            <span className="mr-2 pl-1" id={props.id}
                    style={{
                        backgroundColor: backgroundColor,
                        color: checked
                            ? lineColor
                            : backgroundColor
                    }}>
                    <FontAwesomeIcon className="mr-1" id={props.id} icon={faCheck}/>
            </span>
            {children}
        </label>
    </span>

export default Checkbox
