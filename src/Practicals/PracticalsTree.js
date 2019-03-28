import React from 'react'
import PracticalsItem from './PracticalsItem'
import tree from './tree'
import PracticalsScore from './PracticalsScore';

const PracticalsTree = props => (
    <div style={{fontSize: '.9rem'}}>
        <div className="card p-2">
            <h5>Mein Level</h5>
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