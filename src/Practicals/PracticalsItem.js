import React from 'react'
import PracticalsChart from './PracticalsChart'

const PracticalsItem = props => (
    <div className="mx-3">
      <div className="text-center">
        <span className="font-weight-bold">{props.entry.label}</span>
      </div>
      <div className="m-4" style={{height: '20rem'}}>
        <PracticalsChart></PracticalsChart>
      </div>
    </div>
)

export default PracticalsItem