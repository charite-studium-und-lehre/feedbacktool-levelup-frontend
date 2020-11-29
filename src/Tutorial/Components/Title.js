import React from 'react'
 const mobil = window.innerWidth < 1025 
const Title = props =>
    <div className="py-2 mb-4 row " style={{ boxShadow: '0 4px 5px -5px gray' }}>
        <div className="col-8 col-lg-10  mx-auto ">
        <p className=" font-weight-bold" style={{ fontSize: mobil ? '0.7': '1.2rem', textAlign:'center' }}>
            {props.text}
        </p>
        </div>
    </div>
export default Title