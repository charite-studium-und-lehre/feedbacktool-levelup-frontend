import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import needsData from '../Core/needsData'
import { OrdinalChart } from '../Charting/Chart'
import PointGraph from '../Charting/PointGraph'
import { selectors, actions } from './Store'
import { XAxis } from '../Charting/Axis'
import { compose } from '../Utils/utils'

const MainChart = ({ graphs, history, fromQuery = { id: -1 }, selected, setSelected, semesters }) => {
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
                    onClick={p => history.push(`/exams/${p.link}`) }
                    key={i} data={g.data}
                    color={g.color} />
            )}
        </OrdinalChart> :
        <div className="text-center">Hier werden zukünftig deine Prüfungen angezeigt.</div>
        }
    </div>
}

const stateToProps = (state, ownProps) => ({
    graphs: selectors.getNavigationData(state),
    fromQuery: selectors.getById(state, ownProps.match.params.id),
    selected: selectors.getSelected(state),
    semesters: selectors.getSemesters(state),
})

export default compose(
    withRouter,
    needsData(selectors.loaded, actions.load),
    connect(stateToProps, actions)
)(MainChart)

