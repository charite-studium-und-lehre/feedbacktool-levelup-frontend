import React, {useState} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash/fp'
import Legend from '../../Charting/Legend'
import AnimatedInteger from '../../Charting/AnimatedInteger'
import Legends from '../../Core/LegendTexts'
import needsData from '../../Core/needsData'
import BarWithHeader from './BarWithHeader'
import {selectors, actions} from './Store'
import COLORS from "../../colors";
import { InlineKohortenMittelDot } from "../../Charting/KohortenMittelDot"

const stateToProps = (state, ownProps) => ({...selectors.getById(state, ownProps.id)})
const Chart = _.compose(needsData(selectors.loaded, actions.load), connect(stateToProps))(({mode, faecher, module}) => mode === 'modules'
    ? _.sortBy(m => m.code, module).map((d, i) =>
        <BarWithHeader
            key={i}
            name={d.titel}
            result={d.ergebnisPunktzahl}
            total={1}
            mean={d.durchschnittsPunktzahl}
            colorTotal={COLORS.mc.lighter1}
            colorPartOfTotal={COLORS.mc.darker0}
        ><AnimatedInteger value={_.round(d.ergebnisPunktzahl * 100)}/> %</BarWithHeader>)
    : faecher.map(d =>
        <BarWithHeader
            key={d.code}
            name={d.titel}
            result={d.ergebnisPunktzahl}
            total={d.maximalPunktzahl}
            width={d.maximalPunktzahl * 100 / _.max(faecher.map(s => s.maximalPunktzahl)) + "%"}
            mean={d.durchschnittsPunktzahl}
            colorTotal={COLORS.mc.lighter1}
            colorPartOfTotal={COLORS.mc.darker0}
        >{d.ergebnisPunktzahl} von {d.maximalPunktzahl}</BarWithHeader>
    ))

const Details = ( id) => {
    const [mode, setMode] = useState('modules')
    const LegendText = Legends.Exams.MC
    return (
        <div className='card p-3'>
            <Legend title={LegendText.Details.title}>
                {LegendText.Details.text}
                <div className="position-relative">
                    Der <InlineKohortenMittelDot placing="inline"/> kennzeichnet den Kohortenmittelwert.
                </div>
            </Legend>
            <div>
                <div className="mt-2">
                    <label className="m-0 mr-2"><input type="radio" name="details.mode" id='Switch-> Module' checked={mode === 'modules'}
                                                       onChange={() => setMode('modules')}
                                                       className="mx-2"/>Module</label>
                    <label><input type="radio" name="details.mode"id='Switch-> Fächer' checked={mode === 'subjects'}
                                  onChange={() => setMode('subjects')} className="mx-2"/>Fächer</label>
                </div>
            </div>
            <div className="mt-2">
                <Chart mode={mode} id={id}/>
            </div>
        </div>
    )
}

export default Details