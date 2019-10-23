import React from 'react'
import { pie, arc } from 'd3-shape'
import { interpolate } from 'd3-interpolate'
import { scaleLinear } from 'd3-scale'
import { easeLinear } from 'd3-ease'
import { LinearChart } from './Chart'
import AnimatedPath from './AnimatedPath'
import { animationTime as at } from './Utils'

const defaultColors = ['hsla(120, 50%, 50%, .7)', 'hsla(0, 0%, 0%, .05)']

const Graph = ({ data, xScale, yScale, width = .2, colors = defaultColors, animationTime = at}) =>
    <g transform={`translate(${xScale(.5)}, ${yScale(.5)})`}>
    {pie().sortValues(null).value( d => d.value || d )(data).map((d, i) => {
        const int = interpolate(d.startAngle, d.endAngle);
        const scale = scaleLinear().domain([0,2*Math.PI]).range([0,animationTime])
        return <AnimatedPath
            animationTime={scale(d.endAngle - d.startAngle)}
            delay={scale(d.startAngle)}
            tween={ t => ({...d, endAngle: int(t) })}
            ease={easeLinear}
            stroke="none"
            fill={d.data.color || colors[i]}
            key={i}
            shape={arc().innerRadius(yScale(.5 - width * .5)).outerRadius(yScale(.5))}
            d={d} />
    })}
    </g>

const AnimatedDonut = ({ children, ...props }) => 
    <div className="position-relative m-auto d-flex align-items-center h-100 w-100">
        <div className="position-absolute">
            <LinearChart xDomain={[0,1]} yDomain={[1,0]}>
                <Graph {...props} />
            </LinearChart>
        </div>
        <div className="flex-grow-1 text-center" style={{zIndex: 1}}>
            {children}
        </div>
    </div>

export default AnimatedDonut