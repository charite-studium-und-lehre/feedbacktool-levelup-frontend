import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import needsData from '../Core/needsData'
import { OrdinalChart } from '../Charting/Chart'
import PointGraph from '../Charting/PointGraph'
import { selectors, actions } from '../Dashboard/Timeline/Store'
import { XAxis } from '../Charting/Axis'

const MainChart = ({ graphs, history, timerange, selectedPoint, match }) => {
    const years = _.range( timerange[0].getFullYear() - 2000, timerange[1].getFullYear() - 1999 )
    const markers = _.flatMap( y => [{ label: `SS ${y}`, value: new Date(2000+y, 3, 1) }, { label: `WS ${y}/${y+1}`, value: new Date(2000+y, 9, 1) }] )( years )
    const navigate = graph => exam => history.push(`/exams/${graph}/${exam.id}`)
    return <OrdinalChart xDomain={markers.map( m => m.label )} yDomain={[0,1]}>
            <XAxis />
            {graphs.map((g, i) => {
                //const point = match.params.exam === g.name && _.defaultTo({label: ''})(markers.find( m => (selectedPoint && selectedPoint.x) - m.value < 1000 * 60 * 60 * 24 * 100)).label
                return <PointGraph
                    offset={i/(graphs.length - 1)*.6 + .2}
                    selectedPoint={selectedPoint}
                    onClick={navigate(g.name)}
                    key={i} data={g.data.map(d => ({ ...d, x: markers.find( m => d.date - m.value < 1000 * 60 * 60 * 24 * 100).label, y: 1 }))} 
                    color={`hsla(${g.color}, 50%, 50%, .75)`} />
            })}
    </OrdinalChart>
}

const stateToProps = (state, ownProps) => ({ 
    graphs: selectors.getGraphs(state), 
    timerange: selectors.getTimerange(state), 
    selectedPoint: selectors.getByExamAndSemester(ownProps.match.params.exam, ownProps.match.params.id)(state),
})

export default _.compose(withRouter, needsData(selectors.loaded, actions.load), connect(stateToProps))(MainChart)