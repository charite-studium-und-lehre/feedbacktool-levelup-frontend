import React from 'react'
import { SlideDown } from 'react-slidedown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../Core/makeExtendable'
import PracticalsScore from './PracticalsScore'
import PracticalsChart from './PracticalsChart'

const Chart = makeExtendable(props => 
  <div>
    <div className="text-right">
      <FontAwesomeIcon onClick={() => props.toggleExtended()} className={props.extended ? 'text-primary' : 'text-muted'} style={{fontSize: '.8rem'}} icon={faChartLine} />
    </div>
    <SlideDown className="animated fast">
    {props.extended &&
    <div style={{height: '6rem', overflow: 'hidden'}}>
        <PracticalsChart graphs={[1]} />
    </div>
    }
    </SlideDown>
  </div>
)

const PracticalsItem = makeExtendable(props =>
    <div className="mt-2 p-1">
      <div className="text-center">
        <span>{props.entry.label}</span>
      </div>
    </div>
)

export default PracticalsItem