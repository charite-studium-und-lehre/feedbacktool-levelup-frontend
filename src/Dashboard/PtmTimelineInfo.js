import React from 'react'
import _ from 'lodash'
import { HorizontalBarChart } from '../Charting/HorizontalBarGraph'

const labels = ['nicht beantwortet', 'falsch', 'richtig']
const results = [47, 10, 143]
const PtmInfo = props =>
    (<div>
        <div>Deine Antworten:</div>
        <div className="mt-1" style={{height: '5.3rem'}}>
            <HorizontalBarChart noaxis xDomain={[0,200]} yDomain={labels} data={labels.map((d, i) => ({y: d, x: results[i] }))} />
        </div>
        <span className="text-primary float-right" onClick={() => props.onClose()}>schließen</span>
        <a href="https://progresstesting.safeserver.de/">
            <span className="text-primary">Details</span>
        </a>
    </div>)

export default PtmInfo