import React from 'react'
import { areaRadial, curveCatmullRomClosed } from 'd3-shape'
import tinycolor from 'tinycolor2'
import AnimatedPath from './AnimatedPath'
import AnimatedPoint from '../Charting/AnimatedPoint'

class AreaRadial extends React.Component {
    constructor(props) {
        super(props)
        this.areaRad = areaRadial().angle(d => d.angle).curve(curveCatmullRomClosed.alpha(.5))
    } 
    
    componentDidMount() {
        this.props.selectPoint(this.props.angles[0])
    }

    render() {
        return (
        <g>
            <AnimatedPath line={this.areaRad.outerRadius(this.props.value)} d={this.props.angles} fill={tinycolor(this.props.color).setAlpha(.1).toString()} stroke={this.props.color} style={{filter: 'url(#glow)'}} />
            {this.props.angles.map( (a, i) => 
            <g key={i} style={{transform: `rotate(${a.angle}rad)`}} onClick={() => this.props.selectPoint(a)}>
                <AnimatedPoint r="4" cy={-this.props.value(a)} color={this.props.color} fill={tinycolor(this.props.color).setAlpha(.4).toString()} />
            </g>
            )}
        </g>
    )}
}

export default AreaRadial