import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import _ from 'lodash'
import { HorizontalBarChart } from '../../Charting/HorizontalBarGraph'
import HorizontalBarGraph from '../../Charting/HorizontalBarGraph'

const labels = ['nicht beantwortet' , 'falsch', 'richtig' ]

const SubjectAlt = props => (
    <div className="card m-2 flex-grow-1" style={{width: '20rem'}}>
        <div className="card-body">
            <span className="font-weight-bold">{props.title}</span>
            <div className="p-2 pl-5" style={{height: '6rem'}} >
                <HorizontalBarChart yDomain={labels} data={_.range(0,3).map(i => ({y: labels[i], x: _.random(20,100)}))} /> 
            </div>
           
          <div>
          <Link to={`/strengths/${(props.title)}`} className="mt-2 float-right text-primary" style={{fontSize:".8rem", textDecoration:"underline"}}>{props.t(`zu deiner Entwicklung in diesem Fach`)}</Link>
          </div>
        </div>
    </div>
)

export default withTranslation() (SubjectAlt)