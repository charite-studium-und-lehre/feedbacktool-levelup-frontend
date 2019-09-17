import React, { useState } from 'react'
import { connect } from 'react-redux'
import needsData from '../../Core/needsData'
import PointGraph from '../../Charting/PointGraph'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'
import InfoOverlay from './InfoOverlay'
import { selectors, actions } from './Store'
import Chart from './Chart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const day= 1000 * 60 * 60 * 24
const year = day * 365

const Timeline = props => {
    const [timerange, setTimerange] = useState([null, new Date()]),
    [oldest, setOldest] = useState(null),
    [newest, setNewest] = useState(new Date()),
    [selectedPoint, setSeletedPoint] = useState(null),
    [graph, setGraph] = useState(null)
    
    function initTimerange(oldest) {
        setOldest(oldest)
        setTimerange([ oldest, timerange[1] ])
    }
    
    function zoomOut() {
        setOldest(timerange[0])
        setNewest(timerange[1])
        setSeletedPoint(null)
        setGraph(null)
    }

    function zoomIn(point, graph) {
        setSeletedPoint(point)
        setOldest( new Date(point.x.getTime() - day * 1) )
        setNewest( new Date(point.x.getTime() + day * 7 * 2) )
        setGraph(graph)
    }
    
    function pan(amount) {
        const [ o, n ] = timerange.map(t => new Date(t.getTime() + amount))
        setTimerange([ o, n ])
        setOldest(o)
        setNewest(n)
        setSeletedPoint(null)
        setGraph(null)
    }

    const LegendText = Legends.Dashboard.Timeline
    return (
        <div className="card with-border" style={{overflow: 'hidden'}}>
            <div className="card-body">
                <Legend title={LegendText.title}>{LegendText.text}</Legend>
                <div className="p-3 pl-4 position-relative">
                    <Chart oldest={oldest} newest={newest} initTimerange={initTimerange}>
                    {props.graphs.map((g, i) => (
                        <PointGraph
                            selectedPoint={selectedPoint ? selectedPoint.x : 0} 
                            onClick={ point => zoomIn(point, g) } 
                            key={i} data={g.data.map(d => ({ ...d, x: d.date, y: d.result }))} 
                            color={`hsla(${g.color}, 50%, 50%, .75)`} 
                            fadeIn={true} />
                    ))}
                    </Chart>
                    <InfoOverlay 
                        visible={!!selectedPoint}
                        graph={graph || {}}
                        onClose={() => zoomOut()}
                        selectedPoint={selectedPoint || {label: ''}}>
                    </InfoOverlay>
                </div>
                <div className="w-100">
                    <span className="text-primary" style={{fontSize: '.8rem', cursor:'pointer'}} onClick={() => pan(-year)}><FontAwesomeIcon icon={ faChevronLeft} /><FontAwesomeIcon icon={ faChevronLeft} /></span>
                    <span className="text-primary float-right" style={{fontSize: '.8rem', cursor:'pointer'}} onClick={() => pan(year)}><FontAwesomeIcon icon={ faChevronRight} /><FontAwesomeIcon icon={ faChevronRight} /></span>
                </div>
                <div className="mt-2">
                    {props.graphs.map(g => (
                        <span key={g.label} className="m-2 d-inline-block" style={{fontSize: '.8rem', color: `hsl(${g.color}, 50%, 50%)`}} >{g.label}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

const stateToProps = state => ({ graphs: selectors.getGraphs(state) })
export default needsData(connect(stateToProps)(Timeline), selectors.loaded, actions.load)
