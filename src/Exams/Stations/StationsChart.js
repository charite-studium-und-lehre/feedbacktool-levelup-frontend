import React from 'react'
import StationsExam from './StationsExam'

const StationsChart = ({ data, colors }) =>
    <div>
        {data.filter(e => e.stationen.length > 0).map(e =>
            <StationsExam colors={colors} key={e.id} label={e.name} stations={e.stationen} />
        )}
    </div>

export default StationsChart