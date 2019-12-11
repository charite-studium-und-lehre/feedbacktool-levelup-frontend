import React from 'react'
import { connect } from 'react-redux'
import Score from './Score'
import HeaderScore from './HeaderScore'
import { selectors } from '../Store'
import COLORS from "../../colors"

const stateToProps = (state, ownProps) => ({ ...selectors.getById(state, ownProps.entryId) })

const Entry = connect(stateToProps)(({ label, entryId, visible }) =>
  visible ?
  <div className='row mt-2 p-2'>
    <div className='col-xs-6 col-md-12 col-xl-6 my-1'>
      {label}
    </div>
    <div className='col-xs-6 col-md-12 col-xl-6 my-1'>
      <Score entryId={entryId} width='.8rem' height='.6rem' borderRadius='5%' />
    </div>
  </div> : null)

const Item = connect(stateToProps)(({ label, entryId, entries }) => (
  <div>
    <div className='mb-2'>
      <h5 className='text-center'>{label}</h5>
      <div className="mx-auto pt-3" style={{ maxWidth: '45rem' }}>
        <HeaderScore headings={true} edit={false} entryId={entryId} average={true} width='.9rem' height='.9rem' borderRadius='50%' />
      </div>
    </div>
    <div className="container-fluid">
      {entries.map(f => <ItemLevel2 key={f} entryId={f} />)}
    </div>
  </div>
))

const ItemLevel2 = connect(stateToProps)(({ visible, entries, label, entryId }) => {
  return visible ? 
    <div className='mb-3 overflow-hidden' style={{borderBottom: '1px solid '+ COLORS.background.grey4}}>
      {entries.length ? 
        <div>
          <h6 className='text-center mt-3 mb-4'>{label}</h6>
          {entries.map(e => <Entry key={e} entryId={e} />)}
        </div> :
        <Entry entryId={entryId} />
      }
    </div> : null
})

export default Item
