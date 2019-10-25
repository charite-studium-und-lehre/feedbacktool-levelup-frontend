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

const Numbers = ({ maxValue = 5, value = 0, color, colorsRgb, ...props }) => {
    const unit = (5 / maxValue) * value
    const dev = _.range(0,5).map( i => {
        const cutoff = _.clamp(unit - i, 0, 1) * 100
        const backgroundImage = `linear-gradient(to right, ${color} ${cutoff}%, ${colorsRgb} ${cutoff}%)`
        return <Square key={i} style={{ backgroundImage, border: `1px solid ${color}`, ...props }}/>
    })

    return <div className={props.className}>
        {props.decrement &&
            <span style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faMinusCircle} className="text-muted mr-1" onClick={props.decrement} />
            </span>
        }
        <span onClick={props.onClick}>{props.average &&<span style={{fontSize:'1.3rem'}} className='mr-2'>&#8960;</span>}{dev}</span>
        {props.increment &&
            <span style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faPlusCircle} className="text-muted ml-1" onClick={props.increment} />
       </span>
        }
        { props.headings && <div className='font-weight-bold' style={{ color : props.color}}>{props.headings}</div>}
        { props.children }
    </div>
}

export default Numbers