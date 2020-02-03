import React from 'react'
import { Link } from 'react-router-dom'

const size = '3rem'
const style = {
    margin: '0 auto',
    borderRadius: '50%',
    height: size,
    width: size,
    lineHeight: size,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
}
const Item = props =>
    <Link className="d-block pb-3" to={`/exams/${props.link}`}>
        <div className="p-2 bg-white">
            <div className="d-flex">
                <div className="p-1">
                    <div style={{...style, backgroundColor: props.color}}>{props.icon}</div>
                </div>
                <div className="flex-grow-1 px-3">
                    {props.children}
                </div>
            </div>
        </div>
    </Link>

export default Item