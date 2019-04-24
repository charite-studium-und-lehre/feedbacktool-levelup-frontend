import React, { Component } from 'react'
import _ from 'lodash'
import seedrandom from 'seedrandom'
import { randomUniform } from 'd3-random'
import { OrdinalChart } from '../Charting/Chart'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'
const exams = ['alle MCs', 'letzter PTM']

const random = d => randomUniform.source(seedrandom(d))
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
        const data = exams.map((d, i) => ({ x:d, y: [this.props.data[i].correct, this.props.data[i].questions]}))
        return (
            <div className="card m-2 flex-grow-1 with-shadow" style={{width: '20rem'}}>
                <div ref={this.node} className={`card-body ${this.state.flash ? 'bg-primary' : ''}`} style={{transition: '5s'}}>
                    <span className="font-weight-bold">{this.props.title}</span>
                    <div className="p-4">
                        <OrdinalChart style={{height:'15rem'}} xDomain={exams} yDomain={[0,30]}>
                            <YAxis label="gestellte vs. richtige Fragen" ticks={{count: 4}} />
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