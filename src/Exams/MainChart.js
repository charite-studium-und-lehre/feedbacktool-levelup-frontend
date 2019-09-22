import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import needsData from '../Core/needsData'
import { OrdinalChart } from '../Charting/Chart'
import PointGraph from '../Charting/PointGraph'
import { selectors, actions } from './Store'
import { XAxis } from '../Charting/Axis'

const MainChart = ({ graphs, history, setSelected, selectedPoint = { id: -1 } }) => {
    const semesters = _.flow(_.flatMap( g => g.data.map( d => d.timesemester )), _.uniq)(graphs)
    const navigate = graph => exam => { setSelected(exam.id); history.push(`/exams/${graph}/${exam.id}`) }
    return <div style={{height: '2.5rem', minWidth: `${semesters.length*4}rem`}}>
        <OrdinalChart xDomain={semesters} yDomain={[0,1]}>
            <XAxis />
            {graphs.map((g, i) => {
                return <PointGraph
                    offset={i / (graphs.length - 1)}
                    onClick={navigate(g.name)}
                    key={i} data={g.data} 
                    color={`hsla(${g.color}, 50%, 50%, .75)`} />
            })}
        </OrdinalChart>
    </div>
}

const stateToProps = (state, ownProps) => ({ 
    graphs: selectors.getNavigationData(state),
    selectedPoint: selectors.getByExamAndSemester(ownProps.match.params.exam, ownProps.match.params.id)(state),
})

export default _.compose(withRouter, needsData(selectors.loaded, actions.load), connect(stateToProps, actions))(MainChart)