import React, { Component } from 'react'
import _ from 'lodash'
import { OrdinalChart } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis';
import BarGraph from '../../Charting/BarGraph';
import Filter from '../../Utils/Filter'
import data from './Data'

const categories = _.uniq(data.map(d => d.category))
const exams = _.uniq(data.map(d => d.exam))
let categoryFilters = categories.map(c => ({label: c, pred: d => d.category === c }))
let examFilters = exams.map(e => ({ label: e, pred: d => d.exam === e }))

class Stations extends Component {
    constructor({ props, match }) {
        super(props)
        this.match = match
        this.state = { categoryFilters, examFilters }
    }

    render() {
        const filteredData = data
            .filter(_.overSome(this.state.categoryFilters.filter(f => f.selected).map(f => f.pred)))
            .filter(_.overSome(this.state.examFilters.filter(f => f.selected).map(f => f.pred)))
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className="mr-auto">Stationsprüfungen</h4>
                    <Filter filters={ categoryFilters } onUpdate={ categoryFilters => this.setState({ categoryFilters }) } />
                    <Filter filters={ examFilters } onUpdate={ examFilters => this.setState({ examFilters }) } />
                    <div className="row col">
                        <div className="card p-4">
                            <OrdinalChart xDomain={filteredData.map(d => d.name)} yDomain={[0, 100]} >
                                <XAxis />
                                <YAxis label="% richtig"/>
                                <BarGraph labels data={filteredData.map(d => ({x: d.name, y: d.result}))} />
                            </OrdinalChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Stations