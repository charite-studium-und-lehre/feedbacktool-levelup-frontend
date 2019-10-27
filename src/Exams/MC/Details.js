import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import _ from 'lodash/fp'
import Legend from '../../Charting/Legend'
import SimpleDot from '../../Charting/SimpleDot'
import AnimatedInteger from '../../Charting/AnimatedInteger'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import BarWithHeader from './BarWithHeader'
import { selectors, actions } from './Store'

const stateToProps = (state, ownProps) => ( {...selectors.getById(state, ownProps.id)})
const Chart = _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps))(({ mode, faecher, module }) => mode === 'modules' ?
module.map((d, i) =>
    <BarWithHeader
        key={i}
        name={d.label}
        result={d.result}
        total={80}
        mean={d.mean}
    ><AnimatedInteger value={_.round(d.result / 0.8)} /> %</BarWithHeader>
)
:
faecher.map(d =>
    <BarWithHeader
        key={d.name}
        name={d.name}
        result={d.richtig}
        total={d.gesamt}
        width={d.gesamt * 100 / _.max(faecher.map(s => s.gesamt)) + "%"}
        mean={d.mean}
    >{d.richtig} von {d.gesamt}</BarWithHeader>
))

const Details = withTranslation()(({ t, id }) => {
    const [mode, setMode] = useState('modules')
    const LegendText = Legends.Exams.MC
    return (
        <div className='card p-3'>
        <Legend title={LegendText.Details.title}>
                {LegendText.Details.text}
                <div className="position-relative">
                    Der <SimpleDot style={{ position: 'relative', display: 'inline-block', marginLeft: '.75rem' }} value={0} />  {t(`kennzeichnet den Kohortenmittelwert.`)}
                </div>
            </Legend>
            <div >
                <div className="mt-2">
                    <label className="m-0 mr-2"><input type="radio" name="details.mode" checked={mode === 'modules'} onChange={() => setMode('modules')} className="mx-2" />Module</label>
                    <label><input type="radio" name="details.mode" checked={mode === 'subjects'} onChange={() => setMode('subjects')} className="mx-2" />{t('Fächer')}</label>
                </div>
            </div>
            <div className="mt-2">
                <Chart mode={mode} id={id} />
            </div>
        </div>
    )
})

export default Details