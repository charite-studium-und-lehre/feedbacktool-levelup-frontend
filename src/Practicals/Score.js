import React from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

const flattenTree = entry => entry.entries ? _.flatMap(entry.entries, e => flattenTree(e)) : [entry]
const getScore = (entry, p) => _.sumBy(flattenTree(entry), e => _.property(p)(e) || 0)
const getMaxScore = entry => flattenTree(entry).length * 5

const Numbers = props => (
    <span>
        {props.edit &&
        <FontAwesomeIcon icon={faMinusCircle} className="text-muted mr-1" onClick={() => props.updateValue(props.entry, props.value, -1) }/>
        }
        <span className="font-weight-bold">{getScore(props.entry, props.value)} / {getMaxScore(props.entry)}</span>
        {props.edit &&
        <FontAwesomeIcon icon={faPlusCircle} className="text-muted ml-1" onClick={() => props.updateValue(props.entry, props.value, 1) }/>
        }
    </span>
)
const Score = props => (
    <div className="row text-center">
        <div className="col-6 p-0 text-danger">
            <Numbers edit={props.edit} value="done" updateValue={props.updateValue} entry={props.entry} />
            {props.headings && 
            <div >Habe ich gemacht</div>
            }
        </div>
        <div className="col-6 p-0 text-success">
            <Numbers edit={props.edit} value="confident" updateValue={props.updateValue} entry={props.entry} />
            {props.headings && 
            <div >Traue ich mir zu</div>
            }
        </div>
    </div>
)

export default Score