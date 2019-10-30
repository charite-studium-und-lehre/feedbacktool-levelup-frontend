import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import COLORS from '../colors'

class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.checked = props.checked
        this.label = props.label
        this.lineColor = props.lineColor
        this.toggle = () => {
            if (this.checked)
                props.onUncheck()
            else
                props.onCheck()
            this.checked = !this.checked
        }
    }

    render() {
        return (
            <span onClick={() => this.toggle()}>
                <label className="p-2 m-0" style={{color: COLORS.background.base}}  >
                    <span className="mr-2 pl-1"
                        style={{backgroundColor: COLORS.background.base,
                            color: this.checked ? this.lineColor : COLORS.background.base}}>
                         <FontAwesomeIcon className="mr-1" icon={faCheck} />
                    </span>
                    {this.label}
                </label>
            </span>
        )
    }
}

export default Checkbox;