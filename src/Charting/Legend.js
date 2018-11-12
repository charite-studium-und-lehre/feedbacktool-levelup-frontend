import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class Legend extends Component {
    constructor({ props }) {
        super(props)
        this.legend = React.createRef()
        this.state = {
            showHelp: null
        }
    }

    componentDidMount() {
        this.originalHeight = this.legend.current.offsetHeight
        this.toggleHelp()
    }

    toggleHelp() {
        const showHelp = this.state.showHelp === null ? window.innerWidth > 768 ? true : false : !this.state.showHelp
        this.legend.current.style.height = showHelp ? `${this.originalHeight}px` : 0
        this.setState({ showHelp })
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-wrap">
                    {this.props.title && <h4>{this.props.title}</h4>}
                    <div className="ml-auto">
                        <FontAwesomeIcon 
                            onClick={() => this.toggleHelp()}
                            className={this.state.showHelp ? 'text-primary' : 'text-muted'}
                            style={{fontSize: '1.3rem'}}
                            icon={faInfoCircle} />
                    </div>
                </div>
                <div ref={this.legend} className="animated fast row" style={{ overflow: 'hidden' }}>
                    <div className="col my-2" style={{fontSize: '.8rem'}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Legend