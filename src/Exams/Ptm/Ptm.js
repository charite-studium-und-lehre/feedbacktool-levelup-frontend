import React from 'react'
import _ from 'lodash'
import { scaleOrdinal } from 'd3-scale'
import { schemeGreens } from 'd3-scale-chromatic'
import { OrdinalChart } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis'
import BarGraph from '../../Charting/BarGraph'
import PointGraph from '../../Charting/PointGraph'
import Subjects from '../Subjects'
import SubjectsTabs from '../../Core/Tabs'
import Subject from './Subject'
import Legend from '../../Charting/Legend'
import LegendTexts from '../../Core/LegendTexts'
import { withTranslation } from 'react-i18next'
const colors = scaleOrdinal(schemeGreens[3])

const labels = ['richtig', 'falsch', 'nicht beantwortet']
const confidence = ['sicher', 'wahrscheinlich', 'geraten']
const results = [
    _.sampleSize(_.range(10, 100), 3).sort(),
    _.sampleSize(_.range(10, 100), 3).sort(),
    [_.random(100)]
]
const data = [
    _.range(2).map((d, i) => ({x: labels[i], result: results[i][2], color: colors(2)})),
    _.range(2).map((d, i) => ({x: labels[i], result: results[i][1], color: colors(1)})),
    _.range(3).map((d, i) => ({x: labels[i], result: results[i][0], color: colors(0)})),
]
const Ptm = ({ match, t }) => {
        const LegendText = LegendTexts(t).Exams.Ptm
        const sample = Subjects()
            .map(c => ({...c, subjects: c.subjects.map(s => ({ ...s, correct: Math.floor(Math.random() * s.questions)})).sort((a,b) => - a.correct / (a.questions+.1) + b.correct / (b.questions + .1)) }))
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h4 className="mr-auto">PTM - {match.params.test}</h4>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <div className="d-flex flex-wrap">
                        <div className="card m-2 flex-grow-1" style={{width: '60rem'}}>
                            <div className="card-body">
                                <Legend title={LegendText.Totals.title}>{LegendText.Totals.text}
                                    <div className="mt-2">{confidence.map((c, i) => 
                                        <span className="d-inline-block mr-2" style={{height: '1.2rem', lineHeight: '1.2rem'}}>
                                            <span className="d-inline-block mr-1" style={{width: '2rem', height: '100%', backgroundColor: colors(i)}}>&nbsp;</span>
                                            {c}
                                        </span>)}
                                        <span className="d-inline-block mr-2" style={{height: '1.2rem', lineHeight: '1.2rem'}}>
                                            <span className="d-inline-block mr-1" style={{borderRadius: '.6rem', width: '.6rem', height: '.6rem', backgroundColor: 'rgba(0,0,0,.6)'}}></span>
                                           {t(` Durchschnitt in der Kohorte`)}
                                        </span>
                                    </div>
                                </Legend>
                                <div className="p-2">
                                    <OrdinalChart xDomain={labels} yDomain={[0,100]}>
                                        <XAxis />
                                        <YAxis />
                                        {data.map(d => <BarGraph labels data={d.map(s => ({...s, y: s.result}))} />)}
                                        <PointGraph color="rgba(0, 0, 0, .6)" data={labels.map(l => ({x: l, y: _.random(30, 85)}))} />
                                    </OrdinalChart>
                                </div>
                            </div>
                        </div>
                        <div className="card m-2 flex-grow-1" style={{width: '20rem'}}>
                            <div className="card-body">
                                <Legend title={LegendText.Strengths.title}>{LegendText.Strengths.text}</Legend>
                                <div>
                                    {_.take(_.flatMap(sample, c => c.subjects).sort((a,b) => -a.correct / a.questions + b.correct / b.questions), 3).map(s =>
                                        <div key={s.title} className="py-2">
                                            <h5>{s.title}</h5>
                                            <div className="my-1 text-center text-white question-bar" style={{backgroundImage: `linear-gradient(to right, rgba(51, 137, 51, 0.8) ${s.correct / s.questions * 100}%, rgba(51, 137, 51, 0.4) ${s.correct / s.questions * 100}%)`}}>
                                            {s.correct} von {s.questions} richtig
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <div className="card p-3">
                        {/* <SubjectsTabs 
                            tabTitles={sample.map(c => c.title)}
                            tabContents={sample.map(c => 
                                <div className="d-flex flex-wrap">
                                    {c.subjects.map(s => <Subject key={s.title} {...s} />)}
                                </div>
                            )}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation() (Ptm)