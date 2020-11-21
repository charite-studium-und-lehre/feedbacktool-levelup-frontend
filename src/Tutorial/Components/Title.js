import React from 'react'
 const mobil = window.innerWidth < 1025 
const Title = props =>
    <div className="py-2  mb-4" style={{ boxShadow: '0 4px 5px -5px gray' }}>
        <p className=" w-75 mx-auto " style={{ fontSize: mobil ? '0.7': '1.2rem' }}>
            <p className='font-weight-bold'>{props.text}</p>
        </p>
    </div>
export default Title