import React from 'react'
import { connect } from 'react-redux'
import { ExternAssissing } from './Data'
import { selectors, actions } from './Store'

const stateToProps = state => ({ selected: selectors.getFilter(state)})
const externAssessingn =  connect(stateToProps, actions)(({selected, ...props}) => (
    <div className=' col-12 col-md-12 col-xl-10  mt-2'>
        <button className='btn btn-sm btn-secondary' style={{width:'5rem'}} onClick={ () => props.setFilter(null) }>Alle</button>
        <ul className='list-group mt-1 mb-3'>
        {ExternAssissing.map(e =>
            <li className={`${selected === e.id && 'bg-primary'} list-group-item d-inline`} key={e.name} onClick={() => props.setFilter(e.id)} style={{fontWeight:'bold'}}>
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