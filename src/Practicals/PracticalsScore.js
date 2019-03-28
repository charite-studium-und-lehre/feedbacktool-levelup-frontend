import React from 'react'
import _ from 'lodash'

const flattenTree = entry => entry.entries ? _.flatMap(entry.entries, e => flattenTree(e)) : [entry]
const getScore = (entry, p) => _.sumBy(flattenTree(entry), e => _.property(p)(e) || 0)
const getMaxScore = entry => flattenTree(entry).length * 6

const PracticalsScore = props => (
    <div className="row font-weight-bold">
        <div className="col-6">
            <span className="text-danger mr-2">{getScore(props.entry, 'done')} / {getMaxScore(props.entry)}</span>
        </div>
        <div className="col-6">
            <span className="text-success">{getScore(props.entry, 'confident')} / {getMaxScore(props.entry)}</span>
        </div>
    </div>
)

export default PracticalsScore