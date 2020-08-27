import React from 'react'
import { HorizontalBarChart } from '../../Charting/HorizontalBarGraph'
import { colorTotal as dashboardBarChartColor } from '../../Exams/Ptm/Ptm'

const labels = ['nicht beantwortet', 'falsch', 'richtig']
const PtmInfo = (props) =>
    (<div>
        <span style={{fontSize: '.9rem'}}>{props.name}</span>
        <div>Deine Antworten:</div>
        <div className="mt-1" style={{height: '5.3rem'}}>
            <HorizontalBarChart color={dashboardBarChartColor} noaxis xDomain={[0,200]} yDomain={labels} data={labels.map((d, i) => ({y: d, x: props.results[2-i] }))} />
        </div>
    </div>)

export default PtmInfo