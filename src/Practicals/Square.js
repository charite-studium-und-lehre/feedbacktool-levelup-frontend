import React from 'react'
import _ from 'lodash'

const defaultStyle = {
height: '.95rem',
width: '.95rem',
display: 'inline-block' 
}

const Square = props=> {
const style = _.defaults(props.style , defaultStyle)
return <div className='mr-1' style={style}>{props.children}</div>
}

export default Square