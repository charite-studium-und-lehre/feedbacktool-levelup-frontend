import React, { Component } from 'react'
import _ from 'lodash'
import { scaleOrdinal } from 'd3-scale'
import { schemeSpectral } from 'd3-scale-chromatic'
import Legend from '../../Charting/Legend'
import Filter from '../../Utils/Filter'
import data from './Data'
import StationsChart from './StationsChart'
import Legends from '../../Core/LegendTexts'
import SimpleDot from '../../Charting/SimpleDot'
import { withTranslation } from 'react-i18next'
// const LegendText = Legends.Exams.Stations.Main
const colors = scaleOrdinal(schemeSpectral[6])

class Stations extends Component {
    constructor({ props, match}) {
        super(props)

        const categories = _.uniq(_.flatMap(data, e => e.stations).map(d => d.category))
        const groups = _.uniq(data.map(d => d.group))
        this.categoryColors = c => colors(categories.indexOf(c))
        const categoryFilters = categories.map(c => ({label: c, pred: d => d.category === c , selected: true, color: this.categoryColors(c) }))
        const groupFilters = groups.map(g => ({ label: g, pred: e => e.group === g, selected: g === match.params.test || match.params.test === 'all'}))
        this.state = { categoryFilters, groupFilters }
    }

    render() {
        const {t} = this.props
        const filteredData = data
            .filter(_.overSome(this.state.groupFilters.filter(f => f.selected).map(f => f.pred)))
            .map(e => ({...e, stations: e.stations
                .filter(_.overSome(this.state.categoryFilters.filter(f => f.selected).map(f => f.pred)))
        }))
        return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col ">
                    <Legend title={Legends(t).Exams.Stations.Main.title}>
                        {Legends(t).Exams.Stations.Main.text}
                        <div className="position-relative">
                            {t(`Der`)} <SimpleDot style={{position: 'relative', display: 'inline-block', marginLeft: '.75rem'}} value={0} />{t(` kennzeichnet den Kohortenmittelwert.`)}
                        </div>
                    </Legend>
                    <div className="row col " style={{minHeight: '25rem'}}>
                        <div className="card px-4 pb-4 w-100" style={{overflow: 'hidden'}}>
                            <div className="mt-2 mb-3 d-flex flex-wrap">
                                <div style={{fontSize: '.9rem'}}>
                                  {t(`Bereich`)}: <Filter
                                        style={{display: 'inline-block'}}
                                        filters={ this.state.categoryFilters } 
                                        onUpdate={ categoryFilters => this.setState({ categoryFilters }) } />
                                </div>
                                <div style={{fontSize: '.9rem', width: '17rem'}} className="flex-grow-1">
                                   {t(`Prüfungen`)}: <Filter style={{display: 'inline-block'}} disabled={!!this.state.selectedItem} filters={ this.state.groupFilters } onUpdate={ groupFilters => this.setState({ groupFilters }) } />
                                </div>
                            </div>
                            <StationsChart
                                colors={this.categoryColors}
                                data={filteredData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default withTranslation()(Stations)