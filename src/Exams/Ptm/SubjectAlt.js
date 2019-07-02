import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import tinycolor from 'tinycolor2'
import { OrdinalChart } from '../../Charting/Chart'
import AreaGraph from '../../Charting/AreaGraph'
import LineGraph from '../../Charting/LineGraph'
import { XAxis, YAxis } from '../../Charting/Axis'
import { selectors } from './Store'
import SimpleBar from '../../Charting/SimpleBar'
import Legende from './Legende'

const colors = ["hsla(120, 50%, 50%, .4)", "hsla(0, 50%, 50%, .4)"]
const SubjectAlt = props => (
    <div className="card m-2 flex-grow-1" style={{width: '20rem'}}>
        <div className="card-body">
            <span className="font-weight-bold">{props.name}</span>
            <div className="my-3">
                <SimpleBar value={props.data.richtig} total={props.data.gesamt}>
                    {props.data.richtig} von {props.data.gesamt} richtig
                </SimpleBar>
            </div>
            <Legende text='Anzahl gestellte Fragen' style={{backgroundColor : colors[0]}}/>
            <Legende text='Anzahl richtige Fragen'  style={{backgroundColor : colors[1]}}/>
            <div className="p-4 mt-3 mb-4" style={{height: '6rem'}} >
                <OrdinalChart xDomain={props.timeline.map(d => d.semester)} yDomain={[0, Math.max(...props.timeline.map(d => d.gesamt))]}>
                    <XAxis />
                    <YAxis ticks={{count: 3}} />
                    <AreaGraph data={props.timeline.map(d => ({ x: d.semester, y0: 0, y1: d.gesamt }))} color={colors[0]} />
                    <LineGraph data={props.timeline.map(d => ({ x: d.semester, y: d.gesamt }))} color={tinycolor(colors[0]).darken(30).toString()} />
                    <AreaGraph data={props.timeline.map(d => ({ x: d.semester, y0: 0, y1: d.richtig }))} color={colors[1]} />
                    <LineGraph data={props.timeline.map(d => ({ x: d.semester, y: d.richtig }))} color={tinycolor(colors[1]).darken(30).toString()} />
                </OrdinalChart>
            </div>
           
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

export default withTranslation() (connect(stateToProps)(SubjectAlt))