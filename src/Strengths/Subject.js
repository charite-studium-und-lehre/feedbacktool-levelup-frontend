import React, { Component } from 'react'
import _ from 'lodash'
import { TimeChart } from '../Charting/Chart'
import { XAxis, YAxis } from '../Charting/Axis'
import LineGraph from '../Charting/LineGraph'

class Subject extends Component {
    constructor(props) {
        super(props)
        this.state = { mode: "current", flash: props.flash }
        this.node = React.createRef()
    }
    
    componentDidMount() {
        if(this.state.flash) window.scrollTo(0, this.node.current.getBoundingClientRect().y)
        this.setState({ flash: false })
    }

    setMode(mode) {
        this.setState({ mode })
    }

    render() {
        return (
            <div className="card m-2 flex-grow-1" style={{width: '20rem', boxShadow: 'rgba(0,0,0,.2) 1px 1px 5px'}}>
                <div ref={this.node} className={`card-body ${this.state.flash ? 'bg-primary' : ''}`} style={{transition: '5s'}}>
                    <h4>{this.props.title}</h4>
                    {/* <div style={{textAlign: 'right'}}>
                        <label className="m-0 mr-2"><input type="radio" name={`subject-${this.props.title}-mode`} checked={this.state.mode === 'current'} onChange={() => this.setMode('current')} className="mx-2" />aktuell</label>
                        <label><input type="radio" name={`subject-${this.props.title}-mode`} checked={this.state.mode === 'timeline'} onChange={() => this.setMode('timeline')} className="mx-2" />zeitl. Verlauf</label>
                    </div> */}
                    <div className="p-4">
                        <TimeChart style={{height:'15rem'}} xDomain={[new Date(2014, 6, 15),new Date(2018, 6, 15)]} yDomain={[0,30]}>
                            <YAxis label="richtige Antworten" ticks={{count: 4}} />
                            <XAxis label="Semester" ticks={{count: 5}} />
                            <LineGraph data={new Array(4).fill(0).map((d,i) => ({ x:new Date(2014+i+1, 1, 1), y: _.random(0,20) })) } color="hsla(250, 100%, 50%, .6)" />
                        </TimeChart>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subject