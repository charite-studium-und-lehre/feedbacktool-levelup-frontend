import React from 'react'
import QuantilesPlot from '../Charting/QuantilesPlot'
import PointGraph from '../Charting/PointGraph'

function valueToColor(v) {
    return `hsla(${v}, 100%, 30%, .4)`
}
function withGraphData(Type) {
    return (props) => {
        return (<Type 
            color={valueToColor(props.graph.color)}
            data={props.graph.data}
            onClick={( point ) => props.selectPoint(props.graph.name, point)}
            {...props}>
        </Type>)
    }
}

export const QuantilesPlotWithGraphData = withGraphData(QuantilesPlot)
export const PointGraphWithGraphData = withGraphData(PointGraph)