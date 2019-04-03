import React from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const flattenTree = entry => entry.entries ? _.flatMap(entry.entries, e => flattenTree(e)) : [entry]
const getScore = (entry, p) => _.sumBy(flattenTree(entry), e => _.property(p)(e) || _.random(0,6))
const getMean = (entry, p) => _.round(_.meanBy(flattenTree(entry), e => _.property(p)(e) || _.random(0,6)), 1)
const getMaxScore = entry => flattenTree(entry).length * 6

const Score = props => (
    <div className="m-auto">
        {props.edit &&
        <FontAwesomeIcon icon={faMinusCircle} className="text-muted mx-1" onClick={() => props.set(Math.max(_.property(props.value)(props.entry) - 1, 0)) }/>
        }
        <span className="font-weight-bold" style={{fontSize: '1.7rem'}}>{getMean(props.entry, props.value)}</span>
        {props.edit &&
        <FontAwesomeIcon icon={faPlusCircle} className="text-muted mx-1" onClick={() => props.set(Math.min(_.property(props.value)(props.entry) + 1, 6)) }/>
        }
    </div>
)

const PracticalsScore = props => (
    <div className="row text-center text-danger">
        <div className="col-6 pr-0 text-danger">
            <Score set={v => { props.entry.done = v; props.updateEntry(props.entry) }} edit={props.edit} value="done" entry={props.entry} />
            {props.headings && <span >Habe ich gemacht</span>}
        </div>
        <div className="col-6 pl-0 text-success">
            <Score set={v => { props.entry.confident = v; props.updateEntry(props.entry) }} edit={props.edit} value="confident" entry={props.entry} />
            {props.headings && <span >Traue ich mir zu</span>}
        </div>
    </div>
)

export default PracticalsScore