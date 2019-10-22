import React from 'react'
import { connect } from 'react-redux'
import { ExternAssissing } from './Data'
import { selectors, actions } from './Store'

const stateToProps = state => ({ selected: selectors.getFilter(state)})
const externAssessingn =  connect(stateToProps, actions)(({ selected, setFilter }) => (
    <div className='p-2'>
        <button className='btn btn-sm btn-secondary width-100' onClick={ () => setFilter(null) }>Alle</button>
        <ul className='list-group'>
        {ExternAssissing.map(e =>
            <li className={`${selected === e.id && 'bg-primary'} list-group-item d-inline`} key={e.name} onClick={() => setFilter(e.id)} style={{fontWeight:'bold'}}>
                <div className='row'>
                    <span className='col'>{e.name}</span>
                    <span className='col text-right'>{e.datum.toLocaleDateString()}</span>
                </div>
            </li>
        )}
        </ul>
    </div>
))

export default externAssessingn