import React, { Component } from 'react'
import _ from 'lodash'
import { SlideDown } from 'react-slidedown'
import makeExtendable from '../Core/makeExtendable'
import practicalsTree from './PracticalsTree'

const computeValue = entry => {
  //return entry.entries ? _.sum(computeValue(entry.entries) : entry.value)
  return 1
}

const PracticalsTreeItem = makeExtendable(props =>
    <div className="card p-2 m-2">
      <div onClick={() => props.toggleExtended()}>
        <span className="font-weight-bold" style={{fontSize: '.8rem'}}>{props.entry.label}</span>
        <div>
          <span className="text-danger mr-2">{computeValue(props.entry)} / 6</span>
          <span className="text-info">2 / 6</span>
        </div>
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


class PracticalsItem extends Component {
  render() {
    return (
      <div className="PracticalsItem row">
          {practicalsTree.entries.map(e =>
            <div className="col-md-6">
            <PracticalsTreeItem extended={false} entry={e} />
            </div>
          )}
      </div>
    )
  }
}
export default PracticalsItem;


