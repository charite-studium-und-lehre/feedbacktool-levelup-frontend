import React from 'react'
import SimpleBar from '../../Charting/SimpleBar'

export default function BarWithHeader (props) {
    return (
        <div className='row'>
            <div className=" col-12">
                <div style={{fontSize: '.9rem', marginBottom: '-.3rem', color: 'rgba(0,0,0,.75)'}}>{props.name}</div>
                <div className="animated w-100">
                    <SimpleBar height="1.5rem" value={props.result} width={props.width} color={props.color} mean={props.mean} total={props.total}>
                        {props.children}
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}

