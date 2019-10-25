import React from 'react'
import { connect } from 'react-redux'
import Score from './Score'
import { selectors } from '../Store'

const stateToProps = (state, ownProps) => ({ entry: selectors.getItemById(state, ownProps.entryId) })

const Item = connect(stateToProps)(props => (
  <div>
    <div className='mb-3'>
      <h5 className='text-center'>{props.entry.label}</h5>
      <div className="m-auto" style={{ maxWidth: '45rem' }}>
        <Score headings={true} edit={props.edit} entryId={props.entryId} average={true} width='.9rem' height='.9rem' borderRadius='50%' />
      </div>
    </div>
    <div >
      {props.entry.entries.map(f => <ItemLevel2 key={f} entryId={f} />)}
    </div>
  </div>
))

const ItemLevel2 = connect(stateToProps)(props => {
  return props.entry.visible ? <div className='pl-2 mb-3 overflow-hidden ' style={{borderBottom: '1px solid lightgrey'}}>
    {props.entry.entries.length ? <h6 className='text-center mt-3 mb-4'>{props.entry.label}</h6> : null }
    {!props.entry.entries.length &&
      <div className="row pb-3">
        <div className="col-sm-12 col-md-5">
          <span>{props.entry.label}</span>
        </div>
        <div className="col-sm-12 mt-sm-3 col-md-7">
        <Score edit={true} entryId={props.entryId} width='.8rem' height='.6rem' borderRadius='5%' datum={true}/>
        </div>
      </div>}
    <div >
      {props.entry.entries.map(e => <ItemLevel3 key={e} entryId={e} />)}
    </div>
  </div> : <div></div>
})

const ItemLevel3 = connect(stateToProps)(props => {
  return props.entry.visible ? <div className='row mt-2 p-2'>
    <div className='col-xs-6 col-md-12 col-lg-6 mb-sm-2 pr-3'>
      {props.entry.label}
    </div>
    <div className='col-xs-6 col-md-12 col-lg-6 mt-2 '>
      <Score edit={true} entryId={props.entryId} width='.8rem' height='.6rem' borderRadius='5%' datum={true} />
    </div>
  </div> : <div></div>
})

export default Item
