import React, { Component } from 'react'

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
            <div className="row mb-2 mt-1">
                <div className="col">
                    {this.props.showAll && <button className="btn btn-outline-primary mr-1 mt-1" onClick={ () => this.selectNone() }>alle anzeigen</button>}
                    {this.state.filters.map(filter => (<button key={filter.label} 
                        className={`mr-1 mt-1 btn ${filter.selected ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => this.toggleFilter(filter)}>
                        {filter.label}
                    </button>))}
                </div>
            </div>
        )
    }
}

export default Filter