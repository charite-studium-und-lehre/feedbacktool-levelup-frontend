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
    <div style={{cursor: 'pointer'}}>
      <FontAwesomeIcon onClick={() => props.toggleExtended()} className={props.extended ? 'text-primary' : 'text-muted'} style={{fontSize: '1rem'}} icon={faChartLine} />
    </div>
    <SlideDown className="animated fast">
    {props.extended &&
    <div style={{height: '6rem', overflow: 'hidden'}}>
        <ProgressChart entryId={props.entryId} />
    </div>
    }
    </SlideDown>
  </div>
)

const stateToProps = (state, ownProps) => ({ entry: selectors.getItemById(state, ownProps.entryId) })

const Item = connect(stateToProps)(makeExtendable(props =>
    <div className="mt-2">
      {props.level !== 1 && <div className="p-2">
        <div onClick={() => props.toggleExtended()} className="row">
          <div className={`col-xl-${props.level === 3 ? '6' : '12'} pr-0`}>
            <div className={props.level === 2 ? "font-weight-bold" : ""} style={{fontSize: '.8rem'}}>
              {props.entry.label}
            </div>
          </div>
          {!props.entry.entries.length && <div className="col-xl-6 p-0">
            <Score edit={!props.entry.entries.length && props.edit} entryId={props.entryId} />
          </div>}
        </div>
        {props.entry.hasGraph && <Chart entryId={props.entryId} />}
      </div>}
      {props.entry.entries && 
      <SlideDown className="animated fast">
        <div className={props.level === 2 ? "pl-4" : ""}>
          {props.entry.entries.map(f => <Item key={f} edit={props.edit} extended={false} entryId={f} level={props.level + 1} /> )}
        </div>
      </SlideDown>
      }
    </div>
))

export default Item