import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import Legend from '../../Charting/Legend'
import SimpleDot from '../../Charting/SimpleDot'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import McFargen from './McFragen'
import BarWithHeader from './BarWithHeader'
import { selectors, actions } from './Store'

const stateToProps = (state, ownProps) => ( {...selectors.getById(state, ownProps.id)})
const Chart = _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps))(({ mode, fächer, modules }) => { return mode === 'modules' ?
modules.map((d, i) =>
    <BarWithHeader
        key={i}
        name={d.label}
        result={d.result}
        total={80}
        mean={d.mean}
    >{_.round(d.result / 0.8)} %</BarWithHeader>
)
:
fächer.map(d =>
    <BarWithHeader
        key={d.name}
        name={d.name}
        result={d.richtig}
        total={d.gesamt}
        width={d.gesamt * 100 / _.max(fächer.map(s => s.gesamt)) + "%"}
        mean={d.mean}
    >{d.richtig} von {d.gesamt}</BarWithHeader>
)
})

const Details = withTranslation()(({ t, id }) => {
    const [mode, setMode] = useState('modules')
    const LegendText = Legends.Exams.Semester
    return (
        <div className='row '>
            <div className=" col-lg-8 p-1" style={{ overflow: 'hidden' }}>
               <div className='card p-3'>
               <Legend title={LegendText.Details.title}>
                    {LegendText.Details.text}
                    <div className="position-relative">
                        Der <SimpleDot style={{ position: 'relative', display: 'inline-block', marginLeft: '.75rem' }} value={0} />  {t(`kennzeichnet den Kohortenmittelwert.`)}
                    </div>
                </Legend>
                <div >
                    <div className="mt-4">
                        <label className="m-0 mr-2"><input type="radio" name="details.mode" checked={mode === 'modules'} onChange={() => setMode('modules')} className="mx-2" />Module</label>
                        <label><input type="radio" name="details.mode" checked={mode === 'subjects'} onChange={() => setMode('subjects')} className="mx-2" />Fächer</label>
                    </div>
                </div>
                <div className="mt-3">
                    <Chart mode={mode} id={id} />
                </div>
               </div>
            </div>
            <div className="col-lg-4 p-1">
                <div className='card p-3'>
                <Legend title={LegendText.McFargen.title}>
                    {LegendText.McFargen.text}
                </Legend>
                <div>
                  <McFargen/>
                </div>
                </div>
               
            </div>
        </div>
    )
})

export default Details