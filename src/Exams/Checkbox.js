import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import COLORS from '../colors'

const Checkbox = (props) => {
    const [checked, setChecked] = useState(0)

    const toggle = () => {
        if (checked)
            props.onUncheck()
        else
            props.onCheck()
        setChecked(!checked)
    }

    return (
        <span onClick={toggle}>
                <label className="p-2 m-0" style={{color: COLORS.background.base}}>
                    <span className="mr-2 pl-1"
                          style={{
                              backgroundColor: props.textColor,
                              color: props.initialyChecked
                                  ? props.lineColor
                                  : COLORS.background.base
                          }}>
                         <FontAwesomeIcon className="mr-1" icon={faCheck}/>
                    </span>
                    {props.label}
                </label>
            </span>
    );
}

export default Checkbox;