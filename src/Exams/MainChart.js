import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import needsData from '../Core/needsData'
import { OrdinalChart } from '../Charting/Chart'
import PointGraph from '../Charting/PointGraph'
import { selectors, actions } from './Store'
import { XAxis } from '../Charting/Axis'

const MainChart = ({ t, graphs, history, fromQuery = { id: -1 }, selected, setSelected }) => {
    const semesters = _.flow(_.flatMap( g => g.data.map( d => d.zeitsemester )), _.uniq, _.sortBy( t => t.split(' ')[1]))(graphs)
    const navigate = graph => exam => { 
        history.push(`/exams/${graph}/${exam.id}`) 
    }

    useEffect( () => {
        if(selected === fromQuery.id) return
        setSelected(fromQuery)
    })

    return <div style={{height: '2.5rem', minWidth: `${semesters.length*8}rem`}}>
        {semesters.length ? <OrdinalChart xDomain={semesters} yDomain={[0,1]}>
            <XAxis />
            {graphs.map((g, i) => 
                <PointGraph
                    offset={i / (graphs.length - 1)}
                    onClick={navigate(g.name)}
                    key={i} data={g.data} 
                    color={g.color} />
            )}
        </OrdinalChart> :
        <div className="text-center">{t('Hier werden zukünftig deine Prüfungen angezeigt.')}</div>
        }
    </div>
}

const stateToProps = (state, ownProps) => ({ 
    graphs: selectors.getNavigationData(state), 
    fromQuery: selectors.getById(state, ownProps.match.params.id),
    selected: selectors.getSelected(state),
})

export default _.compose(withRouter, needsData(selectors.loaded, actions.load), connect(stateToProps, actions), withTranslation())(MainChart)