import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCross } from '@fortawesome/free-solid-svg-icons'

class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = { checked: true }
    }

    toggle() {
        this.setState({checked: !this.state.checked})
    }

    render() {
        return (
            <div onClick={() => this.toggle()}>
                <FontAwesomeIcon  icon={this.state.checked ? faCheck : faCross} />
                {this.props.label}
            </div>
        )
    }
}

export default Checkbox;