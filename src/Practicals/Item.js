import React from 'react'
import { connect } from 'react-redux'
import { SlideDown } from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
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
      <div className="p-2" style={{backgroundColor: `hsla(83, 35%, ${(props.level + 3) / 7 * 100}%,.7)`}}>
        <div onClick={() => props.toggleExtended()} className="row">
          <div className="col-6 pr-0">
            <div className="font-weight-bold" style={{fontSize: '.8rem'}}>
              {props.entry.label}
              <div style={{color: 'rgba(0,0,0,.6)', cursor: 'pointer'}}>
              {props.entry.entries.length ? <FontAwesomeIcon style={{fontSize: '.9rem'}} icon={props.extended ? faMinus : faPlus} /> : null}
          </div>
            </div>
          </div>
          <div className="col-6 p-0">
            <Score edit={!props.entry.entries.length && props.edit} entryId={props.entryId} />
          </div>
       
        </div>
        {props.entry.hasGraph && <Chart entryId={props.entryId} />}
      </div>
      {props.entry.entries && 
      <SlideDown className="animated fast" >
        {props.extended && 
        <div className="pl-2">
          {props.entry.entries.map(f => <Item key={f} edit={props.edit} extended={false} entryId={f} level={props.level + 1} /> )}
        </div>
        }
      </SlideDown>
      }
    </div>
))

export default Item