import React, { Component } from 'react'
import _ from 'lodash'
import { SlideDown } from 'react-slidedown'
import makeExtendable from '../Core/makeExtendable'
import tree from './tree'

const flattenTree = entry => entry.entries ? _.flatMap(entry.entries, e => flattenTree(e)) : [entry]
const getScore = (entry, p) => _.sumBy(flattenTree(entry), e => _.property(p)(e) || 0)
const getMaxScore = entry => flattenTree(entry).length * 6

const PracticalsTreeItem = makeExtendable(props =>
    <div className="card p-2 m-2">
      <div onClick={() => props.toggleExtended()}>
        <span className="font-weight-bold" style={{fontSize: '.8rem'}}>{props.entry.label}</span>
        <div>
          <span className="text-danger mr-2">{getScore(props.entry, 'done')} / {getMaxScore(props.entry)}</span>
          <span className="text-info">{getScore(props.entry, 'confident')} / {getMaxScore(props.entry)}</span>
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


class PracticalsTree extends Component {
  render() {
    return (
      <div className="row">
          {tree.entries.map(e =>
            <div className="col-md-6">
              <PracticalsTreeItem extended={false} entry={e} />
            </div>
          )}
      </div>
    )
  }
}
export default PracticalsTree


