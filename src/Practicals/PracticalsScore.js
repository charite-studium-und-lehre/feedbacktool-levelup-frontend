import React from 'react'
import _ from 'lodash'

const flattenTree = entry => entry.entries ? _.flatMap(entry.entries, e => flattenTree(e)) : [entry]
const getScore = (entry, p) => _.sumBy(flattenTree(entry), e => _.property(p)(e) || _.random(0,6))
const getMean = (entry, p) => _.round(_.meanBy(flattenTree(entry), e => _.property(p)(e) || _.random(0,6)), 1)
const getMaxScore = entry => flattenTree(entry).length * 6

const PracticalsScore = props => (
    <div className="row text-center text-danger">
        <div className="col-6 pr-0">
            <div className="font-weight-bold" style={{fontSize: '1.7rem'}}>{getMean(props.entry, 'done')}</div>
            {props.headings && <span >Habe ich gemacht</span>}
            </div>
        <div className="col-6 pl-0 text-success">
            <div className="font-weight-bold" style={{fontSize: '1.7rem'}}>{getMean(props.entry, 'confident')}</div>
            {props.headings && <span >Traue ich mir zu</span>}
        </div>
    </div>
)

export default PracticalsScore