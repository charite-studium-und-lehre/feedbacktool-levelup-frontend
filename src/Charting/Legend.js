import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

class Legend extends Component {
    constructor({ props }) {
        super(props)
        this.legend = React.createRef()
        this.state = {
            showHelp: true
        }
    }

    componentDidMount() {
        this.originalHeight = this.legend.current.offsetHeight
        this.toggleHelp()
    }

    toggleHelp() {
        this.legend.current.style.height = !this.state.showHelp ? `${this.originalHeight}px` : 0
        this.setState({ showHelp: !this.state.showHelp })
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-wrap">
                    <h4 className="mr-auto">{this.props.title}</h4>
                    <div>
                        <FontAwesomeIcon 
                            onClick={() => this.toggleHelp()}
                            className={this.state.showHelp ? 'text-primary' : 'text-muted'}
                            style={{fontSize: '1.3rem'}}
                            icon={faInfoCircle} />
                    </div>
                </div>
                <div ref={this.legend} className="animated fast row" style={{ overflow: 'hidden' }}>
                    <div className="col">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Legend