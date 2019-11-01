import React from 'react'
import COLORS from "../colors"

const DiamondShape = ({ color = COLORS.textBlack }) =>
    <polygon style={{fill: color, stroke: 'var(--color-background-base)', strokeWidth: .1}}
        points="0.5 0, 1 0.5, 0.5 1, 0 0.5"/>

export const Diamond = ({ color = COLORS.textBlack, ...d }) =>
    <g transform={`translate(${d.cx - d.size*.5}, ${d.cy - d.size*.5}) scale(${d.size})`} key={"diamond" + d.key}>
        <DiamondShape color={color} />
    </g>

const KohortenMittelDot = ({ className = '', valueInPercent = 0, sizeInEm = 1, ...otherProps}) => 
    <span
        className={'animated position-absolute ' + className}
        style={{
            width: valueInPercent + '%',
            minWidth: sizeInEm + 'em',
            height: sizeInEm + 'em'
        }}>
        <svg width="100%" height="100%" style={{position: 'absolute'}} viewBox="0 0 1 1">
            <DiamondShape {...otherProps} />
        </svg>
    </span>
export default KohortenMittelDot

export const InlineKohortenMittelDot = props =>
    <span className='position-relative mr-4'>
        <KohortenMittelDot {...props} />
    </span>