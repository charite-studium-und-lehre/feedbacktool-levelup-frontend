import React, { Component } from 'react'

const makeExtendable = WrappedComponent => {
    return class Extendable extends Component {
        static defaultProps = {
            extended: true
        }

        constructor(props) {
            super(props)
            this.state = { extended: !props.extended || window.innerWidth < 768 }
            this.element = React.createRef()
        }

        componentDidMount() {
            this.originalHeight = this.element.current.offsetHeight
            this.element.current.style.overflow = 'hidden'
            this.toggleExtended()
        }
    
        toggleExtended() {
            if(!this.state.extended) setTimeout(() => { this.element.current.style.height = 'auto' }, getComputedStyle(this.element.current).transitionDuration)
            else {
                this.originalHeight = this.element.current.offsetHeight
                this.element.current.style.height = `${this.originalHeight}px`
            }
            setTimeout(() => { 
                this.element.current.style.height = !this.state.extended ? `${this.originalHeight}px` : 0
                this.setState({ extended: !this.state.extended })
            })
            
        }
    
        render() {
            return (
                <WrappedComponent toggleExtended={() => this.toggleExtended()} extendableElement={this.element} {...this.props} extended={this.state.extended} />
            )
        }
    }
}

export default makeExtendable