import React from 'react'

const Slide = props =>
    <div className="pad mb-5">
        <img src={props.img} className="img"></img>
        <div className="txt">
            <p>{props.text}
           {props.tipp && <p><strong>Tipp:</strong>{props.tipp}</p>}
            </p>
        </div>
    </div> 
    export default Slide