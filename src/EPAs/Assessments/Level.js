import React from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { tupleTypeAnnotation } from '@babel/types'

const Square = props=> {
    const defaultStyle =  {
        height: '.6rem',
        width: '.8rem',
        display: 'inline-block'
    }
    const style = _.defaults(props.style , defaultStyle)
    return <div className='mr-1' style={style} />
}

const Level = ({ maxValue = 5, value = 0, color, colorBackground, ...props }) => {
    const unit = (5 / maxValue) * value
    const dev = _.range(0,5).map( i => {
        const cutoff = _.clamp(unit - i, 0, 1) * 100
        const backgroundImage = `linear-gradient(to right, ${color} ${cutoff}%, ${colorBackground} ${cutoff}%)`
        return <Square key={i} style={{ backgroundImage, border: `1px solid ${color}`, ...props }}/>
    })

    return <div className={`d-inline-block ${props.className} text-nowrap`}>
        {dev}
    </div>
}

export const LevelWithEdit = ({ increment, decrement, ...otherProps}) => {
    const test = ()=> alert('ff')
    const condition1 = otherProps.value < 1
    const condition2 = otherProps.value >= otherProps.maxValue
     return <div>
        <span style={{ cursor: condition1 ? 'auto': 'pointer' , color: condition1 ? 'rgb(108, 117, 125,.2)':'rgb(108, 117, 125)' }}>
            <FontAwesomeIcon icon={faMinusCircle} onClick={!condition1 ? decrement :''} />
        </span>
        <span className="mx-1">
            <Level {...otherProps} />
        </span>
        <span style={{cursor: condition2 ? 'auto': 'pointer', color: condition2 ? 'rgb(108, 117, 125,.2)':'rgb(108, 117, 125)' }}>
            <FontAwesomeIcon icon={faPlusCircle}  onClick={!condition2 ? increment :'' } />
        </span>
    </div>
}
export default Level