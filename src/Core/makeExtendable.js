import React, { Component } from 'react'

const makeExtendable = (WrappedComponent, def = false) => {
    return class Extendable extends Component {
        static defaultProps = {
            extended: def
        }

        constructor(props) {
            super(props)
            this.state = { extended: props.extended && window.innerWidth > 768 }
        }
    
        toggleExtended() { 
            this.setState({ extended: !this.state.extended })
        }
    
        render() {
            return (
                <WrappedComponent toggleExtended={() => this.toggleExtended()} {...this.props} extended={this.state.extended} />
            )
        }
    }
}

export default makeExtendable