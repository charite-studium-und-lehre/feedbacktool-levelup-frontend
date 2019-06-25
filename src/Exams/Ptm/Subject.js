import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import _ from 'lodash'
import { HorizontalBarChart } from '../../Charting/HorizontalBarGraph'

const labels1 = [ 'richtig', 'falsch' ]
const labels2 = ['geraten', ' wahrscheinlich' , 'sicher' ]
const colors = ['red', 'green', 'blue', 'black']
const Subject = props => (
    <div className="card m-2 flex-grow-1" style={{width: '20rem'}}>
        <div className="card-body">
            <span className="font-weight-bold">{props.title}</span>
            {labels1.map(cat => 
                <div key={cat} className="p-2 pl-5" style={{height: '6rem'}} >
                    <HorizontalBarChart color="red" yDomain={labels2.concat(cat)} data={_.range(0,4).map(i => ({y: labels2.concat(cat)[i], x: _.random(20,100), color: colors[i]}))} /> 
                </div>
            )}
          <div>
          <Link to={`/strengths/${(props.title)}`} className="mt-2 float-right text-primary" style={{fontSize:".8rem", textDecoration:"underline"}}>{props.t(`zu deiner Entwicklung in diesem Fach`)}</Link>
          </div>
        </div>
    </div>
)

export default withTranslation() (Subject)