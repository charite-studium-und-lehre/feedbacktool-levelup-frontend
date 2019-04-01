import React from 'react'
import SimpleBar from '../../Charting/SimpleBar'
import _ from 'lodash'






export default function SemesterFächer (props) {
    const total = _.random(props.result, props.result + 10)
    return ( <div>
        <div className=" mb-2">
            <div style={{fontSize: '.9rem', marginBottom: '-.3rem', color: 'rgba(0,0,0,.75)'}}>{props.name}</div>
            <div style={{position: 'relative', minHeight: '1.5rem'}}>
                <div style={{opacity: props.extended ? 0 : 1}} className="animated w-100 h-100 position-absolute">
                    <SimpleBar height='100%' value={props.result} total={total} width={total * 2 + "%"} color={props.color}>
                     
                        {props.result} von {total}
                    </SimpleBar>
                </div>

                </div>
            </div>
        </div>
    )
}

