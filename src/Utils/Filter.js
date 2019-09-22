import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'

const Filter = ({ filters, ...props }) => {
    function callUpdate(filters) {
        props.onUpdate(filters)
    }

    function toggleFilter(filter) {
        const index = filters.indexOf(filter)
        const newFilters = [ ...filters.slice(0, index), { ...filter, selected: !filter.selected }, ...filters.slice(index + 1) ]
        callUpdate(newFilters)
    }

    function all(selected) {
        const newFilters = filters.map( filter => ({ ...filter, selected }) )
        callUpdate(newFilters)
    }

    return (
        <div className="d-inline-flex flex-row flex-wrap">
        {props.showAll && <button className="btn btn-outline-primary btn-sm mr-1 mt-1" onClick={ () => all(false) }>alle anzeigen</button>}
        {filters.map(filter => (
            <span className="flex-fill d-inline-block mr-1 mt-1" 
                key={filter.label} 
                style={{ fontSize: '.73rem', border: `1px solid ${filter.color || 'hsla(210, 50%, 55%, 1)'}`, backgroundColor: filter.color || 'hsla(210, 50%, 60%, 1)'}}>
                <label className="p-2 m-0 text-white" onClick={() => toggleFilter(filter)} >
                    <FontAwesomeIcon className="mr-1" icon={filter.selected ? faCheckSquare : faSquare} />
                {filter.label}</label>
            </span>)
        )}
        </div>
    )
}

export default Filter