import React from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const flattenTree = entry => entry.entries ? _.flatMap(entry.entries, e => flattenTree(e)) : [entry]
const getScore = (entry, p) => _.sumBy(flattenTree(entry), e => _.property(p)(e) || 0)
const getMaxScore = entry => flattenTree(entry).length * 6

const Score = props => (
    <span>
        {props.edit &&
        <FontAwesomeIcon icon={faMinusCircle} className="text-muted mx-1" onClick={() => props.entry[props.value] = Math.max(_.property(props.value)(props.entry) - 1, 0) }/>
        }
        <span className="font-weight-bold">{getScore(props.entry, props.value)} / {getMaxScore(props.entry)}</span>
        {props.edit &&
        <FontAwesomeIcon icon={faPlusCircle} className="text-muted mx-1" onClick={() => props.entry[props.value] = Math.min(_.property(props.value)(props.entry) + 1, 6) }/>
        }
    </span>
)
const PracticalsScore = props => (
    <div className="row text-center">
        <div className="col-6 pr-0 text-danger">
            <Score edit={props.edit} value="done" entry={props.entry} />
            {props.headings && 
            <div >Habe ich gemacht</div>
            }
        </div>
        <div className="col-6 pl-0 text-success">
            <Score edit={props.edit} value="confident" className="" entry={props.entry} />
            {props.headings && 
            <div >Traue ich mir zu</div>
            }
        </div>
    </div>
)

export default PracticalsScore