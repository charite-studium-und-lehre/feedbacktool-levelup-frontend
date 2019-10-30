import React from 'react'
// todo className={`animated ${className}`} style={style}

export default ({
                    className = '',
                    sizeInEm = 1,
                    valueInPercent = 0,
                    widthInPercent = valueInPercent,
                    color = 'var(--color-graphs-grid)'
                }) => {
    console.log(valueInPercent)
    return <span className={'animated position-absolute '+className}
                 style={{width: widthInPercent + '%', minWidth:sizeInEm + 'em',  height: sizeInEm + 'em'}}>
        <svg width="100%" height="100%"
             style={{position: 'absolute'}} viewBox="0 0 1 1">
            <polygon style={{fill: color, stroke: 'var(--color-background-base)', strokeWidth: .15}}
                     points="0.5 0, 1 0.5, 0.5 1, 0 0.5"/>
        </svg>
    </span>
}