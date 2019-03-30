import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import PracticalsScore from './PracticalsScore'
import PracticalsChart from './PracticalsChart'

const Chart = props => (
  <div className="p-2">
    <PracticalsChart graphs={[1]} />
  </div>
)

const PracticalsItem = props => (
    <div className="m-2">
      <div className="text-center">
        <span className="font-weight-bold">{props.entry.label}</span>
      </div>
      <Chart></Chart>
    </div>
)

export default PracticalsItem