import React from 'react'
import { SlideDown } from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import PracticalsScore from './PracticalsScore'
import PracticalsChart from './PracticalsChart'

const Chart = makeExtendable(props => 
    <div className="float-right">
        <FontAwesomeIcon 
            onClick={e => {props.toggleExtended(); e.stopPropagation(); } }
            className={props.extended ? 'text-primary' : 'text-muted'}
            style={{fontSize: '1.3rem'}}
            icon={faChartLine} />
        {/* <PracticalsChart graphs={[1,2]}/> */}
    </div>
)

const PracticalsItem = makeExtendable(props =>
    <div className="mt-2">
      <div className="p-2" style={{backgroundColor: `hsla(83, 35%, ${(props.level + 3) / 7 * 100}%,.7)`}}>
        <div onClick={() => props.toggleExtended()} className="row">
          <div className="col-7 pr-0">
            <div className="font-weight-bold" style={{fontSize: '.8rem'}}>
              {props.entry.label}
            </div>
          </div>
          {props.entry.hasGraph && false && <Chart extended={false} />}
          <div className="col-4 p-0">
            <PracticalsScore entry={props.entry} />
          </div>
          <div className="col-1 pl-0" style={{color: 'rgba(0,0,0,.6)'}}>
            {props.entry.entries && <FontAwesomeIcon style={{fontSize: '.8rem'}} icon={props.extended ? faChevronDown : faChevronRight} /> }
          </div>
        </div>
      </div>
      {props.entry.entries && <SlideDown className="animated fast" >
        {props.extended && 
        <div className="pl-2">
          {props.entry.entries.map(f => <PracticalsItem extended={false} entry={f} level={props.level + 1} /> )}
        </div>
        }
      </SlideDown>
      }
    </div>
)

export default PracticalsItem