import React, { Component } from 'react'

const makeExtendable = WrappedComponent => {
    return class Extendable extends Component {
        constructor(props) {
            super(props)
            this.state = { extended: window.innerWidth < 768 }
            this.element = React.createRef()
        }

        componentDidMount() {
            this.originalHeight = this.element.current.offsetHeight
            this.toggleExtended()
        }
    
        toggleExtended() {
            this.element.current.style.height = !this.state.extended ? `${this.originalHeight}px` : 0
            this.setState({ extended: !this.state.extended })
        }
    
        render() {
            return (
                <WrappedComponent toggleExtended={() => this.toggleExtended()} extended={this.state.extended} extendableElement={this.element} {...this.props} />
            )
        }
    }
}

export default makeExtendable