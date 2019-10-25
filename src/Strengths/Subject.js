import React, { useState, useRef } from 'react'
import _ from 'lodash/fp'
import { OrdinalChart } from '../Charting/Chart'
import { XAxis, YAxis } from '../Charting/Axis'
import BarGraph from '../Charting/BarGraph'
import { withTranslation } from 'react-i18next'
import ColorLegend from '../Charting/ColorLegend'
const exams = ['alle MCs', 'letzter PTM']

const Subject = ({t, ...props}) => {
    const [ flash, setFlash ] = useState(props.flash)
    const node = useRef(null)

    if(flash) {
        setTimeout(() => { 
            document.querySelector('div.App').scrollTo(0, node.current.getBoundingClientRect().y - 70)
            setFlash(false)
        }, 500)
    }

    const data = exams.map((d, i) => ({ x:d, y: [props.data[i].richtig || 0, props.data[i].gesamt || 0]}))
    const max = Math.max(..._.map(d => _.ceil(d.gesamt * 1.1) || 0, props.data))
    return (
        <div className="card m-2" style={{width: '20rem'}}>
            <div ref={node} className={`card-body ${flash ? 'bg-primary' : ''}`} style={{transition: '5s'}}>
                <span className="font-weight-bold">{props.name}</span>
                <div className="p-4">
                <div className='mb-1'>
                    <ColorLegend text={t('gestellte Fragen')} style={{backgroundColor :'hsla(250, 100%, 50%, .6)'}}/>
                    <ColorLegend text={t('richtige Antworten')} style={{backgroundColor :'hsla(250, 100%, 50%)'}}/>
                </div>
                    <OrdinalChart style={{height:'15rem'}} xDomain={exams} yDomain={[0,max]}>
                        <YAxis ticks={{count: Math.min(max, 4)}} />
                        <XAxis />
                        <BarGraph labels data={ data } color="hsla(250, 100%, 50%, .6)" />
                    </OrdinalChart>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Subject)