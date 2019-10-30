import React, { useState, useRef } from 'react'
import _ from 'lodash/fp'
import { OrdinalChart } from '../Charting/Chart'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'
import { withTranslation } from 'react-i18next'
import ColorLegend from '../Charting/ColorLegend'
import COLORS from "../colors";
const exams = ['alle MCs', 'letzter PTM']

const colors = [COLORS.progress.lighter2, COLORS.progress.base]
const Subject = ({t, ...props}) => {
    const [ flash, setFlash ] = useState(props.flash)
    const node = useRef(null)

    if(flash) {
        setTimeout(() => { 
            document.querySelector('div.App').scrollTo(0, node.current.getBoundingClientRect().y - 70)
            setFlash(false)
        }, 500)
    }

    const data = exams.map((d, i) => ({ color: colors, x:d, y: [props.data[i].maximalPunktzahl || 0, props.data[i].value || 0]}))
    const max = Math.max(..._.map(d => _.ceil(d.maximalPunktzahl * 1.1) || 0, props.data))
    return (
        <div className="card m-2 flex-grow-1" style={{minWidth: '20rem', maxWidth: '40rem'}}>
            <div ref={node} className={`card-body ${flash ? 'bg-primary' : ''}`} style={{transition: '5s'}}>
                <span className="font-weight-bold">{props.titel}</span>
                <div className="p-4">
                <div className='mb-1'>
                    <ColorLegend text={t('gestellte Fragen')} style={{backgroundColor: COLORS.progress.lighter2 }}/>
                    <ColorLegend text={t('richtige Antworten')} style={{backgroundColor: COLORS.progress.base }}/>
                </div>
                    <OrdinalChart style={{height:'15rem'}} xDomain={exams} yDomain={[0,max]}>
                        <YAxis ticks={{count: Math.min(max, 4)}} />
                        <XAxis />
                        <BarGraph labels data={ data } />
                    </OrdinalChart>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Subject)