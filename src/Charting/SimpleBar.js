import React from 'react'
import _ from 'lodash'
import SimpleDot from './SimpleDot'

const defaultStyle = {
    lineHeight: '.8rem',
    fontSize: '.7rem',
    height: '.8rem',
    width: "100%",
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
}

const SimpleBar = props => {
    const total = props.total || 100

    const style = _.defaults({
        backgroundImage: 'linear-gradient(to right, '+ props.colorTotal +' 100%,  transparent)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${props.value / total * 100}% 100%`,
        backgroundColor: props.colorPartOfTotal,
        height: props.height,
        width: props.width,
    }, defaultStyle)
    
    return (
    <div 
        className="my-1 text-center text-white animated"
        style={style}>
        <span>{props.children}</span>
        {props.mean && <SimpleDot value={props.mean / total * 100} />}
    </div>
)}

export default SimpleBar