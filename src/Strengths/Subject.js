import React, { Component } from 'react'
import _ from 'lodash'
import { OrdinalChart } from '../Charting/Chart'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'
const exams = ['alle MCs', 'letzter PTM']

class Subject extends Component {
    constructor(props) {
        super(props)
        this.state = { mode: "current", flash: props.flash }
        this.node = React.createRef()
    }
    
    componentDidMount() {
        if(this.state.flash) window.scrollTo(0, this.node.current.getBoundingClientRect().y + 70)
        this.setState({ flash: false })
    }

    setMode(mode) {
        this.setState({ mode })
    }

    render() {
        const data = exams.map(d => ({ x:d, y: _.range(2).map(() => _.random(0,20) )}))
        return (
            <div className="card m-2 flex-grow-1 with-shadow" style={{width: '20rem'}}>
                <div ref={this.node} className={`card-body ${this.state.flash ? 'bg-primary' : ''}`} style={{transition: '5s'}}>
                    <h4>{this.props.title}</h4>
                    {/* <div style={{textAlign: 'right'}}>
                        <label className="m-0 mr-2"><input type="radio" name={`subject-${this.props.title}-mode`} checked={this.state.mode === 'current'} onChange={() => this.setMode('current')} className="mx-2" />aktuell</label>
                        <label><input type="radio" name={`subject-${this.props.title}-mode`} checked={this.state.mode === 'timeline'} onChange={() => this.setMode('timeline')} className="mx-2" />zeitl. Verlauf</label>
                    </div> */}
                    <div className="p-4">
                        <OrdinalChart style={{height:'15rem'}} xDomain={exams} yDomain={[0,30]}>
                            <YAxis label="gestellte vs. richtige" ticks={{count: 4}} />
                            <XAxis />
                            <BarGraph labels data={ data } color="hsla(250, 100%, 50%, .6)" />
                        </OrdinalChart>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subject