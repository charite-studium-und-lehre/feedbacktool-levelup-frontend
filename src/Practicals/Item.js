import React from 'react'
import { connect } from 'react-redux'
import makeExtendable from '../Core/makeExtendable'
import Score from './Score'
import { selectors } from './Store'


const stateToProps = (state, ownProps) => ({ entry: selectors.getItemById(state, ownProps.entryId) })

const Item = connect(stateToProps)(makeExtendable(props =>
  <div className="mt-2 ">
    <div className={`p-2 pb-4 ${props.level === 3 ? 'ml-4' : props.level === 2 ? 'ml-3' : ''}`} style={{ backgroundColor: 'rgb(210, 220, 152)', boxShadow :' 2px 2px  10px rgb(3, 31, 56)'}}>
      <div className="row">
        <div className={`col-xl-${props.level <= 2 ? '12' : '6'} pr-0`}>
          <div className={props.level <= 2 ? "font-weight-bold mb-2" : "" } style={{ fontSize: '.8rem', textAlign: `${props.level <= 2 ? 'center' : 'left'}` }}>
            {props.level}- {props.entry.label}
          </div>
        </div>
        <div className='col-lg-6' style={{ margin: props.level <= 2 ? '.5rem auto' : '' }}>
          <Score edit={!props.entry.entries.length} entryId={props.entryId} width={props.level === 1 ? '1rem' : props.level === 2 ? '.8rem' : '.8rem'} height={props.level === 1 ? '1rem' : props.level === 2 ? '.85rem' : '.6rem'} borderRadius={props.level <= 2 ? '50%' : '5%'} />
        </div>
        <div className='col-md-12'>
          {props.entry.entries.map(f => <Item key={f} entryId={f} level={props.level + 1} />)}
        </div>
      </div>
    </div>
  </div>
))

export default Item