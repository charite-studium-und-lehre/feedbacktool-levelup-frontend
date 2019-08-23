import React from 'react'
import {ExternAssissing} from './Data'

const  externAssessingn = props => (
    <div className={`col-${props.col}`}>
        <button className='btn-secondary '>Alle</button>
        <ul className='list-group mt-1 mb-3'>
      {ExternAssissing.map(e =>
        <li  className='list-group-item d-inline' key={e.name} onClick={props.onClick} style={{ boxShadow :' 2px 2px  5px rgb(210, 220, 152), -2px -2px  5px rgb(210, 220, 152)', fontWeight:'bold'}}>
            <div className='row'>
                <span className='col-6'>{e.name}</span>
                <span className='col-6 text-right'>{e.datum}</span>
            </div>
     </li>
      )}
        </ul>
    </div>
)
export default externAssessingn