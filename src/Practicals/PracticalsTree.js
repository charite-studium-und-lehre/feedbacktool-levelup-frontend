import React from 'react'
import PracticalsItem from './PracticalsItem'
import tree from './tree'
import PracticalsScore from './PracticalsScore';

const PracticalsTree = props => (
  <div style={{fontSize: '.9rem'}}>
        <div className="card p-2">
          <div className="row">
            <div className="col-7 pr-0">
              <h5>Mein Level</h5>
            </div>
            <div className="col-4 p-0">
              
            </div>
          </div>
          <PracticalsScore headings={true} entry={tree} />
    </div>
    <div className="row">
        {tree.entries.map(e =>
          <div key={e.label} className="col-md-12">
            <PracticalsItem extended={false} entry={e} level={1} />
          </div>
        )}
    </div>
  </div>
)

export default PracticalsTree