import React from 'react'
import { asChart, withHorizontalOrdinalScales } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis';
import Station from './Station'

const Chart = asChart(withHorizontalOrdinalScales(props => {
    const scales = {xScale: props.xScale, yScale: props.yScale}
    return (
    <g>
        {props.data.map((d, i) => <Station key={d.name} data={d} onClick={ item => props.selectItem(item, i)} {...scales} />)}
        <XAxis horizontal {...scales} />
        <YAxis horizontal label="% richtig" {...scales} />
    </g>)
}))
const StationsChart = props =>
    <div className="w-100" style={{overflow:'hidden', height: `${props.data.length * 4}rem`, paddingLeft:'7rem'}}>
        <Chart {...props} yDomain={props.data.map(d => d.name)} />
    </div>

export default StationsChart