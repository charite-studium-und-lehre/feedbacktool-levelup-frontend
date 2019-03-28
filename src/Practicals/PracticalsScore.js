import React from 'react'
import _ from 'lodash'

const flattenTree = entry => entry.entries ? _.flatMap(entry.entries, e => flattenTree(e)) : [entry]
const getScore = (entry, p) => _.sumBy(flattenTree(entry), e => _.property(p)(e) || 0)
const getMaxScore = entry => flattenTree(entry).length * 6

const PracticalsScore = props => (
    <div className="row">
        <div className="col-md-6">
            <span>Habe gemacht: </span><span className="text-danger mr-2">{getScore(props.entry, 'done')} / {getMaxScore(props.entry)}</span>
        </div>
        <div className="col-md-6">
            Traue mir zu: <span className="text-info">{getScore(props.entry, 'confident')} / {getMaxScore(props.entry)}</span>
        </div>
    </div>
)

export default PracticalsScore