import React from 'react' 

const Title = props =>
    <div className="pt-3 pb-2 mb-4 row " style={{ boxShadow: '0 4px 5px -5px gray' }}>
        <div className="col-11 col-lg-10  mx-auto ">
        <p className=" font-weight-bold" style={{ fontSize: window.innerWidth < 1025  ? '0.6': '1.2rem', textAlign:'center' }}>
            {props.text}
        </p>
        </div>
    </div>
export default Title