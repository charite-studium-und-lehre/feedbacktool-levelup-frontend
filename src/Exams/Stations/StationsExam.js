import React from 'react'
import Station from './Station'

const borderColor = 'rgba(0,0,0,.35)'
const StationsExam = props => (
    <div className="mb-1 p-3 pt-2" style={{border: `1px dashed ${borderColor}`}}>
        <div className="text-right" style={{fontSize: '.75rem', color: borderColor}} >
            {props.label}
        </div>
        {props.stations.map(station => 
            <Station key={station.code} color={props.colors(station.zeitsemester)} data={station} {...props.scales} />
        )}
    </div>)

export default StationsExam