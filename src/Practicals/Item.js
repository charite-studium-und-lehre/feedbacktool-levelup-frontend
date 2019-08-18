import React from 'react'
import { connect } from 'react-redux'
import { SlideDown } from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import Score from './Score'
import ProgressChart from './ProgressChart'
import { selectors } from './Store'

const Chart = makeExtendable(props => 
  <div>
    <div onClick={() => props.toggleExtended()} style={{cursor: 'pointer', textAlign: 'right'}}>
      <FontAwesomeIcon  className={props.extended ? 'text-muted' : 'text-info'} style={{fontSize: '1.2rem', fontWeight:'bold'}} icon={faChartLine} />
    </div>
    <SlideDown className="animated fast">
    {props.extended &&
    <div className='m-auto'  style={{height: '6rem', overflow: 'hidden', maxWidth:'40rem'}}>
        <ProgressChart entryId={props.entryId} />
    </div>
    }
    </SlideDown>
  </div>
)

const stateToProps = (state, ownProps) => ({ entry: selectors.getItemById(state, ownProps.entryId) })

const Item = connect(stateToProps)(makeExtendable(props =>
    <div className="mt-2">
      {<div className={`p-2 ${props.level === 3 ? 'ml-4': props.level === 2 ? 'ml-3' : '' }`} style={{backgroundColor: `hsla(83, 35%, ${(props.level + 2 ) / 7 * 100}%,.8)`}}>
        <div onClick={() => props.toggleExtended()} className="row">
          <div className={`col-xl-${props.level === 3 ? '6' : '6'} pr-0`}>
            <div className={props.level <= 2 ? "font-weight-bold" : ""} style={{fontSize: '.8rem'}}>
              {props.level}- {props.entry.label}
            </div>
          </div>
          { <div className="col-xl-6 p-0"> 
         <Score edit={!props.entry.entries.length && props.edit} entryId={props.entryId} width={ props.level === 1 ? '1.1rem':props.level === 2 ? '.85rem': '.8rem'} height={ props.level === 1 ? '1.1rem': props.level === 2 ? '.85rem': '.6rem'} borderRadius= {props.level <= 2 ? '50%': '5%'}/>
          </div>}
        </div>
        {props.entry.hasGraph && <Chart entryId={props.entryId} />}
      </div>}
      {props.entry.entries && 
      <SlideDown className="animated fast">
        <div className={props.level === 2 ? "pl-3" : ""}>
          { props.entry.entries.map(f => <Item key={f} edit={props.edit} extended={false} entryId={f} level={props.level + 1} /> )}
        </div>
      </SlideDown>
      }
    </div>
))

export default Item