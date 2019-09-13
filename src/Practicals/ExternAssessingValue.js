import React from 'react'
import { ExternAssissing } from './Data'
import Numbers from './Numbers'

const ExternAssessingWithValue = props =>
    <div>
        <ul className='list-group mt-1 mb-3'>
        {props.values.map(e => {
            const external = ExternAssissing.find( ex => ex.id === e.id )
            return <li className='list-group-item d-inline' key={e.id} style={{ boxShadow :' 2px 2px  5px rgb(210, 220, 152), -2px -2px  5px rgb(210, 220, 152)', fontWeight:'bold'}}>
                <div className='row'>
                    <span className='col-5'>{external.name}</span>
                    <span className='col-7 text-right'>
                    <Numbers
                    colorsRgb=' hsl(15, 100%, 25%, .2)'
                    color='hsl(15, 100%, 25%)'
                    width='.8rem'
                    height='.6rem'
                    value={e.value}
                    />
                      <span className='col-4 text-right'>{external.datum.toLocaleDateString()}</span>
                    </span>
                </div>
            </li>
        })}
        </ul>
    </div>

export default ExternAssessingWithValue