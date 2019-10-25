import React from 'react'
import {connect} from 'react-redux'
import {ExternAssessing} from '../static/Data'
import {selectors, actions} from '../Store'

const stateToProps = state => ({selected: selectors.getFilter(state)})
export default connect(stateToProps, actions)(({selected, setFilter}) => {
    return (ExternAssessing != null) && ExternAssessing.hasOwnProperty('length') && (ExternAssessing.length > 0)
        ? (<div>
            <button className='btn btn-sm btn-secondary width-100' onClick={() => setFilter(null)}>Alle</button>
            <ul className='list-group'>
                {ExternAssessing.map(e =>
                    <li className={`${selected === e.id && 'bg-primary'} list-group-item d-inline`} key={e.name}
                        onClick={() => setFilter(e.id)} style={{fontWeight: 'bold'}}>
                        <div className='row'>
                            <span className='col'>{e.name}</span>
                            <span className='col text-right'>{e.datum.toLocaleDateString()}</span>
                        </div>
                    </li>
                )}
            </ul>
            </div>)
        : (<div >
                Hier sind künftig deine Fremeinschätzungen zu sehen, die du von anderen LevelUp-Nutzern erhalten hast.
            </div>)
})