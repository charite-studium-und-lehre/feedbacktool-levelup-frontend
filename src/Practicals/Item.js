import React from 'react'
import { connect } from 'react-redux'
import { SlideDown } from 'react-slidedown'
import makeExtendable from '../Core/makeExtendable'
import Score from './Score'
import { selectors } from './Store'


const stateToProps = (state, ownProps) => ({ entry: selectors.getItemById(state, ownProps.entryId) })

const Item = connect(stateToProps)(makeExtendable(props =>
    <div className="mt-2">
      <div className={`p-2 ${props.level === 3 ? 'ml-4': props.level === 2 ? 'ml-3' : '' }`} style={{backgroundColor: `hsla(83, 35%, ${(props.level + 2 ) / 7 * 100}%,.8)`, border:'1px solid black'}}>
        <div  className="row">
          <div className={`col-xl-${props.level === 1 ? '12' : '6'} pr-0`}>
            <div className={props.level <= 2 ? "font-weight-bold" : ""} style={{fontSize: '.8rem', textAlign:`${props.level === 1 ? 'center': 'left'}`}}>
              {props.level}- {props.entry.label}
            </div>
          </div>
          <div className="col-xl-6 p-0"> 
         <Score edit={!props.entry.entries.length} entryId={props.entryId} width={ props.level === 1 ? '1rem':props.level === 2 ? '.85rem': '.8rem'} height={ props.level === 1 ? '1rem': props.level === 2 ? '.85rem': '.6rem'} borderRadius= {props.level <= 2 ? '50%': '5%'}/>
          </div>
          <div className='col-md-12'>
          {props.entry.entries.map(f => <Item key={f} entryId={f} level={props.level + 1} /> )}
        </div>
        </div>
      </div>
      <div>
      </div>

    </div>
))

export default Item