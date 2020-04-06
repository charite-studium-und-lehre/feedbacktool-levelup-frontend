import React from 'react'
import _ from 'lodash'
import COLORS from "../colors";

const defaultStyle = size => ({
    position: 'absolute',
    height: `${size}rem`,
    width: `${size}rem`,
    backgroundColor: COLORS.textBlack,
    borderRadius: `${size/2}rem`,
    border: '1px solid '+ COLORS.background.base
})

const SimpleDot = ({ className = '', size = .5, ...props }) => {
    const style = _.defaults({ left: `calc(${props.value}% - .4rem)` }, props.style, defaultStyle(size))
    return <div className={`animated ${className}`} style={style} />
}

export default SimpleDot