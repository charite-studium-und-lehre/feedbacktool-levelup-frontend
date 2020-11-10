import React from 'react'

const Title = props =>
    <div className="p-4 mb-4" style={{ boxShadow: '0 4px 5px -5px gray' }}>
        <p className=" w-75 mx-auto " style={{ fontSize: '1.2rem' }}>
            <b>{props.text}</b>
        </p>
    </div>
export default Title