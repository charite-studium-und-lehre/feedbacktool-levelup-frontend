import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import PointGraph from '../../Charting/PointGraph'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'
import InfoOverlay from './InfoOverlay'
import Chart from './Chart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const day= 1000 * 60 * 60 * 24
const year = day * 365

class Timeline extends Component {
    constructor({props}) {
        super(props)
        this.state = {
            timerange: [null, new Date()],
            oldest: null, 
            newest: new Date(), 
            selectedPoint: null 
        }       
    }
    
    initTimerange(oldest) {
        this.setState({ oldest, timerange: [oldest, this.state.timerange[1]] })
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
        const {t} = this.props
        const LegendText = Legends(t).Dashboard.Timeline
        return (
            <div className="card with-border" style={{overflow: 'hidden'}}>
                <div className="card-body">
                    <Legend title={LegendText.title}>{LegendText.text}</Legend>
                    <div className="p-3 pl-4 position-relative">
                        <Chart oldest={this.state.oldest} newest={this.state.newest} initTimerange={d => this.initTimerange(d)}>
                        {this.props.data.map((g, i) => (
                            <PointGraph
                                selectedPoint={this.state.selectedPoint ? this.state.selectedPoint.x : 0} 
                                onClick={ point => this.zoomIn(point, g) } 
                                key={i} data={g.data.map(d => ({ ...d, y: d.result }))} 
                                color={`hsla(${g.color}, 50%, 50%, .75)`} />
                        ))}
                        </Chart>
                        <InfoOverlay 
                            visible={!!this.state.selectedPoint}
                            graph={this.state.graph || {}}
                            onClose={() => this.zoomIn()}
                            selectedPoint={this.state.selectedPoint || {label: ''}}>
                        </InfoOverlay>
                    </div>
                    <div className="">
                        <span className="text-primary ml-3" style={{fontSize: '.8rem', cursor:'pointer', fontSize:'16px'}} onClick={() => this.zoomOut()}><FontAwesomeIcon icon={ faChevronLeft} /><FontAwesomeIcon icon={ faChevronLeft} /></span>

                    </div>
                    <div className="mt-2">
                        {this.props.data.map(g => (
                            <span key={g.label} className="m-2 d-inline-block" style={{fontSize: '.8rem', color: `hsl(${g.color}, 50%, 50%)`}} >{g.label}</span>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Timeline)
