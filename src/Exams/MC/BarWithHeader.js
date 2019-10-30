import React from 'react'
import SimpleBar from '../../Charting/SimpleBar'

export default function BarWithHeader (props) {
    return (
        <div className='row'>
            <div className=" col-12">
                <div style={{fontSize: '.9rem', marginBottom: '-.3rem', color: 'var(--color-graphs-grid-text)'}}>{props.name}</div>
                <div className="animated w-100">
                    <SimpleBar height="1.5rem" width={props.width}
                               value={props.result}  mean={props.mean} total={props.total}
                               colorTotal={props.colorTotal} colorPartOfTotal={props.colorPartOfTotal}>
                        {props.children}
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}

