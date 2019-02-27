import React, { Component } from 'react'

const makeExtendable = WrappedComponent => {
    return class Extendable extends Component {
        constructor(props) {
            super(props)
            this.state = { extended: false }
        }
    
        toggleExtended() {
            this.setState({ extended: !this.state.extended })
        }
    
        render() {
            return (
                <WrappedComponent toggleExtended={() => this.toggleExtended()} extended={this.state.extended} {...this.props} />
            )
        }
    }
}

export default makeExtendable