import React from 'react'
import _ from 'lodash'

const defaultStyle = size => ({
    position: 'absolute',
    height: `${size}rem`,
    width: `${size}rem`,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: `${size/2}rem`,
    border: '1px solid rgba(0,0,0,.2)',
})

const SimpleDot = ({ className = '', size = .5, ...props }) => {
    const style = _.defaults({ left: `calc(${props.value}% - .4rem)` }, props.style, defaultStyle(size))
    return <div className={`animated ${className}`} style={style} />
}

export default SimpleDot