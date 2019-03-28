import React from 'react'
import { SlideDown } from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import PracticalsScore from './PracticalsScore'
import PracticalsChart from './PracticalsChart'

const Chart = makeExtendable(props => 
    <div>
        <FontAwesomeIcon 
            onClick={() => props.toggleExtended()}
            className={props.extended ? 'text-primary' : 'text-muted'}
            style={{fontSize: '1.3rem'}}
            icon={faChartLine} />
        {/* <PracticalsChart graphs={[1,2]}/> */}
    </div>
)

const PracticalsTreeItem = makeExtendable(props =>
    <div className="card p-2 m-2">
      <div onClick={() => props.toggleExtended()}>
        {props.entry.hasGraph && <Chart />}
        <span className="font-weight-bold" style={{fontSize: '.8rem'}}>{props.entry.label}</span>
        <PracticalsScore entry={props.entry} />
      </div>
      {props.entry.entries && <SlideDown className="animated fast" >
        {props.extended && 
        <div>
          <hr />
          {props.entry.entries.map(f => <PracticalsTreeItem extended={false} entry={f} /> )}
        </div>
        }
      </SlideDown>
      }
    </div>
)

export default PracticalsTreeItem