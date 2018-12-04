import React, { Component } from 'react'
import _ from 'lodash'
import Chart, { OrdinalScales } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis';
import Legend from '../../Charting/Legend'
import Filter from '../../Utils/Filter'
import data from './Data'
import Station from './Station'
import Legends from '../../Core/LegendTexts'
const LegendText = Legends.Exams.Stations.Main

class Stations extends Component {
    constructor({ props, match }) {
        super(props)

        const categories = _.uniq(data.map(d => d.category))
        const exams = _.uniq(data.map(d => d.exam))
        const categoryFilters = categories.map(c => ({label: c, pred: d => d.category === c , selected: true }))
        const examFilters = exams.map(e => ({ label: e, pred: d => d.exam === e, selected: e === match.params.test }))
        this.state = { categoryFilters, examFilters }
    }

    selectItem(item, index) {
        this.setState({ selectedItem: item, index: item ? index : null })
    }

    render() {
        const filteredData = data
            .filter(_.overSome(this.state.categoryFilters.filter(f => f.selected).map(f => f.pred)))
            .filter(_.overSome(this.state.examFilters.filter(f => f.selected).map(f => f.pred)))
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Legend title={LegendText.title}>{LegendText.text}</Legend>
                    <div className="row col" style={{height: '20rem'}}>
                        <div className="card px-4 pb-4" style={{overflow: 'hidden'}}>
                            <div className="mt-2 mb-3 d-flex flex-wrap">
                                <div style={{fontSize: '.9rem'}}>
                                    Bereich: <Filter style={{display: 'inline-block'}} disabled={!!this.state.selectedItem} filters={ this.state.categoryFilters } onUpdate={ categoryFilters => this.setState({ categoryFilters }) } />
                                </div>
                                <div style={{fontSize: '.9rem', width: '17rem'}} className="flex-grow-1">
                                    Prüfungen: <Filter style={{display: 'inline-block'}} disabled={!!this.state.selectedItem} filters={ this.state.examFilters } onUpdate={ examFilters => this.setState({ examFilters }) } />
                                </div>
                            </div>
                            <Chart>
                                <OrdinalScales offset={this.state.selectedItem ? -this.state.index : 0} scale={this.state.selectedItem ? filteredData.length : 1} xDomain={filteredData.map(d => d.name)} yDomain={[0, 100]} >
                                    {filteredData.map((d, i) => <Station key={d.name} data={d} onClick={ item => this.selectItem(item, i)} />)}
                                    {/* <BarGraph labels onClick={(item, index) => this.selectItem(item, index)} data={filteredData.map(d => ({x: d.name, y: d.result}))} /> */}
                                    <XAxis />
                                    <YAxis label="% richtig"/>
                                </OrdinalScales>
                            </Chart>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Stations