import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import Legend from '../../Charting/Legend'
import SimpleDot from '../../Charting/SimpleDot'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import BarWithHeader from './BarWithHeader'
import { selectors, actions } from './Store'

const stateToProps = (state, ownProps) => ( {...selectors.getBySemester(state, ownProps.semester)})
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

const Details = withTranslation()(({ t, semester }) => {
    const [ mode, setMode ] = useState('modules')
    const LegendText = Legends.Exams.Semester.Details
    return (
        <div>
            <div className="card p-4" style={{ overflow: 'hidden' }}>
                <Legend title={LegendText.title}>
                    {LegendText.text}
                    <div className="position-relative">
                        Der <SimpleDot style={{ position: 'relative', display: 'inline-block', marginLeft: '.75rem' }} value={0} />  {t(`kennzeichnet den Kohortenmittelwert.`)}
                </div>
                </Legend>

                <div className="row" >
                    <div className="mt-3 col-md-5">
                        <Link to='1.%20Fachsemester/questions'>
                            <button type="button" className="btn btn-outline-primary">Fragen und Antworten</button>
                        </Link>
                    </div>
                    <div className="col-md-6 mt-4">
                        <label className="m-0 mr-2"><input type="radio" name="details.mode" checked={mode === 'modules'} onChange={() => setMode('modules')} className="mx-2" />Module</label>
                        <label><input type="radio" name="details.mode" checked={mode === 'subjects'} onChange={() => setMode('subjects')} className="mx-2" />Fächer</label>
                    </div>
                </div>
                <div className="mt-3">
                    <Chart mode={mode} semester={semester} />
                </div>
            </div>
        </div>
    )
})

export default Details