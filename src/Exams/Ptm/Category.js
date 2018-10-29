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
            <div className="m-2 my-3">
                <h4 onClick={() => this.toggleExtended()}
                    style={{borderBottom: '1px solid black', cursor: 'pointer'}} >
                    <span className="float-right" style={{fontSize: '1rem'}}>{this.state.extended ? '▼' : '►'}</span>
                    {this.props.title}
                </h4>
                <div className="d-flex flex-wrap">
                {this.state.extended && this.props.subjects.map((s, i) => 
                    <Subject {...s} id={i} />
                )}
                </div>
            </div>
        )
    }
}

export default Category