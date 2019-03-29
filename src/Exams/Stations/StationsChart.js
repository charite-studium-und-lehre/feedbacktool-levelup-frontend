import React from 'react'
import _ from 'lodash'
import { asChart, withHorizontalOrdinalScales } from '../../Charting/Chart'
import { XAxis } from '../../Charting/Axis';
import StationsExam from './StationsExam';

const Chart = asChart(withHorizontalOrdinalScales(props => {
    const { xScale, yScale, ...otherProps } = props
    return (
        <g>
        {props.data.filter(e => e.stations.length > 0).map(e =>
            <StationsExam key={e.exam} label={e.exam} stations={e.stations} scales={{xScale, yScale}} {...otherProps} />
        )}
            <XAxis horizontal label="% richtig" xScale={xScale} yScale={yScale} />
        </g>
    )
}))
const StationsChart = props =>
    <div className="w-100" style={{overflow:'hidden', height: `${props.data.reduce((acc, cur) => acc + cur.stations.length, 0) * 4}rem`, padding:'1rem'}}>
        <Chart {...props} yDomain={_.flatMap(props.data, e => e.stations.map(s => s.name))} />
    </div>

export default StationsChart