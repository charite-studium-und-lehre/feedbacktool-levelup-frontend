import React from 'react'
import { HorizontalBarChart } from '../../Charting/HorizontalBarGraph'
import { withTranslation } from 'react-i18next'

const labels = ['nicht beantwortet', 'falsch', 'richtig']
const results = [47, 10, 143]
const PtmInfo = (props, {t} ) =>
    (<div>
        <div>{t(`Deine Antworten:`)}</div>
        <div className="mt-1" style={{height: '5.3rem'}}>
            <HorizontalBarChart noaxis xDomain={[0,200]} yDomain={labels} data={labels.map((d, i) => ({y: d, x: results[i] }))} />
        </div>
        <span className="text-primary float-right" onClick={() => props.onClose()}>{t(`schließen`)}</span>
        <a href="https://progresstesting.safeserver.de/">
            <span className="text-primary">{t(`Details`)}</span>
        </a>
    </div>)

export default withTranslation() (PtmInfo)