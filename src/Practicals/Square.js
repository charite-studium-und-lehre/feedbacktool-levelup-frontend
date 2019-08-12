import React from 'react'
import _ from 'lodash'

const defaultStyle = {
height: '.75rem',
width: '.75rem',
display: 'inline-block' 
}

const Square = props=> {
const style = _.defaults(props.style , defaultStyle)
return <div className='mr-1' style={style}>{props.children}</div>
}

export default Square