import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import tinycolor from 'tinycolor2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import makeExtendable from '../../Core/makeExtendable'
import { OrdinalChart } from '../../Charting/Chart'
import AreaGraph from '../../Charting/AreaGraph'
import LineGraph from '../../Charting/LineGraph'
import { XAxis, YAxis } from '../../Charting/Axis'
import { selectors } from './Store'
import SimpleBar from '../../Charting/SimpleBar'
import Legende from './Legende'

const Timeline = withTranslation()(({ t, data }) => 
    <div className="col m-auto" style={{maxWidth: '40rem'}}>
        <Legende text={t('Anzahl gestellte Fragen')} style={{backgroundColor : colors[0]}}/>
        <Legende text={t('Anzahl richtige Fragen')} style={{backgroundColor : colors[1]}}/>
        <div className="p-4 mt-3" style={{height: '6rem'}} >
            <OrdinalChart xDomain={data.map(d => d.short)} yDomain={[0, Math.max(...data.map(d => d.gesamt))]}>
                <XAxis />
                <YAxis ticks={{count: 3}} />
                <AreaGraph data={data.map(d => ({ x: d.short, y0: d.richtig, y1: d.gesamt }))} color={colors[0]} />
                <LineGraph data={data.map(d => ({ x: d.short, y: d.gesamt }))} color={tinycolor(colors[0]).darken(30).toString()} />
                <AreaGraph data={data.map(d => ({ x: d.short, y0: 0, y1: d.richtig }))} color={colors[1]} />
                <LineGraph data={data.map(d => ({ x: d.short, y: d.richtig }))} color={tinycolor(colors[1]).darken(30).toString()} />
            </OrdinalChart>
        </div>
    </div>)

const colors = ["hsla(120, 50%, 50%, .4)", "hsla(0, 50%, 50%, .4)"]
const Subject = props => (
    <div>
        <div className="row my-3">
            <div className="col-7 col-sm-6">
                <span className="text-primary">#{props.rank}</span><span className="ml-1 font-weight-bold">{props.name}</span>
            </div>
            <div className="col-5 col-sm-2">
                <span className="badge badge-info" style={{fontSize: '.6rem'}}>{props.category}</span>
            </div>
            <div className="col-10 col-sm-3">
                <SimpleBar value={props.data.richtig} total={props.data.gesamt}>
                    {props.data.richtig} von {props.data.gesamt} richtig
                </SimpleBar>
            </div>
            <div className="col-2 col-sm-1 text-primary text-right">
                <FontAwesomeIcon icon={faChartLine} onClick={() => props.toggleExtended()} />
            </div>
        </div>
        <div className="row">
            {props.extended && <Timeline data={props.timeline} />}
        </div>
            {/* <div>
            <Link to={`/strengths/${(props.name)}`} className="mt-2 float-right text-primary" style={{fontSize:".8rem", textDecoration:"underline"}}>{props.t(`zu deiner Entwicklung in diesem Fach`)}</Link>
            </div> */}
    </div>
)

const stateToProps = (state, ownProps) => ({
    data: selectors.getSubjectByName(state, ownProps.semester, ownProps.name), 
    timeline: selectors.getAllForSubject(state, ownProps.name)
})

export default makeExtendable(connect(stateToProps)(Subject))