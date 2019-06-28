import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import { OrdinalChart } from '../../Charting/Chart'
import AreaGraph from '../../Charting/AreaGraph'
import LineGraph from '../../Charting/LineGraph'
import { XAxis, YAxis } from '../../Charting/Axis'
import { selectors } from './Store'
import SimpleBar from '../../Charting/SimpleBar'

const SubjectAlt = props => (
    <div className="card m-2 flex-grow-1" style={{width: '20rem'}}>
        <div className="card-body">
            <span className="font-weight-bold">{props.name}</span>
            <div className="my-3">
                <SimpleBar value={props.data.richtig} total={props.data.gesamt}>
                    {props.data.richtig} von {props.data.gesamt} richtig
                </SimpleBar>
            </div>
            <div className="p-3 mt-3" style={{height: '6rem'}} >
                <OrdinalChart xDomain={props.timeline.map(d => d.semester)} yDomain={[0, Math.max(...props.timeline.map(d => d.gesamt))]}>
                    <XAxis />
                    <YAxis label="# Fragen" ticks={{count: 3}} />
                    <AreaGraph data={props.timeline.map(d => ({ x: d.semester, y0: 0, y1: d.gesamt }))} color="hsla(120, 50%, 50%, .4)" />
                    <LineGraph data={props.timeline.map(d => ({ x: d.semester, y: d.gesamt }))} color="hsla(120, 50%, 20%, .4)" />
                    <AreaGraph data={props.timeline.map(d => ({ x: d.semester, y0: 0, y1: d.richtig }))} color="hsla(0, 50%, 50%, .4)" />
                    <LineGraph data={props.timeline.map(d => ({ x: d.semester, y: d.richtig }))} color="hsla(0, 50%, 20%, .4)" />
                </OrdinalChart>
            </div>
           
          <div>
          <Link to={`/strengths/${(props.name)}`} className="mt-2 float-right text-primary" style={{fontSize:".8rem", textDecoration:"underline"}}>{props.t(`zu deiner Entwicklung in diesem Fach`)}</Link>
          </div>
        </div>
    </div>
)

const stateToProps = (state, ownProps) => ({
    data: selectors.getSubjectByName(state, ownProps.semester, ownProps.name), 
    timeline: selectors.getAllForSubject(state, ownProps.name)
})

export default withTranslation() (connect(stateToProps)(SubjectAlt))