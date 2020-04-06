import React from 'react'
import Station from './Station'
import COLORS from "../../colors";

const StationsExam = props => (
    <div className="mb-3 p-3 pt-2">
        <div className="text-right" style={{fontSize: '.75rem'}} >
            {props.label}
        </div>
        {props.stations.map(station => 
            <Station key={station.code} color={props.colors(station.zeitsemester)} data={station} {...props.scales}
                colorTotal={COLORS.background.grey0} colorPartOfTotal={COLORS.background.grey6}
            />
        )}
    </div>)

export default StationsExam