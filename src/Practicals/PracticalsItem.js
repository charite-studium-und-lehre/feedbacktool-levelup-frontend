import React from 'react'
import _ from 'lodash'
import PracticalsChart from './PracticalsChart'

class PracticalsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedEntry: props.entry }
  }

  selectEntry() {

  }

  render() {
    return <div className="mx-3">
      <div className="text-center mb-1">
        <span className="font-weight-bold">{this.props.entry.label}</span>
      </div>
      <div className="m-2" style={{height: '16rem'}}>
        <PracticalsChart data={this.props.entry.entries} selectEntry={this.selectEntry}></PracticalsChart>
      </div>
    </div>
  }
}

export default PracticalsItem