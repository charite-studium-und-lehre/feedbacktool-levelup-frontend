import React, { Component } from 'react'
import Subject from './Subject'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = { extended: false }
    }

    toggleExtended() {
        this.setState({ extended: !this.state.extended })
    }

    render() {
        return (
            <div>
                <h4 className="m2" onClick={() => this.toggleExtended()}>{this.props.title}</h4>
                {this.state.extended && this.props.subjects.map(s => 
                    <Subject {...s} />
                )}
            </div>
        )
    }
}

export default Category