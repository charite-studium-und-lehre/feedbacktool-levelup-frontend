import React from 'react'
import QuantilesPlot from '../Charting/QuantilesPlot'
import PointGraph from '../Charting/PointGraph'

function withGraphData(Type) {
    return (props) => {
        return (<Type 
            color={props.graph.color}
            data={props.graph.data}
            className={props.context.isGraphShown(props.graph.name) ? 'show' : 'hidden'}
            onClick={( point ) => props.context.selectPoint(props.graph.name, point)}
            selectedPoint={props.context.state.selectedPoint.graph === props.graph.name ? props.context.state.selectedPoint.point : null}
            {...props}>
        </Type>)
    }
}

export const QuantilesPlotWithGraphData = withGraphData(QuantilesPlot)
export const PointGraphWithGraphData = withGraphData(PointGraph)