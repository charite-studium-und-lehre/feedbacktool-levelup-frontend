import React, { useState } from 'react'
import { connect } from 'react-redux'
import { InlineKohortenMittelDot } from '../../Charting/KohortenMittelDot'
import Legend from '../../Charting/Legend'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import { chartingFunction } from './DetailsChartingUtils'
import { actions, selectors } from './Store'
import { compose } from '../../Utils/compose'

const stateToProps = (state, ownProps) => ({...selectors.getById(state, ownProps.id)})
const dependancyOfMCStore = needsData(selectors.loaded, actions.load)
const onLoadCreateChartByFunction = compose(dependancyOfMCStore, connect(stateToProps))

const Chart = onLoadCreateChartByFunction(chartingFunction)

const Details = ({id}) => {
    const [mode, setMode] = useState('modules')
    const LegendText = Legends.Exams.MC
    return (
        <div className="card p-3">
            <Legend title={LegendText.Details.title}>
                {LegendText.Details.text}
                <div className="position-relative">
                    Der <InlineKohortenMittelDot placing="inline"/> kennzeichnet den Kohortenmittelwert.
                </div>
            </Legend>
            <div>
                <div className="mt-2">
                    <label className="m-0 mr-2">
                        <input type="radio"
                               name="details.mode"
                               id="Switch-> Module"
                               checked={mode === 'modules'}
                               onChange={() => setMode('modules')}
                               className="mx-2"/>
                               Module
                    </label>
                    <label>
                        <input type="radio"
                               name="details.mode"
                               id="Switch-> Fächer"
                               checked={mode === 'subjects'}
                               onChange={() => setMode('subjects')}
                               className="mx-2"/>
                               Fächer
                    </label>
                </div>
            </div>
            <div className="mt-2">
                <Chart mode={mode} id={id}/>
            </div>
        </div>
    )
}

export default Details
