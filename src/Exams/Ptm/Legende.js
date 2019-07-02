import React from 'react'
import _ from 'lodash'

const defaultStyle = {
    height: '.8em',
    width: '.8em',
    display: 'inline-block',
    backgroundColor: 'red'
}
const Legende = (props) => {

    const style = _.defaults(props.style, defaultStyle)
    return (
        <div style={{ fontSize: '.8em' }} >
            <div className="mr-2" style={style}></div>
            <span>{props.text}</span>
        </div>
    )
}
export default Legende