import React from 'react'
import { connect } from 'react-redux'
import { SlideDown } from 'react-slidedown'
import { withTranslation } from 'react-i18next'
import makeExtendable from '../../Core/makeExtendable'
import { OrdinalChart } from '../../Charting/Chart'
import AreaGraph from '../../Charting/AreaGraph'
import LineGraph from '../../Charting/LineGraph'
import { XAxis, YAxis } from '../../Charting/Axis'
import { selectors } from './Store'
import SimpleBar from '../../Charting/SimpleBar'
import ColorLegend from '../../Charting/ColorLegend'
import {GraphButton} from './GraphButton'
import COLORS from "../../colors";

const Timeline = withTranslation()(({ t, data }) =>
    <div className="col m-auto" style={{maxWidth: '40rem'}}>
        <ColorLegend text={t('Anzahl gestellte Fragen')} style={{backgroundColor : COLORS.graphs.total}}/>
        <ColorLegend text={t('Anzahl richtige Fragen')} style={{backgroundColor : COLORS.graphs.correct}}/>
        <div className="p-4 mt-3" style={{height: '6rem'}} >
            <OrdinalChart xDomain={data.map(d => d.zeitsemester)} yDomain={[0, Math.max(...data.map(d => d.maximalPunktzahl))]}>
                <XAxis />
                <YAxis ticks={{count: 3}} />
                <AreaGraph data={data.map(d => ({ x: d.zeitsemester, y0: d.ergebnisRichtigPunktzahl, y1: d.maximalPunktzahl }))} color={COLORS.graphs.total} />
                <LineGraph data={data.map(d => ({ x: d.zeitsemester, y: d.maximalPunktzahl }))} color={COLORS.graphs.total} />
                <AreaGraph data={data.map(d => ({ x: d.zeitsemester, y0: 0, y1: d.ergebnisRichtigPunktzahl }))} color={COLORS.graphs.correct} />
                <LineGraph data={data.map(d => ({ x: d.zeitsemester, y: d.ergebnisRichtigPunktzahl }))} color={COLORS.graphs.correct} />
            </OrdinalChart>
        </div>
    </div>)

const Subject = ({ data, ...props }) => (
    <div>
        <div className="row py-3" onClick={() => props.toggleExtended()} >
            <div className="col-7 col-sm-6" id={`text-> ${props.titel}`}>
                <span>#{props.rank}</span>
                <span className="ml-1 font-weight-bold" id={`Text-> ${props.titel}`}>{props.titel}</span>
            </div>
            <div className="col-5 col-sm-2 p-0">
                <span className='badge' id={`Text-> ${props.gruppe}`}
                      style={{fontSize: '.6rem', backgroundColor: props.filterColors.background,
                          color: props.filterColors.text, border: '1px solid '+props.filterColors.line }}>
                    {props.gruppe}
                </span>
            </div>
            <div className="col-10 col-sm-3 mt-1">
                <SimpleBar colorTotal={COLORS.ptm.lighter1} colorPartOfTotal={COLORS.ptm.darker0}
                           value={data.ergebnisRichtigPunktzahl} total={data.maximalPunktzahl}>
                    {data.ergebnisRichtigPunktzahl} von {data.maximalPunktzahl} richtig
                </SimpleBar>
            </div>
            <div className={`col-2 col-sm-1 text-right`}>
                <GraphButton clicked={props.extended}/>
            </div>
        </div>
        <SlideDown className="row animated fast">
            {props.extended && <Timeline data={props.timeline} />}
        </SlideDown>
    </div>
)

const stateToProps = (state, ownProps) => ({
    data: selectors.getSubjectByName(state, ownProps.id, ownProps.titel), 
    timeline: selectors.getAllForSubject(state, ownProps.titel)
})

export default makeExtendable()(connect(stateToProps)(Subject))