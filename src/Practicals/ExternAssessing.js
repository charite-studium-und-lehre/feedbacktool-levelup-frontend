import React from 'react'
import { connect } from 'react-redux'
import { ExternAssissing } from './Data'
import { actions } from './Store'

const externAssessingn =  connect(null, actions)(props => (
    <div className=' col-12 col-md-12 col-xl-10  mt-2'>
        <button className='btn-secondary' style={{width:'5rem', borderRadius:'.3rem'}} onClick={ () => props.setFilter(null) }>Alle</button>
        <ul className='list-group mt-1 mb-3'>
        {ExternAssissing.map(e =>
            <li  className='list-group-item d-inline' key={e.name} onClick={() => props.setFilter(e.id)} style={{ boxShadow :' 2px 2px  5px rgb(210, 220, 152), -2px -2px  5px rgb(210, 220, 152)', fontWeight:'bold'}}>
                <div className='row'>
                    <span className='col-6'>{e.name}</span>
                    <span className='col-6 text-right'>{e.datum.toLocaleDateString()}</span>
                </div>
            </li>
        )}
        </ul>
    </div>
))

export default externAssessingn