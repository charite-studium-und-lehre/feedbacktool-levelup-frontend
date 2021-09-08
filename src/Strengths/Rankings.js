import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Legend from '../Charting/Legend'
import Ranking from './Ranking'
import Legends from '../Core/LegendTexts'
import needsData from '../Core/needsData'
import { selectors as ptmSelectors, actions as ptmActions } from '../Exams/Ptm/Store'
import { selectors as mcSelectors, actions as mcActions } from '../Exams/MC/Store'
import { InlineKohortenMittelDot } from "../Charting/KohortenMittelDot"
import { compose, flow } from '../Utils/utils.js'

const ptmProps = state => ({ faecher: flow(ptmSelectors.getLatest, ptmSelectors.getRanking)(state) })

const PtmRanking = compose(needsData(ptmSelectors.loaded, ptmActions.load), connect(ptmProps))(
    ({ faecher }) => <Ranking mean
        subjects={faecher.map(s => ({
            ...s,
            value: s.ergebnisRichtigPunktzahl,
            mean: s.durchschnittRichtigPunktzahl
        }))}
    />
)

const mcProps = state => ({ faecher: mcSelectors.getRanking(state) })
const McRanking = compose(needsData(mcSelectors.loaded, mcActions.load), connect(mcProps))(
    ({ faecher }) => <Ranking
        subjects={faecher.map(s => ({
            ...s,
            value: s.ergebnisPunktzahl
        }))}
    />
)

const Rankings = () => {
    const Legende = (props) =>
        <Fragment>{props.text.map((text, index) =>
            <p style={{ fontWeight: index === 1 && 'bold' }} key={text}>{text}</p>)}
        </Fragment>
    return <div className="row">
        <div className="col-md-6 mb-2">
            <div className="card">
                <div className="card-body">
                    <Legend title={Legends.Strengths.MC.title}>
                        <Legende text={Legends.Strengths.MC.text} />
                    </Legend>
                    <McRanking />
                </div>
            </div>
        </div>
        <div className="col-md-6 mb-2">
            <div className="card">
                <div className="card-body">
                    <Legend title={Legends.Strengths.PTM.title}>
                        <Legende text={Legends.Strengths.PTM.text} />
                        <div className="position-relative">
                            Der <InlineKohortenMittelDot /> kennzeichnet den Kohortenmittelwert
                   </div>
                    </Legend>
                    <PtmRanking />
                </div>
            </div>
        </div>
    </div>
}
export default Rankings
