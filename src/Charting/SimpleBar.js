import React from 'react'
import _ from 'lodash'
import tinycolor from 'tinycolor2'
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
    const color = tinycolor(props.color || 'rgb(51, 137, 51)')
    const style = _.defaults({
        backgroundImage: `linear-gradient(to right, ${color.setAlpha(1).toString()} ${props.value / total * 100}%, ${color.setAlpha(.6).toString()} ${props.value / total * 100}%)`,
        height: props.height,
        width: props.width,
    }, defaultStyle)
    
    return (
    <div 
        className="my-1 text-center text-white"
        style={style}>
        <span>{props.children}</span>
        {props.mean && <SimpleDot value={props.mean / total * 100} style={{backgroundColor: 'rgba(0, 0, 0, 0.4)',}} />}
    </div>
)}

export default SimpleBar