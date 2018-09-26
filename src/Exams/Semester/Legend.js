import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class Legend extends Component {
    constructor({ props }) {
        super(props)
        this.state = {
            showHelp: false
        }
    }

    toggleHelp() {
        this.setState({ showHelp: !this.state.showHelp })
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-wrap">
                    <h4 className="mr-auto">{this.props.title}</h4>
                    <div className=""><FontAwesomeIcon onClick={() => this.toggleHelp()} className={this.state.showHelp ? 'text-primary' : 'text-muted'} style={{fontSize: '1.3rem'}} icon={faInfoCircle} /></div>
                </div>
                <div ref={this.legend} className="animated row m-2" style={{display: this.state.showHelp ? 'block' : 'none', overflow: 'hidden'}}>
                    Legend
                </div>
            </div>
        )
    }
}

export default Legend