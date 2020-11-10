import React from 'react'

const Slide = props =>
    <div className="pad mb-5">
        <img className='h-100 w-100' src={props.img}></img>
        <div className="pad mt-3">
            <p>{props.text}
                {props.tipp && <p><strong>Tipp:</strong>{props.tipp}</p>}
            </p>
        </div>
    </div>
export default Slide