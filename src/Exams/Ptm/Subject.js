import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import tinycolor from 'tinycolor2'
import makeExtendable from '../../Core/makeExtendable'
import { OrdinalChart } from '../../Charting/Chart'
import AreaGraph from '../../Charting/AreaGraph'
import LineGraph from '../../Charting/LineGraph'
import { XAxis, YAxis } from '../../Charting/Axis'
import { selectors } from './Store'
import SimpleBar from '../../Charting/SimpleBar'
import Legende from './Legende'

const Timeline = withTranslation()(({ t, data }) => 
    <div>
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
    <div className="card m-2">
        <div className="card-body">
            <h5><span className="text-primary">#{props.rank}</span><span className="ml-1 font-weight-bold">{props.name}</span></h5>
            
            <div className="my-3">
                <SimpleBar value={props.data.richtig} total={props.data.gesamt}>
                    {props.data.richtig} von {props.data.gesamt} richtig
                </SimpleBar>
            </div>
            <div className="text-primary" onClick={() => props.toggleExtended()}><a className="float-right">Entwicklung</a></div>
            {props.extended && <Timeline data={props.timeline} />}
          {/* <div>
          <Link to={`/strengths/${(props.name)}`} className="mt-2 float-right text-primary" style={{fontSize:".8rem", textDecoration:"underline"}}>{props.t(`zu deiner Entwicklung in diesem Fach`)}</Link>
          </div> */}
        </div>
    </div>
)

const stateToProps = (state, ownProps) => ({
    data: selectors.getSubjectByName(state, ownProps.semester, ownProps.name), 
    timeline: selectors.getAllForSubject(state, ownProps.name)
})

export default makeExtendable(connect(stateToProps)(Subject))