import React, { Component } from 'react'
import _ from 'lodash'
import Legend from '../../Charting/Legend'
import Filter from '../../Utils/Filter'
import data from './Data'
import StationsChart from './StationsChart'
import Legends from '../../Core/LegendTexts'
const LegendText = Legends.Exams.Stations.Main

class Stations extends Component {
    constructor({ props, match }) {
        super(props)

        const categories = _.uniq(_.flatMap(data, e => e.stations).map(d => d.category))
        const exams = _.uniq(_.flatMap(data, e => e.stations).map(d => d.exam))
        const categoryFilters = categories.map(c => ({label: c, pred: d => d.category === c , selected: true }))
        const examFilters = exams.map(e => ({ label: e, pred: d => d.exam === e, selected: e === match.params.test }))
        this.state = { categoryFilters, examFilters }
        this.selectItem = this.selectItem.bind(this)
    }

    selectItem(item, index) {
        this.setState({ selectedItem: item, index: item ? index : null })
    }

    render() {
        const detailsScale = 4
        const filteredData = data.map(e => ({...e, stations: e.stations
            .filter(_.overSome(this.state.categoryFilters.filter(f => f.selected).map(f => f.pred)))
            .filter(_.overSome(this.state.examFilters.filter(f => f.selected).map(f => f.pred)))
        }))
        const numStations = filteredData.reduce((acc, cur) => acc + cur.stations.length, 0)
        const offset = this.state.selectedItem ? -detailsScale/numStations*(Math.min(Math.max(numStations - 1 - this.state.index - (numStations-1)/2/detailsScale, 0), numStations-1)) : 0
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Legend title={LegendText.title}>{LegendText.text}</Legend>
                    <div className="row col" style={{height: '20rem'}}>
                        <div className="card px-4 pb-4 w-100" style={{overflow: 'hidden'}}>
                            <div className="mt-2 mb-3 d-flex flex-wrap">
                                <div style={{fontSize: '.9rem'}}>
                                    Bereich: <Filter style={{display: 'inline-block'}} disabled={!!this.state.selectedItem} filters={ this.state.categoryFilters } onUpdate={ categoryFilters => this.setState({ categoryFilters }) } />
                                </div>
                                <div style={{fontSize: '.9rem', width: '17rem'}} className="flex-grow-1">
                                    Prüfungen: <Filter style={{display: 'inline-block'}} disabled={!!this.state.selectedItem} filters={ this.state.examFilters } onUpdate={ examFilters => this.setState({ examFilters }) } />
                                </div>
                            </div>
                            <StationsChart 
                                offset={offset} 
                                scale={this.state.selectedItem ? detailsScale : 1} 
                                selectItem={this.selectItem} 
                                data={filteredData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default Stations
