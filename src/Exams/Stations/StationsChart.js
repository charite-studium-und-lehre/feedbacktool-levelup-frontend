import React from 'react'
import { asChart, withHorizontalOrdinalScales } from '../../Charting/Chart'
import { XAxis } from '../../Charting/Axis';
import Station from './Station'

const Chart = asChart(withHorizontalOrdinalScales(props => {
    const scales = {xScale: props.xScale, yScale: props.yScale}
    return (
    <g>
        {props.data.map((d, i) => <Station key={d.name} data={d} onClick={ item => props.selectItem(item, i)} {...scales} />)}
        <XAxis horizontal label="% richtig" {...scales} />
    </g>)
}))
const StationsChart = props =>
    <div className="w-100" style={{overflow:'hidden', height: `${props.data.length * 4}rem`, padding:'0 1rem 1rem 1rem'}}>
        <Chart {...props} yDomain={props.data.map(d => d.name)} />
    </div>

export default StationsChart