import React from 'react'

const defaultStyle = {
    height: '.8em',
    width: '.8em',
    display: 'inline-block',
}
const ColorLegend = props =>  (
        <div style={{ fontSize: '.8em' }} >
            <div className="mr-2" style={{...defaultStyle, ...props.style}}></div>
            <span>{props.text}</span>
        </div>
    )
export default ColorLegend

