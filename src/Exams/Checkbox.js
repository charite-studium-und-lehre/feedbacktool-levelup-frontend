import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import COLORS from '../colors'

const Checkbox = ({ checked, lineColor, textColor, children, onUncheck, onCheck }) => {
    const toggle = () => {
        if (checked)
            onUncheck()
        else
            onCheck()
    }

    return (
        <span onClick={toggle}>
                <label className="p-2 m-0" style={{color: COLORS.background.base}}>
                    <span className="mr-2 pl-1"
                          style={{
                              backgroundColor: textColor,
                              color: checked
                                  ? lineColor
                                  : COLORS.background.base
                          }}>
                         <FontAwesomeIcon className="mr-1" icon={faCheck}/>
                    </span>
                    {children}
                </label>
            </span>
    )
}

export default Checkbox