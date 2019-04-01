import React from 'react'
import _ from 'lodash'
import PracticalsChart from './PracticalsChart'
import PracticalsScore from './PracticalsScore'

class PracticalsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedEntry: null }
  }

  selectEntry(selectedEntry) {
    this.setState({ selectedEntry })
  }

  render() {
    return <div className="mx-3">
      <div className="text-center mb-1">
        <span className="font-weight-bold">{this.props.entry.label}</span>
      </div>
      <div className="m-2" style={{height: '16rem'}}>
        <PracticalsChart data={this.props.entry.entries} selectEntry={e => this.selectEntry(e)}></PracticalsChart>
      </div>
      {this.state.selectedEntry &&
      <div className="m-2 text-center">
        <PracticalsScore entry={this.state.selectedEntry} />
        <span className="font-weight-bold">{this.state.selectedEntry.label}</span>
      </div>
      }
    </div>
  }
}

export default PracticalsItem