import React from 'react'
import StationsExam from './StationsExam';

const StationsChart = props =>
    <div>
        {props.data.filter(e => e.stations.length > 0).map(e =>
            <StationsExam colors={props.colors} key={e.id} label={e.name} stations={e.stations} />
        )}
    </div>

export default StationsChart