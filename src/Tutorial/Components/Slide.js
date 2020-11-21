import React from 'react'

const Slide = props =>
    <div className="pad mb-5">
        <img className='h-100 w-100' src={props.img}></img>
        <div className="pad mt-3" style={{fontSize: window.innerWidth < 1025 ?'0.7rem':'1.3rem'}}>
            <p>{props.text}
                {props.tipp && <p><strong>Tipp:</strong>{props.tipp}</p>}
            </p>
        </div>
    </div>
export default Slide