import React from 'react'
import COLORS from "../colors"

export default ({
                    className = '',
                    valueInPercent = 0,
                    widthInPercent = valueInPercent,
                    color = COLORS.textBlack,
                    placing = '',
                    sizeInEm = 1
                }) => {

    sizeInEm = placing==='inline' ? 1 : sizeInEm

    const dot = <polygon style={{fill: color, stroke: 'var(--color-background-base)', strokeWidth: .1}}
                 points="0.5 0, 1 0.5, 0.5 1, 0 0.5"/>

    const valuePlacedDot = ()=> <span
        className={'animated position-absolute ' + className}
        style={{
            width: widthInPercent + '%',
            minWidth: sizeInEm + 'em',
            height: sizeInEm + 'em'
        }}>
        <svg width="100%" height="100%" style={{position: 'absolute'}} viewBox="0 0 1 1">
            {dot}
        </svg>
    </span>

    return placing === 'valueInPercent'
        ?
        valuePlacedDot()
        :
        placing === 'inline'
            ?
            <span className='position-relative mr-4'>
                {valuePlacedDot()}
            </span>
            : dot
}