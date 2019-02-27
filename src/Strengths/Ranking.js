import React, { Component } from 'react'
import _ from 'lodash'
import Legend from '../Charting/Legend'
import makeExtendable from '../Core/makeExtendable'
import LegendTexts from '../Core/LegendTexts'
const LegendText = LegendTexts.Strengths

const Ranking = props =>
    <div className="card m-2">
        <div className="card-body">
            <Legend title={LegendText.Semester.title}>{LegendText.Semester.text}</Legend>
            <div>
                {_.take(props.subjects.sort((a,b) => -a.correct / a.questions + b.correct / b.questions), props.extended ? props.subjects.length : 3).map((s, i) =>
                    <div key={s.title} className="py-2">
                        <h5><span className="text-primary">#{i+1}</span> {s.title}</h5>
                        <div className="my-1 text-center text-white question-bar" style={{backgroundImage: `linear-gradient(to right, rgba(51, 137, 51, 0.8) ${s.correct / s.questions * 100}%, rgba(51, 137, 51, 0.4) ${s.correct / s.questions * 100}%)`}}>
                        {s.correct} von {s.questions} richtig
                            {s.mean && <div className="dot" style={{left: `calc(${s.mean / s.questions * 100}% - .4rem)`}}/>}
                        </div>
                    </div>
                )}
            </div>
            <div className="text-right">
                <span className="text-primary" style={{cursor: 'pointer'}} onClick={props.toggleExtended}>
                    {props.extended ? 'weniger anzeigen' : 'mehr anzeigen'}
                </span>
            </div>
        </div>
    </div>

export default makeExtendable(Ranking)