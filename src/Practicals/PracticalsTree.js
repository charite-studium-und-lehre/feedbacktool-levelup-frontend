import React from 'react'
import _ from 'lodash'
import PracticalsTreeItem from './PracticalsTreeItem'
import tree from './tree'
import PracticalsScore from './PracticalsScore';

const PracticalsTree = props => (
  <div style={{fontSize: '.9rem'}}>
    <div className="row">
      <div className="card w-100 p-2 m-4">
        <span></span>
        <PracticalsScore entry={tree} />
      </div>
    </div>
    <div className="row">
        {tree.entries.map(e =>
          <div className="col-md-6">
            <PracticalsTreeItem extended={false} entry={e} />
          </div>
        )}
    </div>
  </div>
)

export default PracticalsTree