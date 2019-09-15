import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import needsData from '../Core/needsData'
import { TimeChart } from '../Charting/Chart'
import PointGraph from '../Charting/PointGraph'
import { YAxis } from '../Charting/Axis'
import { selectors, actions } from '../Dashboard/Timeline/Store'
import LineMarker from '../Charting/LineMarker'

const MainChart = ({ graphs, history, timerange, selectedPoint }) => {
    const years = _.range( timerange[0].getFullYear() - 2000, timerange[1].getFullYear() - 1999 )
    const markers = _.flatMap( y => [{ label: `WS ${y}/${y+1}`, value: new Date(2000+y, 9, 1) }, { label: `SS ${y}`, value: new Date(2000+y, 3, 1) }] )( years )
    const navigate = graph => exam => history.push(`/exams/${graph}/${exam.label}`)
    return <TimeChart xDomain={timerange} yDomain={[0,100]}>
            <YAxis label="% richtig" />
            {markers.map( m => <LineMarker vertical noValue key={m.label} {...m} /> )}
            {graphs.map((g, i) =>
                <PointGraph
                    selectedPoint={selectedPoint && selectedPoint.x}
                    onClick={navigate(g.name)}
                    key={i} data={g.data.map(d => ({ ...d, y: d.result }))} 
                    color={`hsla(${g.color}, 50%, 50%, .75)`} />
            )}
    </TimeChart>
}

const stateToProps = (state, ownProps) => ({ 
    graphs: selectors.getGraphs(state), 
    timerange: selectors.getTimerange(state), 
    selectedPoint: selectors.getByExamAndSemester(ownProps.match.params.exam, ownProps.match.params.id)(state),
})

export default _.compose(withRouter, needsData(selectors.loaded, actions.load), connect(stateToProps))(MainChart)