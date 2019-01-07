import React from 'react'
import HorizontalBarGraph from '../../Charting/HorizontalBarGraph'

const StationDetails = props => {
    const scales = { xScale: props.xScale, yScale: props.yScale }
    return (
        <g className="animated" style={props.style}>
            <HorizontalBarGraph labels {...scales} data={props.data} />
        </g>)
}

export default StationDetails