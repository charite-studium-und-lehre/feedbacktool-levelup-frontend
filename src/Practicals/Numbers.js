import React from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import Square from './Square'

const Numbers = ({ maxValue = 5, ...props }) => {
    const unit = (5 / maxValue) * props.value
    const dev = _.range(0,5).map( i => {
        const cutoff = _.clamp(unit - i, 0, 1) * 100
        return <Square key={i} style={{ backgroundImage :` linear-gradient(to right, ${props.color} ${cutoff}%, ${props.colorsRgb} ${cutoff}%)`, border: `1px solid ${props.color}`, width: props.width, height: props.height, borderRadius: props.borderRadius }}/>
    })

    return <div>
        {props.edit &&
            <span style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faMinusCircle} className="text-muted mr-1" onClick={props.decrement} />
            </span>
        }
        <span>{dev}</span>
        {props.edit &&
            <span style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faPlusCircle} className="text-muted ml-1" onClick={props.increment} />
            </span>
        }
    </div>
}

export default Numbers