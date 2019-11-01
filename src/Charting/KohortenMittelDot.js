import React from 'react'
import { DiamondShape } from './AnimatedDiamond'

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