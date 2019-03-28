import React, { Component } from 'react'
import { TimeChart } from '../Charting/Chart'
import PointGraph from '../Charting/PointGraph'
import Legend from '../Charting/Legend'
import { XAxis, YAxis } from '../Charting/Axis'
import Legends from '../Core/LegendTexts'
import InfoOverlay from './InfoOverlay'

const LegendText = Legends.Dashboard.Timeline
const day= 1000 * 60 * 60 * 24
const year = day * 365

class Timeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timerange: [new Date(Date.now() - year * 3), new Date()],
            oldest: new Date(Date.now() - year * 3), 
            newest: new Date(), 
            selectedPoint: null 
        }
    }

    zoomIn(point, graph) {
        const newState = this.state.selectedPoint ? 
            { oldest: this.state.timerange[0], newest: this.state.timerange[1], selectedPoint: null, graph: null } :
            { selectedPoint: point, oldest: new Date(point.x.getTime() - day * 1), newest: new Date(point.x.getTime() + day * 7 * 2), graph }
        this.setState(newState)
    }

    zoomOut() {
        const t = new Date(this.state.timerange[0].getTime() - year)
        this.setState( { 
            timerange: [t, new Date()],
            oldest: t, 
            newest: new Date(), 
            selectedPoint: null 
        })
    }

    render() {
        return (
            <div className="card with-border">
                <div className="card-body">
                    <Legend title={LegendText.title}>{LegendText.text}</Legend>
                    <div className="p-3 pl-4 position-relative" style={{overflow: 'hidden'}}>
                        <TimeChart xDomain={[this.state.oldest, this.state.newest]} yDomain={[0,100]}>
                            <YAxis label="% richtig" />
                            <XAxis ticks={{count: 5}} />
                            {this.props.data.map((g, i) => (
                                <PointGraph 
                                    selectedPoint={this.state.selectedPoint ? this.state.selectedPoint.x : 0} 
                                    onClick={ point => this.zoomIn(point, g) } 
                                    key={i} data={g.data.map(d => ({ ...d, y: d.result }))} 
                                    color={`hsla(${g.color}, 50%, 50%, .75)`} />
                            ))}
                        </TimeChart>
                        <InfoOverlay 
                            visible={!!this.state.selectedPoint}
                            graph={this.state.graph || {}}
                            onClose={() => this.zoomIn()}
                            selectedPoint={this.state.selectedPoint || {label: ''}}>
                        </InfoOverlay>
                    </div>
                    <div className="mt-2">
                        {this.props.data.map(g => (
                            <span key={g.label} className="m-2 d-inline-block" style={{fontSize: '.9rem', color: `hsl(${g.color}, 50%, 50%)`}} >{g.label}</span>
                        ))}
                    </div>
                    <div className="">
                        <span className="text-primary" style={{fontSize: '.8rem', cursor:'pointer'}} onClick={() => this.zoomOut()}>Mehr anzeigen</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline
