import React from 'react'
import _ from 'lodash'

const colors = ['hsla(120, 50%, 50%, .7)', 'hsla(0, 0%, 0%, .05)']

const SimpleDonut = ({ fgColor = colors[0], bgColor = colors[1], width = '1rem', ...props}) => {
    const baseStyle = {
        borderColor: bgColor,
        borderWidth: width,
        borderStyle: 'solid',
        borderRadius: '50%',
        position: 'absolute',
    }
    const bgSlice = perc => {
        const color = cutoff => perc >= cutoff ? fgColor : 'transparent'
        return _.defaults({
            borderColor: `${color(25)} ${color(50)} ${color(75)} ${color(100)}`,
            transform: 'rotate(45deg)',
        }, baseStyle)
    }
    const fgSlice = perc => _.defaults({
        borderColor: `${fgColor} transparent transparent transparent`,
        transform: `rotate(${45 + 90 * _.floor(perc / 25)}deg)`,
        clipPath: `polygon(50% 50%, 0 0, ${Math.tan(((perc % 25) * 0.02 - .25) * Math.PI) * 50 + 50}% 0)`,
    }, baseStyle)

    return <div className="position-relative w-100 h-100 d-flex align-items-center">
        <div className="w-100 h-100" style={baseStyle} />
        <div className="w-100 h-100" style={bgSlice(props.value)} />
        <div className="w-100 h-100" style={fgSlice(props.value)} />
        <div className="flex-grow-1 text-center">{props.children}</div>
    </div>
}

export default SimpleDonut