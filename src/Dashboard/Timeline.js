import React, { Component } from 'react'
import { TimeChart } from '../Charting/Chart'
import PointGraph from '../Charting/PointGraph'
import Legend from '../Charting/Legend'
import { XAxis, YAxis } from '../Charting/Axis'
import Legends from '../Core/LegendTexts'
const LegendText = Legends.Dashboard.Timeline
const year = 1000 * 60 * 60 * 24 * 365
class Timeline extends Component {
    constructor(props) {
        super(props)
        this.state = { oldest: new Date(Date.now() - year * 3), newest: new Date(), selectedPoint: null }
    }

    zoomIn(point) {
        const newState = this.state.selectedPoint ? 
            { oldest: new Date(Date.now() - year * 3), newest: new Date(), selectedPoint: null } :
            { selectedPoint: point, oldest: new Date(point.x.getTime() - 1000 * 60 * 60 * 24 * 7 * 2), newest: new Date(point.x.getTime() + 1000 * 60 * 60 * 24 * 7 * 2)  }
        this.setState(newState)
    }

    zoomOut() {
        this.setState( { oldest: new Date(this.state.oldest.getTime() - year) })
    }

    render() {
        return (
            <div className="card with-border">
                <div className="card-body">
                    <Legend title={LegendText.title}>{LegendText.text}</Legend>
                    <div className="p-3" style={{overflow: 'hidden'}}>
                        <TimeChart xDomain={[this.state.oldest, this.state.newest]} yDomain={[0,100]}>
                            {this.props.data.map((g, i) => (
                                <PointGraph onClick={(point) => this.zoomIn(point)} key={i} data={g.data.map(d => ({ ...d, y: d.result }))} color={`hsla(${g.color}, 50%, 50%, .75)`} />
                            ))}
                            <YAxis label="% richtig" />
                            <XAxis />
                        </TimeChart>
                    </div>
                    <div className="mt-2">
                        {this.props.data.map(g => (
                            <span key={g.label} className="m-3 d-inline-block" style={{fontSize: '.8rem', color: `hsl(${g.color}, 50%, 50%)`}} >{g.label}</span>
                        ))}
                    </div>
                    <div className="">
                        <a className="text-primary" style={{fontSize: '.8rem', cursor:'pointer'}} onClick={() => this.zoomOut()}>früher</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline
