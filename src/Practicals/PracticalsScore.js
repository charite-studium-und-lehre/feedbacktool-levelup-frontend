import React from 'react'
import _ from 'lodash'

const flattenTree = entry => entry.entries ? _.flatMap(entry.entries, e => flattenTree(e)) : [entry]
const getScore = (entry, p) => _.sumBy(flattenTree(entry), e => _.property(p)(e) || _.random(0,6))
const getMaxScore = entry => flattenTree(entry).length * 6

const PracticalsScore = props => (
    <div className="row">
        <div className="col-6 pr-0">
            {props.headings && 
            <span >Habe ich gemacht: </span>
            }
            <span className="text-danger font-weight-bold">{getScore(props.entry, 'done')} / {getMaxScore(props.entry)}</span>
        </div>
        <div className="col-6 pl-0">
            {props.headings && 
            <span >Traue ich mir zu: </span>
            }
            <span className="text-success font-weight-bold ">{getScore(props.entry, 'confident')} / {getMaxScore(props.entry)}</span>
        </div>
    </div>
)

export default PracticalsScore