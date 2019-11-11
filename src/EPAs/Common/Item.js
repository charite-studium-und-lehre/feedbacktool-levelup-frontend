import React from 'react'
import { connect } from 'react-redux'
import Score from '../Assessments/Score'
import HeaderScore from '../Assessments/HeaderScore'
import { getEpaById } from '../Selectors'

const stateToProps = (state, ownProps) => ({ ...getEpaById(state)(ownProps.entryId) })

export const asItem = (Level1Score, Level2Score, Level3Score) => {
  const Entry = connect(stateToProps)(({ label, entryId, visible }) =>
    visible ?
    <div className='row mt-2 p-2'>
      <div className='col-xs-6 col-md-12 col-xl-6 my-1'>
        {label}
      </div>
      <div className='col-xs-6 col-md-12 col-xl-6 my-1'>
        <Level3Score entryId={entryId} width='.8rem' height='.6rem' borderRadius='5%' />
      </div>
    </div> : null)

  const Item = connect(stateToProps)(({ label, entryId, entries }) => (
    <div>
      <div className='mb-2'>
        <h5 className='text-center'>{label}</h5>
        {Level1Score && <div className="mx-auto pt-3" style={{ maxWidth: '45rem' }}>
          <Level1Score entryId={entryId} width='.9rem' height='.9rem' borderRadius='50%' />
        </div>}
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
            {Level2Score &&
              <Level2Score entryId={entryId} />
            }
            {entries.map(e => <Entry key={e} entryId={e} />)}
          </div> :
          <Entry entryId={entryId} />
        }
      </div> : null
  })

  return Item
}

export default asItem(HeaderScore, null, Score)
