import React from 'react'
import _ from 'lodash'
import AnimatedRect from '../../Charting/AnimatedRect'
import Station from './Station'
import AnimatedText from '../../Charting/AnimatedText'

const StationsExam = props => {
    
    const rectY = props.scales.yScale(props.stations[props.stations.length-1].name) - 10,
        rectHeight = props.scales.yScale(props.stations[0].name) + props.scales.yScale.bandwidth() - rectY,
        rectX = -10,
        rectWidth = props.scales.xScale.range()[1] + 20
    return (
    <g>
        <AnimatedText y={rectY + 15} x={rectWidth + rectX - 10} textAnchor="end" style={{fontSize: '.75rem'}} color="rgba(80,80,80, .3)">
            {props.label}
        </AnimatedText>
        <AnimatedRect 
            x={rectX} 
            y={rectY} 
            height={rectHeight}
            width={rectWidth}
            strokeDasharray="6"
            color={`rgba(80,80,80, .3)`}/>
        {props.stations.map((station, i) => 
            <Station key={station.name} color={props.colors(station.category)} data={station} onClick={ item => props.selectItem(item, i)} {...props.scales} />
        )}
    </g>
    )
}

export default StationsExam