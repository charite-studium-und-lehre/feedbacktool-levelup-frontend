import React from 'react'
import Checkbox from "../Exams/Checkbox";
import COLORS from "../colors";

const Filter = ({ filters, ...props }) => {

    const colors = props.colors
        ? props.colors
        : { background: COLORS.background.grey5,
            line: COLORS.background.grey6,
            text: COLORS.background.base }

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
        <div className={`d-inline-flex flex-row flex-wrap ${props.className}`}>
        {props.showAll && <button className="btn btn-outline-primary btn-sm mr-1 mt-1" onClick={ () => all(false) }>alle anzeigen</button>}
        {filters.map(filter => (
            <span className="flex-fill d-inline-block mr-1 mt-1" 
                key={filter.label} 
                style={{ 
                    fontSize: '.73rem', 
                    border: '1px solid ' + colors.line,
                    backgroundColor: colors.background
                }}>
                <Checkbox checked={filter.selected}
                          onCheck={() => toggleFilter(filter)}
                          onUncheck={() => toggleFilter(filter)}
                          lineColor={colors.line}
                          textColor={colors.text} >
                          {filter.label}
                </Checkbox>
            </span>)
        )}
        </div>
    )
}

export default Filter