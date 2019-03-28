import React,  { Component } from 'react'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import ChecklistItem from './ChecklistItem'

const getDone = entry => entry.isLeaf ? [entry.done] : _.flatMap(entry.entries, e => getDone(e))
const percentDone = t => _.mean(getDone(t))

class Checklist extends Component {
    static defaultProps = {
        onClick: () => {},
    }

    constructor(props) {
        super(props)
        this.state = { selected: false }
    }

    select() {
        this.props.onClick()
        this.setState({ selected: !this.state.selected })
    }

    render() {
        return this.props.data.isLeaf ? 
            <ChecklistItem label={this.props.data.label} done={this.props.data.done} /> :
            <div className={`card m-2 p-2 with-shadow animated ${this.props.className}`} onClick={() => this.isLeaf || this.select()}>
                <div className="d-flex">
                    <div style={{fontSize: '.75rem'}} className="flex-fill mr-2 mb-1 font-weight-bold">{this.props.data.label}</div>
                    <div><FontAwesomeIcon style={{color: percentDone(this.props.data) === 1 ? 'rgba(0,128,0,.6)' : 'lightgray'}} icon={percentDone(this.props.data) === 1 ? faCheckCircle : faTimesCircle} /></div>
                </div>
                {this.props.data.entries && this.props.data.entries.map((e,i) => <Checklist key={i} data={e} /> )}
            </div>
    }
}

export default Checklist