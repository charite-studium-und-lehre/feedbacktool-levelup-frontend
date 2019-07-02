import React from 'react'
import _ from 'lodash'

const defaultStyle = {
    position: 'absolute',
    height: '.5rem',
    width: '.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '.25rem',
    border: '1px solid rgba(0,0,0,.2)',
}

const SimpleDot = props => {
    const style = _.defaults({ left: `calc(${props.value}% - .4rem)` }, props.style, defaultStyle)
    return (
        <div style={style} />
    )
}

export default SimpleDot