import React, { useState } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash/fp'
import { scaleOrdinal } from 'd3-scale'
import { schemeSpectral } from 'd3-scale-chromatic'
import Legend from '../../Charting/Legend'
import Filter from '../../Utils/Filter'
import needsData from '../../Core/needsData'
import StationsChart from './StationsChart'
import Legends from '../../Core/LegendTexts'
import SimpleDot from '../../Charting/SimpleDot'
import { withTranslation } from 'react-i18next'
import { selectors, actions } from './Store'

const colors = scaleOrdinal(schemeSpectral[6])

const Stations = ({ t, data, groupFilters, setGroupFilters }) => {
    const categories = _.uniq(_.flatMap(e => e.stations, data).map(d => d.category))
    const categoryColors = c => colors(categories.indexOf(c))

    const [ categoryFilters, setCategoryFilters ] = useState( categories.map(c => ({label: c, pred: d => d.category === c , selected: true, color: categoryColors(c) })) )

    const LegendText = Legends.Exams.Stations.Main
    const filteredData = _.filter(_.overSome(groupFilters.filter(f => f.selected).map(f => f.pred)), data)
        .map(e => ({...e, stations: e.stations
            .filter(_.overSome(categoryFilters.filter(f => f.selected).map(f => f.pred)))
    }))
    return (
    <div className="container-fluid">
        <div className="row ">
            <div className="col ">
                <Legend title={LegendText.title}>
                    {LegendText.text}
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
                                    filters={ categoryFilters } 
                                    onUpdate={ setCategoryFilters } />
                            </div>
                            <div style={{fontSize: '.9rem', width: '17rem'}} className="flex-grow-1">
                                {t(`Prüfungen`)}: <Filter style={{display: 'inline-block'}} filters={ groupFilters } onUpdate={ filters => { setGroupFilters(filters.filter( f => f.selected ).map( f => f.label )) }} />
                            </div>
                        </div>
                        <StationsChart
                            colors={categoryColors}
                            data={filteredData} />
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

const stateToProps = state => ({ data: selectors.getItems(state), groupFilters: selectors.getGroupFilters(state) })
export default _.flowRight([ needsData(selectors.loaded, actions.load), withTranslation(), connect(stateToProps, actions) ])(Stations)