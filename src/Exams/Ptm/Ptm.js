import React from 'react'
import { OrdinalChart } from '../../Charting/Chart'
import { XAxis, YAxis } from '../../Charting/Axis'
import BarGraph from '../../Charting/BarGraph'
import Subjects from '../Subjects'
import Extendable from '../../Core/Extendable'
import Subject from './Subject'

const labels = ['richtig', 'falsch', 'weiß nicht']
const Ptm = ({ match }) => {
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
                        <div className="card m-2 flex-fill">
                            <div className="card-body">
                                <h4>Gesamt</h4>
                                <div className="p-2">
                                    <OrdinalChart xDomain={labels} yDomain={[0,100]}>
                                        <XAxis />
                                        <YAxis />
                                        <BarGraph labels data={new Array(3).fill(0).map((d,i) => ({x: labels[i], y: Math.floor(Math.random() * 100)}))} />
                                    </OrdinalChart>
                                </div>
                            </div>
                        </div>
                        <div className="card m-2 flex-fill">
                            <div className="card-body">
                                <h4>Stärken</h4>
                                <div>
                                    <h5>Deine 3 besten Fächer</h5>
                                    {sample.map(c =>
                                        <div key={c.title}>
                                            <p><i>{c.title}</i>: {c.subjects[0].title}</p>
                                            <div className="my-1 text-center text-white question-bar" style={{backgroundImage: `linear-gradient(to right, rgba(51, 137, 51, 0.8) ${c.subjects[0].correct / c.subjects[0].questions * 100}%, rgba(51, 137, 51, 0.4) ${c.subjects[0].correct / c.subjects[0].questions * 100}%)`}}>
                                            {c.subjects[0].correct} von {c.subjects[0].questions} richtig
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
                    {sample.map(c =>
                        <Extendable key={c.title} title={c.title}>
                        {c.subjects.map((s, i) => 
                            <Subject {...s} key={i} id={i} />
                        )}
                        </Extendable>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Ptm