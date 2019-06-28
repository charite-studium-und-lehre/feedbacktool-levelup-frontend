import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { OrdinalChart } from '../../Charting/Chart'
import AreaGraph from '../../Charting/AreaGraph'
import LineGraph from '../../Charting/LineGraph'
import { XAxis, YAxis } from '../../Charting/Axis'
import { selectors } from './Data'
import SimpleBar from '../../Charting/SimpleBar'

const stateToProps = (state, ownProps) => ({ 
    data: selectors.getSubjectByName(state, ownProps.semester, ownProps.name), 
    timeline: selectors.getAllForSubject(state, ownProps.name)
})

const SubjectAlt = props => (
    <div className="card m-2 flex-grow-1" style={{width: '20rem'}}>
        <div className="card-body">
            <span className="font-weight-bold">{props.name}</span>
            <div>
                <SimpleBar value={props.data.richtig} total={props.data.gesamt}>
                    {props.data.richtig} von {props.data.gesamt} richtig
                </SimpleBar>
            </div>
            <div className="p-2 pl-5" style={{height: '6rem'}} >
                {/* <HorizontalBarChart yDomain={labels} data={_.range(0,3).map(i => ({y: labels[i], x: _.random(20,100)}))} />  */}
                <OrdinalChart xDomain={props.timeline.map(d => d.semester)} yDomain={[0,20]}>
                    <XAxis />
                    <YAxis ticks={{count: 4}} />
                    <AreaGraph data={props.timeline.map(d => ({ x: d.semester, y0: 0, y1: d.gesamt }))} color="hsla(120, 50%, 50%, .4)" />
                    <LineGraph data={props.timeline.map(d => ({ x: d.semester, y: d.gesamt }))} />
                </OrdinalChart>
            </div>
           
          <div>
          <Link to={`/strengths/${(props.name)}`} className="mt-2 float-right text-primary" style={{fontSize:".8rem", textDecoration:"underline"}}>{props.t(`zu deiner Entwicklung in diesem Fach`)}</Link>
          </div>
        </div>
    </div>
)

export default withTranslation() (props => <SubjectAlt {...props} {...stateToProps(null, props)} />)