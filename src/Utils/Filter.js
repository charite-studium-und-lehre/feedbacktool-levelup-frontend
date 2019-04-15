import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'

class Filter extends Component {
    constructor( props) {
        super(props)
        this.state = { filters: props.filters }
    }

    toggleFilter(filter) {
        filter.selected = !filter.selected
        this.setState({ filters: this.state.filters }, this.callUpdate)
    }

    selectAll() {
        this.setState({ filters: this.state.filters.map(filter => ({ ...filter, selected: true })) }, this.callUpdate)
    }

    selectNone() {
        this.setState({ filters: this.state.filters.map(filter => ({ ...filter, selected: false })) }, this.callUpdate)
    }

    callUpdate() {
        this.props.onUpdate(this.state.filters)
    }

    render() {
        return (
            <div className="row mb-2 mt-1" style={this.props.style}>
                <div className="col">
                    {this.props.showAll && <button className="btn btn-outline-primary btn-sm mr-1 mt-1" onClick={ () => this.selectNone() }>alle anzeigen</button>}
                    {this.state.filters.map(filter => (
                        <span className="d-inline-block mr-1 mt-1" 
                            key={filter.label} 
                            style={{ fontSize: '.73rem', border: `1px solid ${filter.color || 'hsla(210, 50%, 55%, 1)'}`, backgroundColor: filter.color || 'hsla(210, 50%, 60%, 1)'}}>
                            <label className="p-2 m-0 text-white" onClick={() => this.toggleFilter(filter)} >
                                <FontAwesomeIcon className="mr-1" icon={filter.selected ? faCheckSquare : faSquare} />
                            {filter.label}</label>
                        </span>)
                    )}
                </div>
            </div>
        )
    }
}

export default Filter