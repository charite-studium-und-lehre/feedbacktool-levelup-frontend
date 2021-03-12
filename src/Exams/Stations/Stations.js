import React, {useState} from 'react'
import {connect} from 'react-redux'
import {scaleOrdinal} from 'd3-scale'
import {schemeSpectral} from 'd3-scale-chromatic'
import Legend from '../../Charting/Legend'
import Filter from '../../Utils/Filter'
import needsData from '../../Core/needsData'
import StationsChart from './StationsChart'
import Legends from '../../Core/LegendTexts'
import {selectors, actions} from './Store'
import colordefs from "../../colors";
import {InlineKohortenMittelDot} from "../../Charting/KohortenMittelDot"
import {compose} from "../../Utils/utils";

export const color = colordefs.pp.base
export const colorTotal = colordefs.pp.lighter1
export const colorPartOfTotal = colordefs.pp.darker0
const colors = scaleOrdinal(schemeSpectral[6])

const Stations = ({data, groupFilters = [], setGroupFilters}) => {

    const semesters = []
    const categoryColors = c => colors(semesters.indexOf(c))

    const [categoryFilters, setCategoryFilters] = useState(
        semesters.map(c => ({
            label: c,
            pred: d => d.category === c,
            selected: true,
            color: categoryColors(c)
        }))
    )

    const LegendText = Legends.Exams.Stations.Explanation

    let filters = groupFilters.filter(f => f.selected).map(f => f.pred)

    const filteredData = Object.values(data)
        .filter(exam => {
            let filtered = false;
            for (let i = 0; i < filters.length; i++)
                if (filters[i](exam))
                    filtered = true;
            return filtered;
        })

    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col ">
                    <div className="p-2">
                        <h4 className="mr-auto">Mündlich-praktische Prüfungen</h4>
                    </div>
                    <div className="row col " style={{ minHeight: '25rem' }}>
                        <div className="card px-4 py-4 w-100 overflow-hidden">
                            <Legend title={LegendText.title}>
                                {LegendText.text}
                                <div className="position-relative">
                                    Der <InlineKohortenMittelDot /> kennzeichnet den Kohortenmittelwert.
                                </div>
                            </Legend>
                            <div className="mt-2 mb-3 d-flex flex-wrap">
                                <div className='mr-3' style={{ fontSize: '.9rem' }}>
                                    <Filter
                                        style={{ display: 'inline-block' }}
                                        filters={categoryFilters}
                                        onUpdate={setCategoryFilters} />
                                </div>
                                <div style={{ fontSize: '.9rem', width: '17rem' }} className="flex-grow-1">
                                    <Filter style={{ display: 'inline-block' }} filters={groupFilters} onUpdate={filters => { setGroupFilters(filters.filter(f => f.selected).map(f => f.value)) }} />
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

const stateToProps = state => ({
    data: selectors.getItems(state),
    groupFilters: selectors.getGroupFilters(state)
})

export default compose([
    needsData(selectors.loaded, actions.load),
    connect(stateToProps, actions)
])(Stations)
