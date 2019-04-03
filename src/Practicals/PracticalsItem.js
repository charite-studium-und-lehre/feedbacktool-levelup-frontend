import React from 'react'
import _ from 'lodash'
import PracticalsChart from './PracticalsChart'
import PracticalsScore from './PracticalsScore'

class PracticalsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedEntry: null, entries: props.entry.entries }
  }

  selectEntry(selectedEntry) {
    this.setState({ selectedEntry })
  }

  render() {
    return <div className="">
      <div className="text-center mb-3 px-4">
        <span className="font-weight-bold">{this.props.entry.label}</span>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card p-2 m-2">
              <PracticalsScore headings={true} entry={this.props.entry} />
          </div>
        </div>
      </div>
      <div className="m-4" style={{height: '16rem'}}>
        <PracticalsChart data={this.state.entries} selectEntry={e => this.selectEntry(e)}></PracticalsChart>
      </div>
      {this.state.selectedEntry &&
      <div className="m-2 text-center">
        <div className="card p-2 m-2">
          <PracticalsScore updateEntry={e => this.selectEntry(e)} edit={this.props.edit} entry={this.state.selectedEntry} />
          <span className="font-weight-bold">{this.state.selectedEntry.label}</span>
        </div>
      </div>
      }
    </div>
  }
}

export default PracticalsItem