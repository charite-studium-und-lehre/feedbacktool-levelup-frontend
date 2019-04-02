import React from 'react'
import { areaRadial, curveCatmullRomClosed } from 'd3-shape'
import tinycolor from 'tinycolor2'

const areaRad = areaRadial().angle(d => d.angle).curve(curveCatmullRomClosed.alpha(.5))
const AreaRadial = props => (
    <g>
        <path d={areaRad.outerRadius(props.value)(props.angles)} fill={tinycolor(props.color).setAlpha(.1).toString()} stroke={props.color} style={{filter: 'url(#glow)'}} />
        {props.angles.map( (a, i) => 
        <g key={i} style={{transform: `rotate(${a.angle}rad)`}} onClick={() => props.selectPoint(a)}>
            <circle r="4" cy={-props.value(a)} stroke="blue" fill="rgba(0,0,255,.4)" />
        </g>
        )}
    </g>
)

export default AreaRadial