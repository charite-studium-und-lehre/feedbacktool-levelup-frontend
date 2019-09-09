import React from 'react'
import { ExternAssessingValue } from './Data'
import Numbers from './Numbers'

const ExternAssessingWithValue = props => (
    <div>
        <ul className='list-group mt-1 mb-3'>
        {ExternAssessingValue.map(e =>
            <li  className='list-group-item d-inline' key={e.name} style={{ boxShadow :' 2px 2px  5px rgb(210, 220, 152), -2px -2px  5px rgb(210, 220, 152)', fontWeight:'bold'}}>
                <div className='row'>
                    <span className='col-4'>{e.name}</span>
                    <span className='col-4 text-right'>{e.datum.toLocaleDateString()}</span>
                    <span className='col-4 text-right'>
                    <Numbers
                    colorsRgb=' hsl(15, 100%, 25%, .2)'
                    color='hsl(15, 100%, 25%)'
                    width='.8rem'
                    height='.6rem'
                    value={props.external}
                    />
                    </span>
                </div>
            </li>
        )}
        </ul>
    </div>
)

export default ExternAssessingWithValue