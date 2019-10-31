import React from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const Square = props=> {
    const defaultStyle =  {
        height: '.6rem',
        width: '.8rem',
        display: 'inline-block'
    }
    const style = _.defaults(props.style , defaultStyle)
    return <div className='mr-1' style={style}>{props.children}</div>
}

const Numbers = ({ maxValue = 5, value = 0, color, colorsRgb, edit = true, ...props }) => {
    const unit = (5 / maxValue) * value
    const dev = _.range(0,5).map( i => {
        const cutoff = _.clamp(unit - i, 0, 1) * 100
        const backgroundImage = `linear-gradient(to right, ${color} ${cutoff}%, ${colorsRgb} ${cutoff}%)`
        return <Square key={i} style={{ backgroundImage, border: `1px solid ${color}`, ...props }}/>
    })

    return <div className={props.className}>
        <div className="text-nowrap">
            <span onClick={props.onClick} className="position-relative">
                {props.decrement && edit && value > 0 &&
                    <span style={{ cursor: 'pointer', left: '-1.3rem' }} className="position-absolute">
                        <FontAwesomeIcon icon={faMinusCircle} className="text-muted" onClick={props.decrement} />
                    </span>
                }
                {props.increment && edit && value < maxValue &&
                    <span style={{ cursor: 'pointer', right: '-1.1rem' }} className="position-absolute">
                        <FontAwesomeIcon icon={faPlusCircle} className="text-muted" onClick={props.increment} />
                    </span>
                }
                {props.average &&<span style={{fontSize:'1.3rem'}} className='mr-2'>&#8960;</span>}{dev}
            </span>
        </div>
        { props.headings && <div className='font-weight-bold' style={{ color : props.color}}>{props.headings}</div>}
        { props.children }
    </div>
}

export default Numbers