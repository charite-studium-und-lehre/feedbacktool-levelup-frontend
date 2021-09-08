import React from 'react'

const defaultStyle = {
    height: '.8em',
    width: '.8em',
    display: 'inline-block',
    backgroundColor: 'red'
}
const ColorLegend = (props) => {

    const style = {...defaultStyle, ...props.style}

    return (
        <div style={{ fontSize: '.8em' }} >
            <div className="mr-2" style={style}></div>
            <span>{props.text}</span>
        </div>
    )
}
export default ColorLegend
