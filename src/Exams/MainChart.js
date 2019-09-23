import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import needsData from '../Core/needsData'
import { OrdinalChart } from '../Charting/Chart'
import PointGraph from '../Charting/PointGraph'
import { selectors, actions } from './Store'
import { XAxis } from '../Charting/Axis'

const MainChart = ({ graphs, history, setSelected, match }) => {
    const semesters = _.flow(_.flatMap( g => g.data.map( d => d.timesemester )), _.uniq)(graphs)
    const navigate = graph => exam => { 
        setSelected(exam.id, exam)
        history.push(`/exams/${graph}/${exam.id}`) 
    }

    // useEffect( () => {
    //     setSelected(match.params.id)
    // })
    return <div style={{height: '2.5rem', minWidth: `${semesters.length*4}rem`}}>
        <OrdinalChart xDomain={semesters} yDomain={[0,1]}>
            <XAxis />
            {graphs.map((g, i) => {
                return <PointGraph
                    offset={i / (graphs.length - 1)}
                    onClick={navigate(g.name)}
                    key={i} data={g.data} 
                    color={g.color} />
            })}
        </OrdinalChart>
    </div>
}

const stateToProps = state => ({ graphs: selectors.getNavigationData(state) })

export default _.compose(withRouter, needsData(selectors.loaded, actions.load), connect(stateToProps, actions))(MainChart)