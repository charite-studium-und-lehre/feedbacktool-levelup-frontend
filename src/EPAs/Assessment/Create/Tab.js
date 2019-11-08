import React from 'react'
import { connect } from 'react-redux'
import { getEpaById } from '../../Selectors'
import Rating from './Rating'

const stateToProps = (state, ownProps) => ({ ...getEpaById(state, ownProps.entryId) })

const Entry = connect(stateToProps)(({ label, entryId, visible }) =>
  visible ?
  <div className='row mt-2 p-2'>
    <div className='col-xs-6 col-md-12 col-xl-6 my-1'>
      {label}
    </div>
    <div className='col-xs-6 col-md-12 col-xl-6 my-1'>
        <Rating entryId={entryId} />
    </div>
  </div> : null)

const Tab = connect(stateToProps)(({ label, entries }) => (
  <div>
    <div className='mb-2'>
      <h5 className='text-center'>{label}</h5>
    </div>
    <div className="container-fluid">
      {entries.map(f => <ItemLevel2 key={f} entryId={f} />)}
    </div>
  </div>
))

const ItemLevel2 = connect(stateToProps)(({ visible, entries, label, entryId }) => {
  return visible ? 
    <div className='mb-3 overflow-hidden' style={{borderBottom: '1px solid lightgrey'}}>
      {entries.length ? 
        <div>
          <h6 className='text-center mt-3 mb-4'>{label}</h6>
          {entries.map(e => <Entry key={e} entryId={e} />)}
        </div> :
        <Entry entryId={entryId} />
      }
    </div> : null
})

export default Tab
