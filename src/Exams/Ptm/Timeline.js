import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import needsData from '../../Core/needsData'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'
import {OrdinalChart} from '../../Charting/Chart'
import LineGraph from '../../Charting/LineGraph'
import {XAxis, YAxis} from '../../Charting/Axis'
import SimpleDot from '../../Charting/SimpleDot'
import {selectors, actions} from './Store'
import {labels} from './Results'
import {compose} from '../../Utils/utils'

const colors = ['hsla(120, 20%, 50%, .65)', 'hsla(0, 50%, 50%, .65)', 'hsla(240, 0%, 50%, .65)']
const graphs = labels.map( (l, i) => ({ label: l, value: colors[i] }))

const stateToProps = state => ({ ptms: selectors.getTimeline(state) })

const Chart = compose(withRouter, needsData(selectors.loaded, actions.load), connect(stateToProps))(({ ptms, history }) => {
    const navigate = exam => history.push(`/exams/${exam.link}`)

    return <div>
        <OrdinalChart xDomain={ptms.map( p => p.zeitsemester )} yDomain={[0,Math.max(...ptms.map(p => p.results).flat()) + 10]}>
            <XAxis />
            <YAxis ticks={{count: 4}} />
            {graphs.map( ({value}, i) => <LineGraph key={i} onClick={navigate} color={value} data={ptms.map( d => ({ ...d, x: d.zeitsemester, y: d.results[i] }))} /> )}
        </OrdinalChart>
    </div>
})

const Timeline = props =>
    <div className="card">
        <div className="card-body">
            <Legend title={Legends.Exams.Ptm.Timeline.title}>
                {Legends.Exams.Ptm.Timeline.text}
                <div>
                    {graphs.map( ({ value, label }) => <div key={label} className="d-inline-block mr-2">
                        <div className="d-flex align-items-center">
                            <SimpleDot className="mr-1" size='.7' style={{position: 'relative', backgroundColor: value}} />
                            {label}
                        </div>
                    </div>)}
                </div>
            </Legend>
            <div className="p-2">
                <Chart {...props} />
            </div>
        </div>
    </div>

export default Timeline
