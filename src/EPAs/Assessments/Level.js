import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { clamp } from  '../../Utils/utils.js'

const Square = props=> {
    const defaultStyle =  {
        height: '.6rem',
        width: '.8rem',
        display: 'inline-block'
    }
    const style = {...defaultStyle, ...props.style}
    return <div className='mr-1' style={style}/>
}

const Level = ({
    maxValue = 5,
    value = 0,
    color,
    colorBackground,
    ...props
}) => {
    const unit = (5 / maxValue) * value
    const dev = Array(5).fill().map((x,i) => i).map( i => {
        const cutoff = clamp(unit - i, 0, 1) * 100
        const backgroundImage = `linear-gradient(to right, ${color} ${cutoff}%, ${colorBackground} ${cutoff}%)`
        return <Square key={i} style={{ backgroundImage, border: `1px solid ${color}`, ...props }}/>
    })

    return <div className={`d-inline-block ${props.className} text-nowrap`}>
        {dev}
    </div>
}

export const LevelWithEdit = ({
    increment,
    decrement,
    ...otherProps
}) => {
    const condition1 = otherProps.value < 1
    const condition2 = otherProps.value >= otherProps.maxValue
    let onclickDecrement = () => 0
    if (!condition1) onclickDecrement = decrement
    let onclickIncrement = () => 0
    if (!condition2) onclickIncrement = increment
    return <div>
        <span style={{ cursor: condition1 ? 'auto': 'pointer' , color: condition1 ? 'rgb(108, 117, 125,.2)':'rgb(108, 117, 125)' }}>
            <FontAwesomeIcon icon={faMinusCircle} onClick={onclickDecrement}/>
        </span>
        <span className="mx-1">
            <Level {...otherProps} />
        </span>
        <span style={{cursor: condition2 ? 'auto': 'pointer', color: condition2 ? 'rgb(108, 117, 125,.2)':'rgb(108, 117, 125)' }}>
            <FontAwesomeIcon icon={faPlusCircle}  onClick={onclickIncrement}/>
        </span>
    </div>
}
export default Level
